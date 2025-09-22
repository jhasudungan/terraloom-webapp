import ProductDetail from "@/components/shop/ProductDetail";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { JSX } from "react";
import { getHTTPProps, checkLoggedIn } from "@/util/httpUtil";
import { RestConfiguration } from "@/schema/entity";
import { GetProductDetailResponse } from "@/schema/response";

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>
}

const getProductDetail = async (id: string): Promise<GetProductDetailResponse> => {

  const restConfiguration: RestConfiguration = getHTTPProps()
  const endpoint:string = `${restConfiguration.apiCoreHost}/api/v1/product/${id}`;
  
  const headers: object = {
    "Content-Type": "application/json"
  }

  const agent: AxiosInstance = axios.create({
      baseURL: endpoint,
      headers: headers
  })

  const response: AxiosResponse<GetProductDetailResponse> = await agent.get(endpoint);

  return response.data;

}

const ProductDetailPage = async ({ params  }: ProductDetailPageProps): Promise<JSX.Element> => {

  const resolvedParrams = await params;
  const response: GetProductDetailResponse = await getProductDetail(resolvedParrams.id);
  const isLoggedIn: boolean = await checkLoggedIn();
  const { product } = response.data;

  return <ProductDetail product={product} isLoggedIn={isLoggedIn} />

}

export default ProductDetailPage;