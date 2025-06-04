const get_users=async (tokenized_string)=>{
  const BaseURL = process.env.BaseURL;
    const res= await fetch(`${BaseURL}`+"api/users",{
        method:'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Cookie": tokenized_string,
        }
        } );
        let users= await res.json();
        return users;
}
module.exports={get_users};