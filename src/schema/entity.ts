interface RestConfiguration {
    apiCoreHost: string,
    coreAccessToken: string
}

// Model Entity
interface CategoryOnProduct {
    id: number;
    name: string;
}

interface Product {
    id: number;
    name: string;
    description: string;
    stock: number;
    price: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
    imageUrl: string;
    imageUrlSecure: string;
    category : CategoryOnProduct;
}

interface Payment {
    paymentReference: string,
    total: number,
    paymentDate: string,
    status: string
    cardHolderName: string
    cardNumber: string
}

interface Account {
    id: string,
    displayName: string,
    username: string,
    email: string,
    registeredAddress: string
}

interface Order {
    orderReference: string,
    total: number,
    orderDate: string,
    status: string
    payment: Payment
}

interface ProductOnOrderItem {
    id: number,
    name: string,
    imageUrl: string
}

interface OrderItem {
    orderItemReference: string,
    quantity: number,
    price: number,
    total: number,
    product: ProductOnOrderItem
}

interface OrderWithItems {
    orderReference: string,
    total: number,
    deliveryAddress: string,
    orderDate: string,
    status: string
    payment: Payment
    orderItems: OrderItem[]
}

// Params
interface ProductSearchParams {
    name?: string;
    categoryName?: string;
    page?: string;
}

interface OrderSearchParams {
    orderReference?: string;
    page?: string;
}

export type {
    RestConfiguration,
    ProductSearchParams,
    OrderSearchParams,
    Product,
    Payment,
    Order,
    Account,
    ProductOnOrderItem,
    OrderItem,
    OrderWithItems
}