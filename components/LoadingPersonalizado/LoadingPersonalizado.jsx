import { CircularProgress } from '@mui/material'
import '../LoadingPersonalizado/loadingPersonalizado.css'
const LoadingPersonalizado = ()=>{
    return (
        <div className="LoadingPersonalizado">
            <CircularProgress />
        </div>
    )
}
export default LoadingPersonalizado