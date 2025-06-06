const { configDotenv } = require("dotenv");
const {getTokens}=require('./utilities/get_tokens')
const {getpayload}= require('./utilities/getpayload')
const fs= require('fs');
const { URLSearchParams } = require("url");
const { JSDOM } = require('jsdom');
const {Myself}=require('./utilities/get_myself')
const {updatefile}= require('./utilities/updatefile');
const {getnonce}=require('./utilities/return_nonce');
const dotenv= require('dotenv');
const {fetch_cookies}=require('./utilities/fetch_cookies')
const {get_users}=require('./utilities/get_users')
dotenv.config();
//console.log("oknot");
const getdata = async () => {
//console.log("ok");
let nonce=await getnonce();
let tokenized_string=await fetch_cookies(nonce);
let users= await get_users(tokenized_string);
updatefile(users);
const token=await getTokens(tokenized_string);
const {fullPayload}=getpayload(token);
//console.log(fullPayload);
const myself=await Myself(fullPayload);
users.push(myself);
updatefile(users);
}
getdata();
