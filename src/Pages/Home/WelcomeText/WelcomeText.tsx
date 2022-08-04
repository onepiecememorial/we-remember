import { useEffect } from 'react'
import * as S from './WelcomeText.styled'

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
            <S.Title className='center'>
                In Memory of The Fallen
            </S.Title>
            <S.TextContainer className='center'>
                <S.Text className='initialText' id="Test">
                    One Piece, by Eiichirō Oda, has been on the run for more than twenty years. During this time, it has been able to create 
                    a unique community all around the world that stays together to enjoy, discuss and analyse its marvelous world. Does not
                    matter if you started this year of have been a fan since the very first islands, if you follow the manga or the anime,
                    if you prefer Zoro o Sanji... Being a fan of One Piece means being part of an ever-growing family.

                    However, as in every household, there are those that had to depart earlier. Either friends, sons, parents, nakamas... we
                    have had to say goodbye more than once. We have had to accept that we will not be able to share the joy of discovering
                    the final treasure with all of our loved ones. Although, we refuse to accept we have to forget them.

                    With this reason in mind, the One Piece Community Memorials site has been created. Here, we show our respect to those we
                    loved and loved One Piece with us. Here, as in the Fire Festival, we lift lanterns with our wishes written on them, 
                    hoping our feelings can reach the departed. Feel free to join us.
                </S.Text>
                {/* Visble from 150vh*/}
                <S.HiddenText className='hidden hiddenText center'>  
                    "When do you think people die? When they are shot through the heart by the bullet of a pistol? No. When they are ravaged by an incurable disease? No. When they drink a soup made from a poisonous mushroom? No. It's when they are forgotten." - Dr. Hiriluk (One Piece)
                </S.HiddenText>
            </S.TextContainer>
        </div>
        {/* Ghost element, located at 150vh*/}
        <div className="marker"></div>
    </S.WelcomeSection>
  )
}

export default WelcomeText