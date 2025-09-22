interface CollectionBanner {
    id: number,
    bannerTitle: string,
    bannerImage: string,
    bannerTagline: string
}

interface CartItem {
    id: string,
    productImage: string,
    productImageSecure: string,
    productName: string,
    quantity: number,
    price: number,
    total: number
}

export type { 
    CollectionBanner,
    CartItem
}