import { Skeleton } from '@mui/material'
import '../[biografiaActor]/loading.css'
const LoadingBiografia = ()=>{
    return (
        <div className="loadingBiografia">
         <Skeleton variant="rectangular" width={350} height={450} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         <div className='loadingBiografia__info'>
         <Skeleton variant="text" width={150} height={40} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         <Skeleton variant="text" width={120} height={40} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         <div>
         <Skeleton variant="text" width={700} height={20} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         <Skeleton variant="text" width={700} height={20} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         <Skeleton variant="text" width={700} height={20} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         <Skeleton variant="text" width={700} height={20} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         <Skeleton variant="text" width={700} height={20} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         <Skeleton variant="text" width={700} height={20} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         <Skeleton variant="text" width={700} height={20} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         <Skeleton variant="text" width={700} height={20} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         <Skeleton variant="text" width={700} height={20} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         <Skeleton variant="text" width={700} height={20} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         </div>
         <Skeleton variant="text" width={250} height={40} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         <Skeleton variant="text" width={120} height={40} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         <Skeleton variant="text" width={120} height={40} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         <Skeleton variant="text" width={120} height={40} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         <div className='loadingBiografia__info__tarjetas'>
         <Skeleton variant="text" width={150} height={40} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         <div className='loadingBiografia__info__tarjetas__tarjeta'>
         <Skeleton variant="rectangular" width={150} height={220} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         <Skeleton variant="rectangular" width={150} height={220} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         <Skeleton variant="rectangular" width={150} height={220} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         <Skeleton variant="rectangular" width={150} height={220} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         <Skeleton variant="rectangular" width={150} height={220} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         <Skeleton variant="rectangular" width={150} height={220} style={{ backgroundColor: "white", borderRadius:"10px" }} />
         </div>
         </div>
         </div>
        </div>
    )
}
export default LoadingBiografia