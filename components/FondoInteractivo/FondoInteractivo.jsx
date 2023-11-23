"use client"
import React, { useState } from "react"
import '../FondoInteractivo/fondoInteractivo.css'
 import TarjetaFondoInteractivo from "./TarjetaFondoInteractivo/TarjetaFondoInteractivo"
const FondoInteractivo = ()=>{
    const [fondo, setFondo] = useState("https://res.cloudinary.com/dcf9eqqgt/image/upload/v1698714156/App%20peliculas/hPea3Qy5Gd6z4kJLUruBbwAH8Rm_gxpfwo.jpg")
    return (
        <div className="fondoInteractivo">
            <h2>Ultimos avances</h2>
            <div className="fondoInteractivo__tarjetas">
                <TarjetaFondoInteractivo nombre={"Capitana Marvel"} setFondo={setFondo} url={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1698714156/App%20peliculas/hPea3Qy5Gd6z4kJLUruBbwAH8Rm_gxpfwo.jpg"}  />
                <TarjetaFondoInteractivo nombre={"Loki"} setFondo={setFondo} url={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1698793698/App%20peliculas/feSiISwgEpVzR1v3zv2n2AU4ANJ_bxwqat.jpg"} />
                <TarjetaFondoInteractivo nombre={"Los ilusionistas"} setFondo={setFondo} url={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1698793722/App%20peliculas/tC78Pck2YCsUAtEdZwuHYUFYtOj_y0yznm.jpg"} />
                <TarjetaFondoInteractivo nombre={"Terminator 3"} setFondo={setFondo} url={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1698793788/App%20peliculas/iiXliCeykkzmJ0Eg9RYJ7F2CWSz_fxv0d4.jpg"} />
            </div>
            <img className="fondoInteractivo__imagenFondo" src={fondo}></img>
        </div>
    )
}
export default FondoInteractivo