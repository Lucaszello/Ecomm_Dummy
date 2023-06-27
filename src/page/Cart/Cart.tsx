import { CartStore } from "../../store/CartStore";
import {
  Container,
  Flex,
  Text,
  Grid,
  MantineProvider,
  Button,
  Box,
  Divider,
} from "@mantine/core";
import "./cart.css";
import { RxCross2 } from "react-icons/rx";
import { Player } from "@lottiefiles/react-lottie-player";
import cross from "../../image/cross.json";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
const Cart = () => {
  const smallerThan = useMediaQuery("(max-width : 48em)")
  const [products, totalPrice, addToClick, removeToClick, deleteToClick] =
    CartStore((state: any) => [
      state.products,
      state.totalPrice,
      state.addToClick,
      state.removeToClick,
      state.deleteToClick,
    ]);

    

  const currentProduct = products?.reduce(
    (pv: any, cv: any) => pv + cv.price * cv.quantity,
    0
  );

  console.log(currentProduct);

  return (
    <MantineProvider theme={{ fontFamily: "Montserrat , sans-serif" }}>
      {products.length ? (
        <Container sx={{ position: "relative" }} size={"xl"}>
          {products?.map((product: any) => (
            <Grid
              my={20}
              sx={{
                boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                borderRadius: 8,
                position: "relative",
              }}
              columns={ smallerThan ? 1 : 3}
              px={smallerThan ? 0 : 30}
              align={"center"}
              justify={"space-between"}
              pb={5}
            >
              <Button
                onClick={() => deleteToClick(product)}
                variant="light"
                color="red"
                sx={{ position: "absolute", top: 0, right: 0 }}
              >
                <RxCross2 />
              </Button>
              <Grid.Col  span={1}>
                <img
                  src={product.thumbnail}
                  width={smallerThan ? "100%" : 200}
                  height={150}
                  style={{ objectFit: smallerThan ? "cover" : "contain" }}
                  alt=""
                />
              </Grid.Col>
              <Grid.Col px={smallerThan ? 20  : 0} span={1}>
                <Text fz={20} fw={700} color="#222">
                  {product.title}
                </Text>
                <Text fz={14} color="gray.7" py={10}>
                  {product.description}
                </Text>
                <Flex mt={10} align={"center"} justify={"space-between"}>
                  <Button.Group sx={{ alignItems: "center" }}>
                    <Button onClick={() => removeToClick(product.id)}>
                      {" "}
                      -{" "}
                    </Button>
                    <Text w={50} pr={9} sx={{ textAlign: "right" }}>
                      {product.quantity}
                    </Text>
                    <Button onClick={() => addToClick(product.id)}> + </Button>
                  </Button.Group>
                  <Text fw={500}>{product.quantity * product.price}.00 $ </Text>
                </Flex>
              </Grid.Col>
            </Grid>
          ))}
          {products.length ? (
            <Box py={15}>
              <Divider my={10} size={3} />
              <Flex py={10} align={"center"} justify={"space-between"}>
                <Text fz={19} fw={600}>
                  Total Price
                </Text>
                <Text fw={500}>{currentProduct}.00 $</Text>
              </Flex>
            </Box>
          ) : (
            <></>
          )}
        </Container>
      ) : (
        <>
          <Container mt={80}>
            <Player
              autoplay
              loop
              src={cross}
              style={{ height: "300px", width: "300px" }}
            ></Player>
            <Box mt={25} sx={{ textAlign: "center" }} component="h1">
              You should choose again
            </Box>
            <Text mt={10} sx={{ textAlign: "center" }}>
              Looking forward to the best products.
            </Text>
            <Box mt={20} sx={{textAlign : 'center'}}>
              <Link to={"/"}>
                <Button>Go to Home</Button>
              </Link>
            </Box>
          </Container>
        </>
      )}
    </MantineProvider>
  );
};

export default Cart;
