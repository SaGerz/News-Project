import '../pages/About.css'
import { Link } from 'react-router-dom'
import '../App.css'
import { useEffect } from 'react'
// import '../App'

export default function About() {
    const redirect = () => {
        alert("Makasih yaaa dah follow 😘, tapi developernya males direct ke akun sosmednya 😜. ini buat pemanis aja biar ada isinya #hohoho")
    }

    useEffect(function () {
        document.title = 'About'
    }, [])
    
    return (
        <>
        <div className="parentContain section">
            <div className="utamaContain">
                <h1>About this blog</h1>
                <p>This website, created just for fun and practice about React js, so if you feel this website not good enough and not profesional. read back this text ☝️😅 thanks you all. And sorry this website created for mobile view only😆. 
                And now it's the Main of content, go to this <span><Link className='api-link' to="/blog">Blog</Link></span> and enjoy reading.
                </p>
            <div className="container">
                <div className="wrap">
                    <div className="card">
                        <h1 className="title" >Youtube</h1>
                        <i className="fa-brands fa-youtube icons"></i>
                        <p className="description">Me on Youtube Chanel</p>
                        <button onClick={redirect} className="btn">Skirkep</button>
                    </div>
                    <div className="card text-center">
                        <h1 className="title" >Twitter</h1>
                        <i className="fa-brands fa-twitter icons"></i>
                        <p className="description">Me on Twitter Acount</p>
                        <button onClick={redirect} className="btn">Follow</button>
                    </div>
                    <div className="card text-center">
                        <h1 className="title" >Instagram</h1>
                        <i className="fa-brands fa-instagram icons"></i>
                        <p className="description">Me on Instagram acount</p>
                        <button onClick={redirect} className="btn">Follow</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}