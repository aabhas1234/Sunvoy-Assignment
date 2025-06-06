const { configDotenv } = require("dotenv");
const {getTokens}=require('./utilities/get_tokens')
const {getpayload}= require('./utilities/getpayload')
const {Myself}=require('./utilities/get_myself')
const {updatefile}= require('./utilities/updatefile');

const dotenv= require('dotenv');

const {get_users}=require('./utilities/get_users')
dotenv.config();
//console.log("oknot");
const getdata = async () => {
//console.log("ok");

//console.log(tokenized_string);
let users= await get_users();
updatefile(users);
const token=await getTokens();
const {fullPayload}=getpayload(token);
//console.log(fullPayload);
const myself=await Myself(fullPayload);
users.push(myself);
updatefile(users);
}
getdata();
