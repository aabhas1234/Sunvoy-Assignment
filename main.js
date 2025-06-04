const cheerio = require("cheerio");
const { URLSearchParams } = require("url");

const getdata = async () => {
  const BaseURL = "https://challenge.sunvoy.com/";

  const getResp = await fetch(`${BaseURL}`+"login");
  const html = await getResp.text();
  const $ = cheerio.load(html);

  const nonce = $('input[name="nonce"]').val();

  const formData = new URLSearchParams();
  formData.append("username", "demo@example.org");
  formData.append("password", "test");
  formData.append("nonce", nonce);
  console.log(formData);
  console.log(nonce);

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
 

const res= await fetch(`${BaseURL}`+"api/users",{
method:'POST',
headers: {
  "Content-Type": "application/x-www-form-urlencoded",
  "Cookie": tokenized_string,
}
} );
let users= await res.json();
console.log(users);
//   const data = await protectedResp.json();
//   console.log("Users:", data);
};

getdata();
