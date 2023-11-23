"use client"
import '../BotonBack/botonBack.css'
import { useRouter } from 'next/navigation'
const BotonBack = ()=>{
    const router = useRouter()
    return (
        <button onClick={()=>router.back()} className='detalle__botonVolver'>Volver</button>
    )
}

export default BotonBack;