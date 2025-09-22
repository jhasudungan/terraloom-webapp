import CartOrderWrapper from "@/components/cart/CartOrderWrapper";
import { RestConfiguration } from "@/schema/entity";
import { GetAccountDetailResponse } from "@/schema/response";
import { getHTTPPropsWithToken } from "@/util/httpUtil";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { JSX } from "react";

const getAccountDetail = async (): Promise<GetAccountDetailResponse> => {

    const restConfiguration: RestConfiguration = await getHTTPPropsWithToken()
    const endpoint:string = `${restConfiguration.apiCoreHost}/api/v1/account/detail`;

    const headers: object = {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${restConfiguration.coreAccessToken}`
    }

    const agent: AxiosInstance = axios.create({
        baseURL: endpoint,
        headers: headers
    })

    const response: AxiosResponse<GetAccountDetailResponse> = await agent.get(endpoint);

    return response.data;

}

const Cart = async ():Promise<JSX.Element> => {

    const response: GetAccountDetailResponse = await getAccountDetail()
    const { account } = response.data;

    return <CartOrderWrapper account={account} />
}

export default Cart;