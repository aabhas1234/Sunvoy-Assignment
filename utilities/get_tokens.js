const cheerio =require("cheerio")
const fs=require('fs');
const getTokens=async ()=>{
  let data=fs.readFileSync('record.json','utf-8');
  let parsed=JSON.parse(data);
  let result = {};
  if(parsed.flag)
  {
    console.log("Path:/api/Settings -> POST method -> Made a fresh api request for auth credentials regarding settings route post api!!")
    let tokenized_string=parsed.tokenized_string;
    let response=await fetch('https://challenge.sunvoy.com/settings/tokens',{
      method:'GET',
      headers:{
        "Cookie": tokenized_string,
      }
    });
    let res= await response.text();
    //console.log(res);
    const $ = cheerio.load(res);
    
    $('input[type="hidden"]').each((i, el) => {
      const id = $(el).attr('id');
      const value = $(el).attr('value');
      result[id] = value;
    });
    parsed.secondary=result;
    parsed.flag=false;
    fs.writeFileSync('record.json',JSON.stringify(parsed, null, 2));
  }
  else
  {
    console.log("Path:/api/Settings -> POST method -> Used the previous tokens for settings post api too, since Previous credentials are still valid!!")
    result=parsed.secondary;
  }
 
  return result;
}
module.exports={getTokens};