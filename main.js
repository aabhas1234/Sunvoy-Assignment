const { configDotenv } = require("dotenv");
const { URLSearchParams } = require("url");
const {updatefile}= require('./utilities/updatefile');
const {getnonce}=require('./utilities/return_nonce');
const dotenv= require('dotenv');
const {fetch_cookies}=require('./utilities/fetch_cookies')
const {getself_details}=require('./utilities/getself_details')
const {get_users}=require('./utilities/get_users')
dotenv.config();
const getdata = async () => {
let nonce=await getnonce();
let tokenized_string=await fetch_cookies(nonce);
let users= await get_users(tokenized_string);
updatefile(users);
}
getdata();
