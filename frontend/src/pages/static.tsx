export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();

    return {
        props: { data },
    };
}

export default function StaticPage({ data }) {
    return (
        <div>
            <h1>정적으로 가져온 데이터</h1>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <p>안녕</p>
        </div>
    );
}