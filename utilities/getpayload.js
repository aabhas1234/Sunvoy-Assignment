const r= require("crypto");
const getpayload=function(result) {
    const e = Math.floor(Date.now() / 1e3)
      , i = {
        ...result,
        timestamp: e.toString()
    }
      , n = Object.keys(i).sort().map(t => `${t}=${encodeURIComponent(i[t])}`).join("&")
      , o = r.createHmac("sha1", "mys3cr3t");
    o.update(n);
    const h = o.digest("hex").toUpperCase();
    return {
        fullPayload: `${n}&checkcode=${h}`,
    }
  }
module.exports={getpayload};