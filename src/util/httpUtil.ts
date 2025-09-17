import { RestConfiguration } from '@/schema/entity';
import { NextApiResponse } from 'next';
import { cookies } from 'next/headers';

const getHTTPPropsWithToken = async (): Promise<RestConfiguration> => {
    
    let apiCoreHost: string = process.env.CORE_API_HOST || "http://localhost:8081"
    
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;
    
    if (!token) {
        throw new Error('Authentication token not found');
    }

    const restConfiguration: RestConfiguration =  {
        apiCoreHost: apiCoreHost,
        coreAccessToken:token
    }

    return restConfiguration;

}

const getHTTPProps = ():RestConfiguration => {
    
    let apiCoreHost: string = process.env.CORE_API_HOST || "http://localhost:8081"
       
    const restConfiguration: RestConfiguration =  {
        apiCoreHost: apiCoreHost,
        coreAccessToken: "N/A"
        
    }

    return restConfiguration;

}

const  getQueryParamAsString = (param: string | string[] | undefined, defaultValue = ""):string => {
  
  if (Array.isArray(param)) {
    return param[0] || defaultValue;
  }

  return param || defaultValue;
}

export function handleProviderError(error: any, res: NextApiResponse) {
    console.error("Provider Error:", error?.response?.status, error?.response?.data);

     if (error.response?.status === 403) {
        return res.status(403).json({
            responseCode: "03",
            responseMessage: "Access denied"
        });
    }

    if (error.response?.data) {
        return res.status(error.response.status || 500).json(error.response.data);
    }

    return res.status(500).json({
        responseCode: "99",
        responseMessage: "Internal Error",
    });
}

const checkLoggedIn = async(): Promise<boolean> => {

    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;
    
    if (!token) {
        return false;
    }

    return true;
}

export { getHTTPProps, getHTTPPropsWithToken, getQueryParamAsString, checkLoggedIn }