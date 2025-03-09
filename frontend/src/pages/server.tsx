export async function getServerSideProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();


    return {
        props: { data },
    };
}

export default function ServerPage({ data }) {
    return (
        <div>
            <h1>서버에서 가져온 데이터</h1>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>
    );
}