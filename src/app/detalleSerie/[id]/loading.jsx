import { Skeleton } from '@mui/material'
import './loading.css'
const LoadingRepartoDetalleSerie = ()=>{
    return (
        <div className="loadingReparto">
            <div className='loadingDetalle'>
    <Skeleton variant="rectangular" width={290} height={400} style={{ backgroundColor: "white", borderRadius:"10px" }} />
    <div className="eskeleton__text">
    <Skeleton variant="text" width={300} height={60} style={{ backgroundColor: "white", borderRadius:"10px" }} />
    <Skeleton variant="text" width={150} height={60} style={{ backgroundColor: "white", borderRadius:"10px" }} />
    <Skeleton variant="text" width={350} height={30} style={{ backgroundColor: "white", borderRadius:"10px" }} />
    <Skeleton variant="text" width={350} height={30} style={{ backgroundColor: "white", borderRadius:"10px" }} />
    <Skeleton variant="text" width={120} height={60} style={{ backgroundColor: "white", borderRadius:"10px" }} />
    </div>
        </div>
        <div className='loadingDetalle__temporadas'>
    <Skeleton variant="text" width={250} height={60} style={{ backgroundColor: "white", borderRadius:"10px" }} />
    <div className='loadingDetalle__temporadas__numeroTemporada'>
    <Skeleton variant="text" width={100} height={30} style={{ backgroundColor: "white", borderRadius:"10px" }} />
    <Skeleton variant="text" width={100} height={30} style={{ backgroundColor: "white", borderRadius:"10px" }} />
    <Skeleton variant="text" width={100} height={30} style={{ backgroundColor: "white", borderRadius:"10px" }} />
    </div>
    <div className='loadingDetalle__Temporadas__tarjetas'>
    <Skeleton variant="text" width={300} height={310} style={{ backgroundColor: "white", borderRadius:"10px" }} />
    <Skeleton variant="text" width={300} height={310} style={{ backgroundColor: "white", borderRadius:"10px" }} />
    <Skeleton variant="text" width={300} height={310} style={{ backgroundColor: "white", borderRadius:"10px" }} />
    <Skeleton variant="text" width={300} height={310} style={{ backgroundColor: "white", borderRadius:"10px" }} />
    <Skeleton variant="text" width={300} height={310} style={{ backgroundColor: "white", borderRadius:"10px" }} />



    </div>

    </div>
          <Skeleton variant="text" width={140} height={40} style={{ backgroundColor: "white", borderRadius:"10px" }} />
          <div className='loadingReparto__tarjetas'>
          <Skeleton variant="text" width={150} height={310} style={{ backgroundColor: "white", borderRadius:"10px" }} />
          <Skeleton variant="text" width={150} height={310} style={{ backgroundColor: "white", borderRadius:"10px" }} />
          <Skeleton variant="text" width={150} height={310} style={{ backgroundColor: "white", borderRadius:"10px" }} />
          <Skeleton variant="text" width={150} height={310} style={{ backgroundColor: "white", borderRadius:"10px" }} />
          <Skeleton variant="text" width={150} height={310} style={{ backgroundColor: "white", borderRadius:"10px" }} />
          <Skeleton variant="text" width={150} height={310} style={{ backgroundColor: "white", borderRadius:"10px" }} />
          <Skeleton variant="text" width={150} height={310} style={{ backgroundColor: "white", borderRadius:"10px" }} />
          </div>
        </div>
    )
}
export default LoadingRepartoDetalleSerie