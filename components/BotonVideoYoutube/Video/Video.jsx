import YouTube from "react-youtube";
import CloseIcon from '@mui/icons-material/Close';
import BotonClose from "../BotonClose/BotonClose";

const Video = ( {openVideo, closeVideo, showVideo, setShowVideo, videoId, estadoBotonCerrar, setEstadoBotonCerrar} )=>{
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const cerrarVideo = ()=>{
   setEstadoBotonCerrar(false)
   closeVideo()
  }
    return (
        <div style={{ position:"relative"}}>
          {
          estadoBotonCerrar && (
            
          <div onClick={()=>cerrarVideo()} style={{position:"absolute", right:"1%", top:"2%" }}>
            <BotonClose />
          </div>

          )
          }
            {
                showVideo && (
                <div className='videoYoutube'>
                  <YouTube videoId={videoId} opts={opts} onEnd={closeVideo} />
                </div>
              )}
        </div>
    )
}

export default Video