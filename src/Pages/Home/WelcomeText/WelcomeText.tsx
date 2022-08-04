import { useEffect } from 'react'
import * as S from './WelcomeText.styled'

const WelcomeText = () => {

  // Changing text based on scroll position
  useEffect(()=>{
    const markerElement = document.querySelector("#WelcomeSection>div.marker")
    const sliderElement = document.querySelector("#WelcomeSection>div.slider")
    const hiddenElement = sliderElement?.querySelector(".hiddenText")
    const checkDistance = ():void => {
        if(markerElement!=undefined && sliderElement!=undefined && hiddenElement!=undefined){
            const dstnc_markerTop = markerElement.getBoundingClientRect().top
            const dstnc_sliderTop = sliderElement.getBoundingClientRect().top
            //@ts-ignore  -> For some reason TS does not recognize offsetHeight as an attribute of "Element"
            const heightOfSlider = sliderElement.offsetHeight
            //
            const conditionMet = dstnc_markerTop<dstnc_sliderTop+heightOfSlider
            if( conditionMet && hiddenElement.classList.contains("visible")===false){
                hiddenElement.classList.add("visible")
            }else if(hiddenElement.classList.contains("visible") && conditionMet===false){
                hiddenElement.classList.remove("visible")
            }
        }
    }
    window.addEventListener("scroll", checkDistance)
  },[])
  
  return (
    <S.WelcomeSection id="WelcomeSection">
        <div className='slider'>
            <S.Title className='center'>
                In Memory of The Fallen
            </S.Title>
            <S.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem beatae eveniet eos voluptatibus dolores aliquam nulla laudantium nam consectetur optio. Asperiores sit placeat incidunt ad mollitia, sequi voluptates voluptatem! Corporis sequi iure odit velit tempora totam unde hic magni, reprehenderit fugiat odio blanditiis dolore commodi, exercitationem numquam quod at ullam accusantium aliquid magnam! Accusamus dignissimos molestias facilis nostrum similique voluptatibus, quas ratione consequatur sit! Amet deleniti quia, exercitationem delectus distinctio dignissimos eligendi laboriosam corrupti saepe asperiores nam itaque, porro maxime provident inventore pariatur ex, a praesentium suscipit similique? Vitae architecto nihil amet cumque, repudiandae eos deserunt? Aut animi mollitia sunt?
            </S.Text>
            {/* Visble from 150vh*/}
            <S.HiddenText className='hidden hiddenText center'>  
                "When do you think people die? When they are shot through the heart by the bullet of a pistol? No. When they are ravaged by an incurable disease? No. When they drink a soup made from a poisonous mushroom? No. It's when they are forgotten." - Dr. Hiriluk (One Piece)
            </S.HiddenText>
        </div>
        {/* Ghost element, located at 150vh*/}
        <div className="marker"></div>
    </S.WelcomeSection>
  )
}

export default WelcomeText