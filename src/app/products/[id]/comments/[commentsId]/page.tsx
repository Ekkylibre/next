export default function ProductComment({params}: {
    params: {
        id: string;
        commentsId: string;
    }
}) {
    return (
        <h1>Comment {params.commentsId} for product {params.id}</h1>
    );
}
