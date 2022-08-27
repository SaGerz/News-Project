import { useEffect } from "react"

export default function Home() {
    useEffect(function () {
        document.title = 'Home'
    }, [])

    return(
        <section className="section">
        <h2 className="section-title" >Selamat datang di WebSite ini</h2>
        <p className="section-description" >Di Website Space sites ini kamu bisa membaca berita-berita terbaru mengenai spaceflight. Dan data berita harian yang ada diwebsite ini diambil dari API : <a href="https://www.spaceflightnewsapi.net/" target="_blank" className="api-link" rel="noreferrer">https://www.spaceflightnewsapi.net/</a>
        </p>
        <p className="section-description">
        Dan target dari pembuatan Website ini adalah bertujuan untuk melatih diri saya sendiri sebagai developer website ini, untuk lebih mendalami mengenai React JS. Terlebih untuk bermain dengan database dari API, melakukan Fetching database di React JS dan memahami konsep request - response ke server.
        </p>
        </section>
    )
}