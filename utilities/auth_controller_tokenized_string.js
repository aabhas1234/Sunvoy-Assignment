const fs=require('fs');
const {getnonce}=require('./return_nonce');
const {fetch_cookies}=require('./fetch_cookies')
const fetched=async(tokenized_string)=>{
    const BaseURL = process.env.BaseURL;
    const res= await fetch(`${BaseURL}`+"api/users",{
      method:'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": tokenized_string,
      }
      } );
      return res;
  }
const create_tokenized_string=async()=>{
    let nonce=await getnonce();
    tokenized_string=await fetch_cookies(nonce);
    return tokenized_string;
  }
const check_tokenized=async ()=>{
  
    
    console.log('ok');
    let tokenized_string;
    // let prev;
    let res;
    if (fs.existsSync('record.json'))
   { 
    let data=fs.readFileSync('record.json','utf-8');
    if(data)
    {
    let parsed=JSON.parse(data);
    res= await fetched(parsed.tokenized_string);
    if(res.status==401)
    {

      // prev=parsed.tokenized_string;
      console.log("Path:/api/Users -> POST method -> Auth Credentials Not valid , had to rehit the api to get the auth credentials!");
      tokenized_string=await create_tokenized_string();
      res= await fetched(tokenized_string);
    }
    else
    {
      console.log("Path:/api/Users -> POST method -> Previous Auth credentials are valid and are used this time");
    }
    }
    else
    {
      console.log("Path:/api/Users -> POST method -> Records are initially Empty and so there are no Auth tokens available , had to make a fresh request to th api!!")
      tokenized_string=await create_tokenized_string();
      // prev=tokenized_string;
      res= await fetched(tokenized_string); 
    }
  }
  else
  {
    console.log("Path:/api/Users -> POST method -> First Time request , so no auth credentials Present already, therefore a new request was made to this api!")
    tokenized_string=await create_tokenized_string();
      // prev=tokenized_string;
      res= await fetched(tokenized_string); 
  }
    if(tokenized_string)
    {
    let flag=true;
    fs.writeFileSync('record.json',JSON.stringify({flag,tokenized_string},null,2));
    }
    let final= await res.json();
    return final;
}
module.exports={check_tokenized}