import fetch from 'node-fetch';
import moment from 'moment';
import dotenv from 'dotenv'
import process from 'process';

dotenv.config()


export const requestTokens = async () => {
  const response = await fetch(`${process.env.FORMANT_API_URL}/v1/admin/auth/login`, {
      method: "Post",
      body:JSON.stringify({
          "email": process.env.FORMANT_DEPLOYMENT_SERVICE_EMAIL
          , "password": process.env.FORMANT_DEPLOYMENT_SERVICE_PASSWORD
          , "tokenExpirationSeconds": 604800
      }),
      headers:{
          "Content-Type":"application/json"
      }
      
  })

  const credentials =  await response.json()
  process.env['FORMANT_REFRESH_TOKEN'] = credentials.authentication.refreshToken;
  process.env['FORMANT_REFRESH_TOKEN_EXPIRATION'] = moment().add(604800,"s").utc().valueOf();

  return true

}


export const refreshToken = async ()=>{
    try{
        console.log(moment().utc().valueOf() < process.env['FORMANT_REFRESH_TOKEN_EXPIRATION'])
        if(moment().utc().valueOf() < process.env['FORMANT_REFRESH_TOKEN_EXPIRATION'])
            return {success:true}

       const success = await requestTokens()

       return {success, error:null}

    } catch(e){
        return {success:false, error:e}
    }
}