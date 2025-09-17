import axios, { AxiosInstance, AxiosResponse } from "axios";
import { JSX } from "react"
import PaymentOrderDetailWrapper from "@/components/order/PaymentOrderDetailWrapper";
import { GetOrderDetailResponse } from "@/schema/response";
import { RestConfiguration } from "@/schema/entity";
import { getHTTPPropsWithToken } from "@/util/httpUtil";

interface PaymentOrderDetailProps {
  params: Promise<{
    orderReference: string;
  }>
}

const getOrderDetail = async (orderReference: string): Promise<GetOrderDetailResponse> => {

    const restConfiguration: RestConfiguration = await getHTTPPropsWithToken();
    const endpoint:string = `${restConfiguration.apiCoreHost}/api/v1/order/detail/${orderReference}`;
    
    let headers: object = {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${restConfiguration.coreAccessToken}`
    }

    const agent: AxiosInstance = axios.create({
        baseURL: endpoint,
        headers: headers
    })

    let response: AxiosResponse<GetOrderDetailResponse> = await agent.get(endpoint);

    return response.data;

}

const PaymentOrderDetail = async ({ params }: PaymentOrderDetailProps):Promise<JSX.Element> => {

    const { orderReference } = await params;
    const orderDetailResponse: GetOrderDetailResponse = await getOrderDetail(orderReference)
    const { order } = orderDetailResponse.data;
    
    return <PaymentOrderDetailWrapper order={order} />
}

export default PaymentOrderDetail