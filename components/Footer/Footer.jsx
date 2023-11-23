import Link from 'next/link'
import '../Footer/footer.css'
const Footer = ()=>{
    return (
        <div className="footer">
            <Link href={"/"}>
            <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699209536/E-COMERCE%20CODER/29c6fee-blue_short_oraeed.svg'></img>
            </Link>
            <h1 style={{color:"whitE"}}>Derechos reservados de TMDB.</h1>
        </div>
    )
}
export default Footer