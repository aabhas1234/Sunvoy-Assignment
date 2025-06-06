
const Myself=async (fullPayload)=>{
    const settings = await fetch("https://api.challenge.sunvoy.com/api/settings", {
      method: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded"
      },
      body: fullPayload
    })
    const myself=await settings.json();
    return myself;
}
module.exports={Myself};
  