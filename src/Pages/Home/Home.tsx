import * as S from './Home.styled'
import landing from './../../Assets/landing.png'

const Home = () => {
  return (
    <>
      <S.ImageContainer className='center'>
        <img src={landing} alt="" />
      </S.ImageContainer>
    </>
  )
}

export default Home