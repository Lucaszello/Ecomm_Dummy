import { Link, useParams } from "react-router-dom";
import { detailApiFetch } from "../../api/fetchStore";
import Loading from "../../load/Loading";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  MantineProvider,
  Text,
} from "@mantine/core";
import "./Detail.css";
import { AiFillStar } from "react-icons/ai";
import { CartStore } from "../../store/CartStore";
import { useMediaQuery } from "@mantine/hooks";
import Footer from "../Footer";

const Detil = () => {
  const { id }: string | any = useParams();
  //smallerThan
  const smallerThan = useMediaQuery("(max-width : 84em)");

  const { isLoading, isError, data } = detailApiFetch(id);

  //call CartStore
  const [addToCart, removeToCart, products] = CartStore((state: any) => [
    state.addToCart,
    state.removeToCart,
    state.products,
  ]);
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Loading />;
  }

  return (
    <MantineProvider
      theme={{
        breakpoints: {
          xs: "20em",
          sm: "48em",
          md: "64em",
          lg: "74em",
          xl: "90em",
        },
      }}
    >
      <Container size={"xl"} mt={{ xs: 20, sm: 200, xl: 100 }}>
        <Grid
          gutter={smallerThan ? 0 : 50}
          align="center"
          justify="center"
          columns={12}
        >
          <Grid.Col px={smallerThan ? 10 : ""} md={12} lg={5}>
            <Box>
              <img
                height={350}
                style={{ objectFit: "contain" }}
                src={data.thumbnail}
                width={"100%"}
              />
            </Box>
          </Grid.Col>

          <Grid.Col
            mt={{ xs: 0, sm: 40, lg: 0, xl: 0 }}
            px={{ xs: 20, sm: 40, md: 0, lg: 0 }}
            md={12}
            lg={5}
          >
            <Box component="h1">{data.title}</Box>
            <Text mt={10} fz={14}>
              {data.description}
            </Text>
            <Box pb={15} mt={5} sx={{ display: "flex", alignItems: "center" }}>
              <AiFillStar style={{ color: "#ffd615" }} />
              <AiFillStar style={{ color: "#ffd615" }} />
              <AiFillStar style={{ color: "#ffd615" }} />
              <AiFillStar style={{ color: "#ffd615" }} />
              <AiFillStar style={{ color: "#ffd615" }} />
              <Text fz={14}>( {data.rating} )</Text>
            </Box>

            <Divider />

            <Box pt={15}>
              <Box color="#444" component="h2">
                $549.00 or 99.99/month
              </Box>
              <Text my={5} fz={14} color="gray.7">
                Suggested payments with 6 months special financing
              </Text>
              <Text fw={600} mb={5} fz={14}>
                {" "}
                Brand Name :{" "}
                <Box ml={4} color="gray.7" fw={400} component="span">
                  {data.brand}
                </Box>{" "}
              </Text>
              <Text fw={600} mb={5} fz={14}>
                {" "}
                Price :{" "}
                <Box ml={4} color="gray.7" fw={400} component="span">
                  {data.price}.00 $
                </Box>{" "}
              </Text>
              <Flex align={"baseline"}>
                {products.find((item: any) => item.id === data.id) ? (
                  <Button
                    mt={10}
                    size="lg"
                    color="red"
                    onClick={() => removeToCart(data.id)}
                  >
                    Remove from Cart
                  </Button>
                ) : (
                  <Button
                    size={smallerThan ? "sm" : "md"}
                    mt={10}
                    onClick={() => addToCart(data)}
                  >
                    Add to Cart
                  </Button>
                )}
                <Link to={'/'} >
                  <Button ml={10} color="gray" size={smallerThan ? "sm" : "md"}>
                    Go to Home
                  </Button>
                </Link>
              </Flex>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
      {smallerThan ? (
        <></>
      ) : (
        <Box pt={289}>
          <Footer />
        </Box>
      )}
    </MantineProvider>
  );
};

export default Detil;
