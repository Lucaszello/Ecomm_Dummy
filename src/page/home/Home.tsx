import { Container } from "@mantine/core"
import HeroSection from "./HeroSection"
import ShowRoom from "./showRoom"
import Footer from "../Footer"
import { useApiFetch } from "../../api/fetchStore"

const Home = () => {
  const {isLoading} = useApiFetch();
  return (
    <>
    <Container size={'xl'}>
    <HeroSection/>
    <ShowRoom/>
    </Container>
    {
      isLoading ? 
      <></>
      :
      <Footer/>  
    }   
    </>
  )
}

export default Home