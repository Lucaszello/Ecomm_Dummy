import { Box, Text, Button, Flex } from "@mantine/core";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
const ShowRoomProduct = ({
  item,
  addToCart,
  classes,
  category,
  products,
  removeToCart,
  favCart,
  favListClick,
  remoFavClick,
}: any) => {
  const [fav, setFav] = useState<boolean>(false);

  console.log(favCart);



  return (
    <>
      {item?.category === category && (
        // <Grid.Col xs={12} sm={6} md={4} lg={3}>

        <Box
          sx={{
            boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
            borderRadius: 8,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/cart/${item.id}`}
          >
            <Box>
              <img src={item.thumbnail} className={classes} />
            </Box>
          </Link>
        
        {
          favCart?.find((pro : any) => pro.id === item.id) ?
          <Box
          sx={{
            position: "absolute",
            top: 2,
            right: 2,
            backgroundColor: "white",
            width: 30,
            height: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            cursor: "pointer",
            color: "#ff1f5a",
            fontSize: 20,
          }}
          onClick={() => remoFavClick(item.id)}
        >
         <AiFillHeart />
        </Box>
  :
        <Box
        sx={{
          position: "absolute",
          top: 2,
          right: 2,
          backgroundColor: "white",
          width: 30,
          height: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          cursor: "pointer",
          color: fav ? "#ff1f5a" : "black",
          fontSize: 20,
        }}
        onClick={() => favListClick(item)
        }
      >
       <AiOutlineHeart />
      </Box>
        }
          
       
       
          <Box px={15} pb={10} pt={10}>
            <Box py={3} component="h3">
              {item.title.slice(0, 27)}
            </Box>
            <Text fz={13} color="gray.7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
            <Flex align={"center"} justify={"space-between"} py={8}>
              <Text fz={18} fw={700}>
                Price :
              </Text>
              <Text fz={16} color="gray.7" fw={"600"}>
                {item.price}.00 ${" "}
              </Text>
            </Flex>
            <Flex gap={8} align={"baseline"} justify={"space-between"}>
              {products.find(({ id }: any) => id === item.id) ? (
                <Button
                  // disabled={products.some(({ id }: any) => id === item.id)}
                  onClick={() => removeToCart(item.id)}
                  color="red"
                  style={{ width: "100%" }}
                >
                  Remove from Cart
                </Button>
              ) : (
                <Button
                  // disabled={products.some(({ id }: any) => id === item.id)}
                  onClick={() => addToCart(item)}
                  style={{ width: "100%" }}
                >
                  Add to Cart
                </Button>
              )}

              <Link
                to={`/cart/${item.id}`}
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button style={{ width: "100%", backgroundColor: "#22d1ee" }}>
                  Detail
                </Button>
              </Link>
            </Flex>
          </Box>
        </Box>

        // </Grid.Col>
      )}
    </>
  );
};

export default ShowRoomProduct;
