import { Button } from "flowbite-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

interface ListOrderPaginationProps {
    totalPages: number,
    currentPage: number
}

const renderNextButton = (currentPage: number, totalPage: number): JSX.Element => {

    if (currentPage < totalPage) {
        return(
            <Button color={"dark"} as={Link} href={`/order?page=${currentPage + 1}`}>
                <ArrowRight />
            </Button>
        )
    }

    return <></>

}

const renderPreviousButton = (currentPage: number): JSX.Element => {

    if (currentPage > 1) {
        return(
            <Button color={"dark"} as={Link} href={`/order?page=${currentPage - 1}`}>
                <ArrowLeft />
            </Button>
        )
    }

    return <></>

}

const renderPagesInformation = (currentPage: number, totalPages: number) => {

    if (totalPages == 0) {
        return <></>
    }

    return (
        <p className="mx-5 font-semibold">{currentPage} / {totalPages}</p>
    )
}

const ListOrderPagination = ({ totalPages , currentPage }: ListOrderPaginationProps):JSX.Element => {

    return ( 
        <div className="flex justify-center mt-5">
            {renderPreviousButton(currentPage)}
            {renderPagesInformation(currentPage, totalPages)}
            {renderNextButton(currentPage, totalPages)}
        </div>
    );
}

export default ListOrderPagination;