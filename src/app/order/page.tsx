
import { JSX } from "react";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { OrderSearchParams, RestConfiguration } from "@/schema/entity";
import { getHTTPPropsWithToken } from "@/util/httpUtil";
import { GetAccountOrderListResponse } from "@/schema/response";
import ListOrder from "@/components/order/ListOrder";

interface OrderPageProps {
  searchParams: Promise<OrderSearchParams>;
}

const getListOfOrder = async (searchParams : OrderSearchParams): Promise<GetAccountOrderListResponse> => {

    const restConfiguration: RestConfiguration = await getHTTPPropsWithToken();

    const params: URLSearchParams = new URLSearchParams({
        "isPaginate": "true",
        "isActive": "true",
        "perPage": "5",
        "page": searchParams.page || "1",
        "name": searchParams.orderReference || ""
    });

    const endpoint:string = `${restConfiguration.apiCoreHost}/api/v1/account/orders?${params.toString()}`;

    let headers: object = {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${restConfiguration.coreAccessToken}`
    }

    const agent: AxiosInstance = axios.create({
        baseURL: endpoint,
        headers: headers
    })

    let response: AxiosResponse<GetAccountOrderListResponse> = await agent.get(endpoint);
    
    return response.data;

}

const Order = async ({ searchParams }: OrderPageProps): Promise<JSX.Element> => {

    const resolvedSearchParams: OrderSearchParams = await searchParams;    
    const response: GetAccountOrderListResponse = await getListOfOrder(resolvedSearchParams);
    const { orders, metadata } = response.data;

    return <ListOrder metadata={metadata} orders={orders} />
 
}

export default Order;