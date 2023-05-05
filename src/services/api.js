import axios from "axios";

export const commonrequest = async(methods,url,body,header)=>{
    let config = {
        method:methods,
        url,
        //for register and update content type is multipart/formdata get dynamicaaly
        headers:header ? 
        header:{
            "Content-Type":"application/json"
        },
        data:body
    }

    //usingaxios instance- available config options for making requests
    return axios(config).then((data)=>{
        return data
    }).catch((error)=>{
        return error
    })
}