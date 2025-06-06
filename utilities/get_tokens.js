const cheerio =require("cheerio")
const getTokens=async (tokenized_string)=>{
    let response=await fetch('https://challenge.sunvoy.com/settings/tokens',{
        method:'GET',
        headers:{
          "Cookie": tokenized_string,
        }
      });
      let res= await response.text();
      //console.log(res);
      const $ = cheerio.load(res);
      const result = {};
      $('input[type="hidden"]').each((i, el) => {
        const id = $(el).attr('id');
        const value = $(el).attr('value');
        result[id] = value;
      });
      return result;
}
module.exports={getTokens};