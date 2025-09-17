import axios, { AxiosInstance } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { RestConfiguration } from '@/schema/entity';
import { getHTTPProps, handleProviderError } from '@/util/httpUtil';

const updateAccountService = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method !== 'POST') {
        return res.status(405).end()
    };

    const restConfiguration: RestConfiguration = getHTTPProps();
    const endpoint:string = restConfiguration.apiCoreHost+"/api/v1/account/update";

    const agent: AxiosInstance = axios.create({
        baseURL: endpoint,
        headers: {
            Authorization: `Bearer ${req.cookies.token}`, // Replace with your token
        },
    })

    try {
        const providerResponse = await agent.put(endpoint, req.body);
        return res.status(200).json(providerResponse.data);
    } catch(error: any) {
        return handleProviderError(error, res);
    }
    
}

export default updateAccountService;