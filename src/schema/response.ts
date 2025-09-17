import { Account, Order, OrderWithItems, Product } from "./entity";

interface Metadata {
    page: number;
    perPage: number;
    totalData: number;
    totalPage: number;
}

interface GetProductListResponseData {
    products: Product[],
    metadata: Metadata
}

interface GetAccountOrderListResponseData {
    orders: Order[],
    metadata: Metadata
}

interface GetProductDetailResponseData {
    product: Product,
}

interface GetAccountDetailResponseData {
    account: Account
}

interface GetOrderDetailResponseData {
    order: OrderWithItems
}

interface GetProductDetailResponse {
    data: GetProductDetailResponseData
}

interface GetProductListResponse {
    data: GetProductListResponseData
}


interface GetAccountOrderListResponse {
    data: GetAccountOrderListResponseData
}

interface GetOrderDetailResponse {
    data: GetOrderDetailResponseData
}

interface GetAccountDetailResponse {
    data: GetAccountDetailResponseData
}

export type {
    GetProductListResponseData,
    GetProductListResponse,
    GetProductDetailResponse,
    GetProductDetailResponseData,
    GetAccountOrderListResponse,
    GetAccountOrderListResponseData,
    GetOrderDetailResponse,
    GetOrderDetailResponseData,
    GetAccountDetailResponse,
    Metadata
}