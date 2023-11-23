import Link from 'next/link'
import '../TarjetasColeccion/tarjetasColeccion.css'
const { default: TarjetaColeccion } = require("./TarjetaColeccion/TarjetaColeccion")

const TarjetasColeccion = ()=>{
    return (
        <div className="tarjetasColeccion">
            <Link href={'/colecciones/marvel'}><TarjetaColeccion imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699381494/App%20peliculas/scale_qf0gsu.png"} video={"https://res.cloudinary.com/dcf9eqqgt/video/upload/v1699388114/App%20peliculas/202311071714_bzs5wa.mp4" } /></Link>
            <Link href={'/colecciones/disney'}><TarjetaColeccion imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699385470/App%20peliculas/scale_zygice.png"} video={"https://res.cloudinary.com/dcf9eqqgt/video/upload/v1699388397/App%20peliculas/202311071719_s4ez67.mp4"}/></Link>
            <Link href={'/colecciones/pixar'}><TarjetaColeccion imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699385444/App%20peliculas/scale_rrjknm.png"} video={"https://res.cloudinary.com/dcf9eqqgt/video/upload/v1699389766/App%20peliculas/202311071742_xbc4lq.mp4"} /></Link>
            <Link href={'/colecciones/starWars'}><TarjetaColeccion imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699385484/App%20peliculas/scale_ecoos7.png"} video={"https://res.cloudinary.com/dcf9eqqgt/video/upload/v1699388875/App%20peliculas/202311071727_ltjcmi.mp4"} /></Link>
            <Link href={'/colecciones/national'}><TarjetaColeccion imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699385517/App%20peliculas/scale_ib6lzg.png"} video={"https://res.cloudinary.com/dcf9eqqgt/video/upload/v1699389217/App%20peliculas/202311071732_kgbhd2.mp4"} /></Link>
        </div>
    )
}
export default TarjetasColeccion