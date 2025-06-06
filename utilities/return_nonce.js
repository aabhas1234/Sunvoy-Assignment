const cheerio = require("cheerio");
const getnonce= async ()=>{
    const BaseURL = process.env.BaseURL;
    const getResp = await fetch(`${BaseURL}`+"login");
    const html = await getResp.text();
    //console.log(html);
    const $ = cheerio.load(html);
    const nonce = $('input[name="nonce"]').val();
    return nonce;
}
module.exports={getnonce};