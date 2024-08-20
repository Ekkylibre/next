import { Metadata } from "next";

export const generateMetadata = ({params} : {params : {id: string}}) : Metadata => {
    return {
        title : `Product Number ${params.id}`
    }
}

export default function ProductDetails({
    params
}: {
    params: { id: string }
}) {
    return (
        <h1>Product Details {params.id}</h1>
    );
}
