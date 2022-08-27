import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'

export default function BlogDetail() {
    const params = useParams(); 
    const [articles, setArticles] = useState({});
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false)
    
    useEffect(function () {
        async function getArticles() {
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);
            const response = await request.json();

            if(!request.ok){
                setNotFound(true);
            }

            document.title = response.title;
            setArticles(response);
            setLoading(false);
        }
        getArticles();
    }, [params])

    if (notFound) {
        return <h1 className="section">Upsss, halaman tidak tersedia....</h1>
    }

    return (
        <section className="section">
            {loading && <i>Memuat Artikel.....</i>}
            {!loading && (
                <>
                <h1 className="article-title" >{articles.title}</h1>
                <time className="article-date" >
                    {new Date(articles.publishedAt).toLocaleDateString()}
                </time>
                <img src={articles.imageUrl} alt={articles.title} className="article-img"/>
                <article className="article-summary" >{articles.summary}</article>
                <p className="article-source" >Read full Article : <a className="api-link" href={articles.url} target="_blank" rel="noreferrer">{articles.newsSite}</a></p>
                </>                    
            )}
        </section>   
    )
}