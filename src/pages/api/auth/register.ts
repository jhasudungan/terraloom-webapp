import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { RestConfiguration } from '@/schema/entity';
import { getHTTPProps, handleProviderError } from '@/util/httpUtil';

const registerService = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method !== 'POST') {
        return res.status(405).end()
    };

    const restConfiguration: RestConfiguration = getHTTPProps()
    const endpoint: string = restConfiguration.apiCoreHost+"/api/v1/auth/register";

    const agent: AxiosInstance = axios.create({
        baseURL: endpoint
    })

    try {
        let providerResponse = await agent.post(endpoint, req.body);
        return res.status(200).json(providerResponse.data);
    } catch(error: any) {
        return handleProviderError(error, res);
    }

}

export default registerService;