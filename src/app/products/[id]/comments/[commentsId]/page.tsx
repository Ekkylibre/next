import { notFound } from "next/navigation";

export default function ProductComment({ params }: {
    params: {
        id: string;
        commentsId: string;
    }
}) {
    if (parseInt(params.id) > 50) {
        notFound();
    }
    return (
        <h1>Comment {params.commentsId} for product {params.id}</h1>
    );
}
