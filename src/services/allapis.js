import {commonrequest} from "./api"
import {BASE_URL} from "./baseurl"

//registerfunc will be called by register page
export const registerfunc = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/user/register`,data,header);
}
//to get all user
export const getallusers = async()=>{
    return await commonrequest("GET",`${BASE_URL}/user/getallusers`,"");
}

//get a particular user
export const getauser = async(id)=>{
    return await commonrequest("GET",`${BASE_URL}/user/view/${id}`,"");
}