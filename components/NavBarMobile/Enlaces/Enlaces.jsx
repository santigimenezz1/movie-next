import ButtonContact from '../../ButtonContact/ButtonContact'
import '../EnlacesMobile/enlacesMobile.css'
function EnlacesMobile( {scrollToSection, scrollPortafolio, setNavOn} ) {
  const cerrarMenu = ()=>{
    setNavOn(false)
  }
  const navegarSobreMi = ()=>{
    setNavOn(false)
    setTimeout(() => {
      scrollToSection()
    }, 10);
  }
  const navegarPortfolio = ()=>{
    setNavOn(false)
    setTimeout(() => {
      scrollPortafolio()
    }, 10);
  }
  
  
  return (
    <div className='enlacesMobile'>
    <div className='enalcesMobile__escape'>
    <h1 onClick={()=>cerrarMenu()}>X</h1>
    </div>
    <div className='enlacesMobile__buttons'>
    <ul>
    <li onClick={()=>navegarSobreMi()}  className='enalcesMobile__buttons__button'>Sobre mi</li>
    <li onClick={()=>navegarPortfolio()} className='enalcesMobile__buttons__button'>Portfolio</li>  
    <div style={{display:"flex", justifyContent:"center"}}>
    <ButtonContact text={"Contactame"} />   
    </div>
   </ul>
    </div>
      
    </div>
  )
}

export default EnlacesMobile
