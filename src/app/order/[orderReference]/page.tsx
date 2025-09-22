import OrderDetailWrapper from "@/components/order/OrderDetailWrapper";
import { RestConfiguration } from "@/schema/entity";
import { GetOrderDetailResponse } from "@/schema/response";
import { getHTTPPropsWithToken } from "@/util/httpUtil";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { JSX } from "react";

interface OrderDetailProps {
  params: Promise<{
    orderReference: string;
  }>
}

const getOrderDetail = async (orderReference: string): Promise<GetOrderDetailResponse> => {

    const restConfiguration: RestConfiguration = await getHTTPPropsWithToken();
    const endpoint:string = `${restConfiguration.apiCoreHost}/api/v1/order/detail/${orderReference}`;
    
    const headers: object = {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${restConfiguration.coreAccessToken}`
    }

    const agent: AxiosInstance = axios.create({
        baseURL: endpoint,
        headers: headers
    })

    const response: AxiosResponse<GetOrderDetailResponse> = await agent.get(endpoint);

    return response.data;

}

const OrderDetail = async ({ params }: OrderDetailProps): Promise<JSX.Element> => {

    const { orderReference } = await params;
    const orderDetailResponse: GetOrderDetailResponse = await getOrderDetail(orderReference)
    const { order} = orderDetailResponse.data;

    return <OrderDetailWrapper order={order} />
}

export default OrderDetail;