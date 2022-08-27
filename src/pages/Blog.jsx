import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import '../App.css'

export default function Blog (){
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(function () {
        document.title = 'Blog'
        async function getArticles () {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
            const response = await request.json();

            setArticles(response);
            setLoading(false);
        }
        getArticles();
    }, [])

    return(
        <section className="section" >
            <h1 className="section-title" > Happy reading Guys</h1>

            {loading && (<i>Memuat article .....</i>)}
            {!loading && (
                <div className="articles" >
                    {articles.map((article) => {
                        return (
                            <article key={article.id} className="article">
                                <h2 className="article-title"> 
                                    <Link to={`/blog/${article.id}`} className="article-title-items">{article.title}</Link>
                                </h2>
                                <time className="article-date" >
                                    {new Date(article.publishedAt).toLocaleDateString()}
                                </time>
                            </article>
                        )
                    })}
                </div>
            )}
        </section>
    )
}