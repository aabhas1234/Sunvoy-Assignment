const fs= require('fs');
const updatefile=(users)=>{let final=JSON.stringify(users,null, 2);
fs.writeFile('Users.json',final,'utf-8',()=>{
  if(users.length==9)
  console.log("9 Users updated In Users.json");
  else
  console.log("User Credential Added successfully in Users.json")
})};
module.exports={updatefile};
