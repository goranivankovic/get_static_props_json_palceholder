import  { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next'



export default async (req,res)=>{
    const x =getCookie('zoki')

    return res.json({msg:x})









      



}