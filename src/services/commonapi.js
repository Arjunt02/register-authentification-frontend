import axios from "axios";

export const commonapi=async(method,url,data,header)=>{
    let reqConfig={
        url,
        method,
        data,
        Headers:header?header:{
            "content-type":"application/json"
        }
    }

    return await axios(reqConfig).then((data)=>{
        return data
    }).catch((error)=>{
        return error
    })


}