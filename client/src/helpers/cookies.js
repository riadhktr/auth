import cookies from "js-cookie";

export const getCookie = (key)=>{
    return cookies.get(key)
}

export const setCookie = (key,value)=>{
    cookies.set(key,value,{expires:1})
}