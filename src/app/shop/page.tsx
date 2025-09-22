import axios, { AxiosInstance, AxiosResponse } from "axios";
import { JSX } from "react";
import ProductList from "@/components/shop/ProductList";
import { ProductSearchParams, RestConfiguration } from "@/schema/entity";
import { getHTTPProps } from "@/util/httpUtil";
import { GetProductListResponse } from "@/schema/response";

interface ShopPageProps {
  searchParams: Promise<ProductSearchParams>
}

const getProducts = async (searchParams : ProductSearchParams): Promise<GetProductListResponse> => {

    const restConfiguration: RestConfiguration = getHTTPProps();

    const params: URLSearchParams = new URLSearchParams({
        "isPaginate": "true",
        "isActive": "true",
        "perPage": "8",
        "page": searchParams.page || "1",
        "name": searchParams.name || ""
    });

    const endpoint:string = `${restConfiguration.apiCoreHost}/api/v1/products?${params.toString()}`;
    
    const headers: object = {
        "Content-Type": "application/json",
    }

    const agent: AxiosInstance = axios.create({
        baseURL: endpoint,
        headers: headers
    })

    const response: AxiosResponse<GetProductListResponse> = await agent.get(endpoint);

    return response.data;

}

const Shop = async ({ searchParams }: ShopPageProps): Promise<JSX.Element> => {

    const resolvedSearchParams: ProductSearchParams = await searchParams;    
    const response: GetProductListResponse = await getProducts(resolvedSearchParams);
    const { products, metadata } = response.data;
    return (
        <ProductList metadata={metadata} products={products} />
    );
    
}

export default Shop;