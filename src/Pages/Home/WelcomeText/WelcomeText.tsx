import { useEffect } from 'react'
import * as S from './WelcomeText.styled'
import luffyWP from './../../../Assets/luffyWP.jpg'

const WelcomeText = () => {

  // Changing text based on scroll position
  useEffect(()=>{

    const markerElement = document.querySelector("#WelcomeSection>div.marker")
    const sliderElement = document.querySelector("#WelcomeSection>div.slider")
    const visibleText = document.querySelector("#WelcomeSection>p.initialText")

    const checkDistance = ():void => {
        console.log(visibleText)
        if(markerElement!=undefined && sliderElement!=undefined && visibleText!=undefined){
            const dstnc_markerTop = markerElement.getBoundingClientRect().top
            const dstnc_sliderTop = sliderElement.getBoundingClientRect().top
            //@ts-ignore  -> For some reason TS does not recognize offsetHeight as an attribute of "Element"
            const heightOfSlider = sliderElement.offsetHeight
            //
            const conditionMet = dstnc_markerTop<dstnc_sliderTop+heightOfSlider
            console.log(conditionMet)
            if( conditionMet && visibleText.classList.contains("hidden")===false){
                console.log("Visible")
                visibleText.classList.add("hidden")
            }else if(visibleText.classList.contains("hidden") && conditionMet===false){
                console.log("Hidden")
                visibleText.classList.remove("hidden")
            }
        }
    }
    window.addEventListener("scroll", checkDistance)
  },[])
  
  return (
    <S.WelcomeSection id="WelcomeSection">
        <div className='slider'>
            <S.Image src={luffyWP} alt="" />
            <S.Title className='center textOutline'>
                In Memory Of Those <br/>No Longer With Us
            </S.Title>
            {/* <S.TextContainer className='center'>
                <S.Text className='initialText' id="Test">
                </S.Text>
                {/* Visble from 150vh*/}
                {/* <S.HiddenText className='hidden hiddenText center'>  
                    "When do you think people die? When they are shot through the heart by the bullet of a pistol? No. When they are ravaged by an incurable disease? No. When they drink a soup made from a poisonous mushroom? No. It's when they are forgotten." - Dr. Hiriluk (One Piece)
                </S.HiddenText> 
            </S.TextContainer> */}
        </div>
        {/* Ghost element, located at 150vh*/}
        <div className="marker"></div>
    </S.WelcomeSection>
  )
}

export default WelcomeText