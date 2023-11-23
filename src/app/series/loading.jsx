import { Button, Skeleton } from '@mui/material'
import '../series/loading.css'
const Loading = ()=>{
    return (
        <div className='loading__series'>
      <Skeleton variant="text" width={150} height={60} style={{ backgroundColor: "white" }} />
      <div className='loading__series__eskeletons'>
      <Skeleton variant="rectangular" width={290} height={400} style={{ backgroundColor: "white", borderRadius:"10px" }} />
      <Skeleton variant="rectangular" width={290} height={400} style={{ backgroundColor: "white", borderRadius:"10px" }} />
      <Skeleton variant="rectangular" width={290} height={400} style={{ backgroundColor: "white", borderRadius:"10px" }} />
      <Skeleton variant="rectangular" width={290} height={400} style={{ backgroundColor: "white", borderRadius:"10px" }} />
      <Skeleton variant="rectangular" width={290} height={400} style={{ backgroundColor: "white", borderRadius:"10px" }} />
      <Skeleton variant="rectangular" width={290} height={400} style={{ backgroundColor: "white", borderRadius:"10px" }} />
      <Skeleton variant="rectangular" width={290} height={400} style={{ backgroundColor: "white", borderRadius:"10px" }} />
      <Skeleton variant="rectangular" width={290} height={400} style={{ backgroundColor: "white", borderRadius:"10px" }} />
      <Skeleton variant="rectangular" width={290} height={400} style={{ backgroundColor: "white", borderRadius:"10px" }} />
      <Skeleton variant="rectangular" width={290} height={400} style={{ backgroundColor: "white", borderRadius:"10px" }} />
      <Skeleton variant="rectangular" width={290} height={400} style={{ backgroundColor: "white", borderRadius:"10px" }} />
      <Skeleton variant="rectangular" width={290} height={400} style={{ backgroundColor: "white", borderRadius:"10px" }} />
      <Skeleton variant="rectangular" width={290} height={400} style={{ backgroundColor: "white", borderRadius:"10px" }} />
      <Skeleton variant="rectangular" width={290} height={400} style={{ backgroundColor: "white", borderRadius:"10px" }} />
      <Skeleton variant="rectangular" width={290} height={400} style={{ backgroundColor: "white", borderRadius:"10px" }} />
      <Skeleton variant="rectangular" width={290} height={400} style={{ backgroundColor: "white", borderRadius:"10px" }} />
      </div>

        </div>
    )
}
export default Loading