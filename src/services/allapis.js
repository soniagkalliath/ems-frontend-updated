import {commonrequest} from "./api"
import {BASE_URL} from "./baseurl"

//registerfunc will be called by register page
export const registerfunc = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/user/register`,data,header);
}
//to get all user
// export const usergetFunc = async()=>{
//     return await commonrequest("GET",`${BASE_URL}/user/details`,"");

// }