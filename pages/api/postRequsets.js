
import { setCookies } from 'cookies-next';



export default async  (req, res)=>{
    if (req.method === 'POST') {
      const  ime =req.body.ime
 
      setCookies('key', 'value', { req, res, maxAge: 60 * 60 * 24 });
  
   return res.send('ok')

     
    } else {
      // Handle any other HTTP method
    return  res.send('ne radi')
    }
  }