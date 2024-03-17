import { BASE_URL } from "./baseurl";
import { commonapi } from "./commonapi";


// add user

export const newUser=async(body,header)=>{
    return await commonapi("POST",`${BASE_URL}`,body,header)
}

export const loginUser=async(body,header)=>{
    return await commonapi("POST",`${BASE_URL}/login`,body,header)
}