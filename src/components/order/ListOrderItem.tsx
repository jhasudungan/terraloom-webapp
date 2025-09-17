"use client"
import { OrderItem } from "@/schema/entity";
import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import Link from "next/link";
import { JSX, useState } from "react";

interface ListOrderItemProps {
    orderItems : OrderItem[]
}

const ListOrderItem = ( { orderItems } : ListOrderItemProps): JSX.Element => {

    // Inside your component:
    const [selectedImageUrl, setSelectedImageUrl] = useState("");
    const [selectedImageName, setSelectedImageName] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = (imageUrl: string, productName: string) => {
        setSelectedImageUrl(imageUrl);
        setSelectedImageName(productName);
        setIsModalOpen(true);
    };

    return (<>
        <div className="flex flex-col my-5 bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="border-1 border-solid border-gray-800 rounded-2xl p-3">
                <p className="text-center text-gray-800 font-light">Order Items</p>
            </div>
            <div className="my-5 overflow-y-auto max-h-96">
                {orderItems.map((item: OrderItem) => (
                    <div className="border-1 border-solid border-gray-800 rounded-2xl p-3 my-5 flex gap-3" key={item.orderItemReference}>
                        
                        {/* Image on the left */}
                        <div className="flex-shrink-0">
                            <img 
                            src={item.product.imageUrl} 
                            alt={item.product ? item.product.name : "Product image"} 
                            className="w-16 h-16 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => handleImageClick(item.product.imageUrl, item.product?.name)}
                        />
                        </div>
            
                        {/* Product info on the right */}
                        <div className="flex-1">
                            <Link href={`/shop/${item.product.id}`} className="text font-medium hover:text-blue-600 transition-colors">
                                {item.product ? item.product.name : ""}
                            </Link>
                            <p className="text font-extralight">{item.quantity ? item.quantity : ""} X Rp. {item.price ? new Intl.NumberFormat('id-ID').format(item.price) : ""}</p>
                            <p className="text font-extralight">Rp {item.total ? new Intl.NumberFormat('id-ID').format(item.total) : "" }</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>

        <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)} size="xl">
            <ModalHeader>
                {selectedImageName || "Product Image"}
            </ModalHeader>
            <ModalBody>
                <div className="flex justify-center">
                    <img 
                        src={selectedImageUrl} 
                        alt={selectedImageName || "Product image"} 
                        className="max-w-full max-h-96 object-contain"
                    />
                </div>
            </ModalBody>
        </Modal>
    </>)

}

export default ListOrderItem;