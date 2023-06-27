import { Grid, Image  , Button,Box} from "@mantine/core"
import shopGirl from '../../image/shopGirl.png'
import { useMediaQuery } from '@mantine/hooks';

const HeroSection = () => {
  const smallerThan = useMediaQuery("(max-width : 48em)")
  return (
    <Box  sx={{
      boxShadow : smallerThan ? '' : 'rgba(149, 157, 165, 0.2) 0px 8px 24px;'
    }}>
   
    
      <Grid mt={20}  align="center"  px={smallerThan ? '' : 100} columns={12}>
        <Grid.Col mt={30} xs={12} sm={12} md={8} lg={6}>
          <Box   component="h1">
          You can buy cheaply.Thank you for your support
          </Box>
          <Box fz={15} sx={{lineHeight : 1.5}} my={15} component="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate consectetur natus sunt commodi sint.</Box>
          <Button>
            Buy Now
          </Button>
        </Grid.Col >
        <Grid.Col xs={12} sm={12} md={8} lg={6}>
          <Image src={shopGirl} />
        </Grid.Col>
      </Grid>
    </Box>
  )
}

export default HeroSection