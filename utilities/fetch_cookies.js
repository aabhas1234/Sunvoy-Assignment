const fetch_cookies=async (nonce)=>{
const BaseURL = process.env.BaseURL;
const fs= require("fs");
const formData = new URLSearchParams();
formData.append("username", "demo@example.org");
formData.append("password", "test");
formData.append("nonce", nonce);


const postResp = await fetch(`${BaseURL}`+"login", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: formData,
  redirect: "manual",
});

let final= postResp.headers.getSetCookie().map((ele)=>{
  return ele.split(';')[0];
});
let tokenized_string = final.join(';');
let obj={tokenized_string};
fs.writeFileSync('record.json',JSON.stringify(obj,null,2),()=>{
  console.log("Record written");
});
return tokenized_string;
}
module.exports={fetch_cookies};

