import { Button } from "flowbite-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

interface ProductListPaginationProps {
    totalPages: number,
    currentPage: number,
    query: string
}

const renderNextButton = (
        currentPage: number, 
        totalPage: number,
        query: string): JSX.Element => {

    if (currentPage < totalPage) {
        return(
            <Button color={"dark"} as={Link} href={`/shop?page=${currentPage + 1}&name=${query}`}>
                <ArrowRight />
            </Button>
        )
    }

    return <></>

}

const renderPreviousButton = (currentPage: number, query: string): JSX.Element => {

    if (currentPage > 1) {
        return(
            <Button color={"dark"} as={Link} href={`/shop?page=${currentPage - 1}&name=${query}`}>
                <ArrowLeft />
            </Button>
        )
    }

    return <></>

}

const ProductListPagination = ({ totalPages , currentPage, query }: ProductListPaginationProps):JSX.Element => {

    return ( 
        <div className="flex justify-center mt-5">
            {renderPreviousButton(currentPage, query)}
            <p className="mx-5 font-semibold text-3xl">{currentPage} / {totalPages}</p>
            {renderNextButton(currentPage, totalPages, query)}
        </div>
    );
}

export default ProductListPagination;