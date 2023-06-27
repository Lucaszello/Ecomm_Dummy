import { Box, Container, Flex, Grid, Text } from "@mantine/core";
import {ImFacebook2} from 'react-icons/im'
import {AiFillTwitterSquare ,AiFillLinkedin } from 'react-icons/ai'
import { Player } from "@lottiefiles/react-lottie-player";
import logo from "../image/137751-shopping-cart.json";
import { useMediaQuery } from "@mantine/hooks";

const Footer = () => {
  const smallerThan = useMediaQuery("(max-width : 48em)")
  return (
    <Box
      component="div"
      bg={"black"}
      w={"100%"}
      pt={25}
      pb={20}
      sx={{ position: "absolute", bottom: 0 }}
    >
      <Container  size={"xl"}>
        <Grid columns={12}>
          <Grid.Col lg={3}>
            <Box sx={{ color: "white" }} mb={25} component="h2">
              {" "}
              Product
            </Box>
            <Text color="#575151" fw={600} fz={14} mt={5} display={"flex"}>
              {" "}
              <Box fw={700} mr={5}>
                .
              </Box>{" "}
              Smart Phone
            </Text>
            <Text color="#575151" fw={600} fz={14} mt={5} display={"flex"}>
              {" "}
              <Box fw={700} mr={5}>
                .
              </Box>{" "}
              Laptops
            </Text>
            <Text color="#575151" fw={600} fz={14} mt={5} display={"flex"}>
              {" "}
              <Box fw={700} mr={5}>
                .
              </Box>{" "}
              Fragrances
            </Text>
            <Text color="#575151" fw={600} fz={14} mt={5} display={"flex"}>
              {" "}
              <Box fw={700} mr={5}>
                .
              </Box>{" "}
              Skincare
            </Text>
            <Text color="#575151" fw={600} fz={14} mt={5} display={"flex"}>
              {" "}
              <Box fw={700} mr={5}>
                .
              </Box>{" "}
              Groceries
            </Text>
            <Text color="#575151" fw={600} fz={14} mt={5} display={"flex"}>
              {" "}
              <Box fw={700} mr={5}>
                .
              </Box>{" "}
              Home Decoration
            </Text>
          </Grid.Col>
          <Grid.Col lg={3}>
            <Box
              sx={{ color: "white" }}
              mb={25}
              component="h2"
              display={"flex"}
            >
              {" "}
              Company
            </Box>
            <Text color="#575151" fw={600} fz={14} mt={5} display={"flex"}>
              {" "}
              <Box fw={700} mr={5}>
                .
              </Box>{" "}
              Patnerships
            </Text>
            <Text color="#575151" fw={600} fz={14} mt={5} display={"flex"}>
              {" "}
              <Box fw={700} mr={5}>
                .
              </Box>{" "}
              Terms of use
            </Text>
            <Text color="#575151" fw={600} fz={14} mt={5} display={"flex"}>
              {" "}
              <Box fw={700} mr={5}>
                .
              </Box>{" "}
              Privacy
            </Text>
          </Grid.Col>
          <Grid.Col lg={2}>
            <Box
              sx={{ color: "white" }}
              mb={25}
              component="h2"
              display={"flex"}
            >
              {" "}
              Get in touch
            </Box>
            <Text color="#575151" fw={600} fz={14} mt={5} display={"flex"}>
              {" "}
              <Box fw={700} mr={5}>
                .
              </Box>{" "}
              You will find your next level product your prefer
            </Text>
            <Box component="div" display={'flex'} sx={{alignItems : 'center'}} mt={10}>
              <ImFacebook2  style={{color : '#575151',fontSize : 20,paddingLeft : 10}} />
              <AiFillTwitterSquare  style={{color : '#575151',fontSize : 25.5,paddingLeft : 10}} />
              <AiFillLinkedin  style={{color : '#575151',fontSize : 25.5,paddingLeft : 8}} />
            </Box>
          </Grid.Col>
          <Grid.Col lg={3}>
          <Flex mt={smallerThan ? '' : 50}  align={"center"} justify={"center"}>
        <Player
          autoplay
          loop
          src={logo}
          style={{ height: "50px", width: "50px" }}
        ></Player>
        <Text color="white" fz={30} fw={"600"}>
          {" "}
          Shop MM{" "}
        </Text>
      </Flex>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
