const fs= require('fs');
const updatefile=(users)=>{let final=JSON.stringify(users,null, 2);
fs.writeFile('Users.json',final,'utf-8',()=>{
  console.log("file written");
})};
module.exports={updatefile};
