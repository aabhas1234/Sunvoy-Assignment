const {check_tokenized}=require('./auth_controller_tokenized_string')


const get_users=async ()=>{ 
    let users= await check_tokenized();
    return users;
}
module.exports={get_users};