import { Box, Grid, Skeleton, createStyles } from "@mantine/core";
import { useApiFetch } from "../../api/fetchStore";
import Loading from "../../load/Loading";
import { CartStore } from "../../store/CartStore";
import ShowRoomProduct from "./showRoomProduct";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './Detail.css'
import { useMediaQuery } from "@mantine/hooks";
//createStyles
const useStyles = createStyles((theme) => ({
  imgLink: {
    transition: "0.3s",
    width: "100%",
    height: 220,
    objectFit: "cover",
    objectPosition: "center",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.075)",
    },
  },
}));



const ShowRoom = () => {
  //media
const smallerThan = useMediaQuery("(max-width : 64em)")
  const { isLoading, data, isError } = useApiFetch();
  const { classes } = useStyles();

  //call CartStore
  const [addToCart, quantity, products, removeToCart,favCart,favListClick,remoFavClick] = CartStore(
    (state: any) => [
      state.addToCart,
      state.quantity,
      state.products,
      state.removeToCart,
      state.favCart,
      state.favListClick,
      state.remoFavClick
    ]
  );

  // console.log(products);

  //
  const handleClick = (pro: any) => {
    const find = products.find((product: any) => product.id === pro.id);
    if (find) {
      console.log("hello");
    } else {
      addToCart(pro);
    }
  };

  if (isLoading) {
    return (
      <Grid>
        {[1, 2, 3, 4].map((item) => (
          <>
            <Grid.Col key={Date.now( )} xs={12} sm={6} md={4} lg={3}>
              <Skeleton mt={30} w={300} h={220} />
              <Skeleton height={15} mt={8} w={200} radius={"xl"} />
              <Skeleton height={8} mt={8} w={300} radius={"xl"} />
              <Skeleton height={8} mt={8} w={250} radius={"xl"} />
            </Grid.Col>
          </>
        ))}
      </Grid>
    );
  }

  if (isError) {
    return <Loading />;
  }

  return (
    
    <Box pb={smallerThan ? 650 : 300}>
      {/* //smartphones */}
      <Box mt={50}>
        <Box component="h3" py={10} fz={30}>
          Smart Phone
        </Box>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((item: any) => (
            <>
            {item?.category === "smartphones" && 
            <SwiperSlide>
                <ShowRoomProduct
                  key={item.id}
                  products={products}
                  removeToCart={removeToCart}
                  item={item}
                  addToCart={handleClick}
                  classes={classes.imgLink}
                  favCart={favCart}
                  favListClick={favListClick}
                  remoFavClick={remoFavClick}
                  category="smartphones"
                />
                </SwiperSlide>
              }
              </>
          ))}
        </Swiper>
      </Box>

      {/* //Laptops */}
      <Box mt={40}>
        <Box component="h3" py={10} fz={30}>
          Laptops
        </Box>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((item: any) => (
            <>
            {item?.category === "laptops" && 
            <SwiperSlide>
                <ShowRoomProduct
                  key={item.id}
                  products={products}
                  removeToCart={removeToCart}
                  item={item}
                  addToCart={handleClick}
                  classes={classes.imgLink}
                  favCart={favCart}
                  favListClick={favListClick}
                  remoFavClick={remoFavClick}
                  category="laptops"
                />
                </SwiperSlide>
              }
              </>
          ))}
        </Swiper>
      </Box>

      {/* fragn */}
      <Box mt={40}>
        <Box component="h3" py={10} fz={30}>
          Fragrances
        </Box>
        <Grid columns={12} gutter={20} py={10} align="center">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((item: any) => (
            <>
            {item?.category === "fragrances" && 
            <SwiperSlide>
                <ShowRoomProduct
                  key={item.id}
                  products={products}
                  removeToCart={removeToCart}
                  item={item}
                  addToCart={handleClick}
                  classes={classes.imgLink}
                  favCart={favCart}
                  favListClick={favListClick}
                  remoFavClick={remoFavClick}
                  category="fragrances"
                />
                </SwiperSlide>
              }
              </>
          ))}
        </Swiper>
        </Grid>
      </Box>

      {/* skincare */}
      <Box mt={40}>
        <Box component="h3" py={10} fz={30}>
          Skincare
        </Box>
        <Grid columns={12} gutter={15} py={10} align="center">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((item: any) => (
            <>
            {item?.category === "skincare" && 
            <SwiperSlide>
                <ShowRoomProduct
                  key={item.id}
                  products={products}
                  removeToCart={removeToCart}
                  item={item}
                  addToCart={handleClick}
                  classes={classes.imgLink}
                  favCart={favCart}
                  favListClick={favListClick}
                  remoFavClick={remoFavClick}
                  category="skincare"
                />
                </SwiperSlide>
              }
              </>
          ))}
        </Swiper>
        </Grid>
      </Box>

      {/* groceries */}
      <Box mt={40}>
        <Box component="h3" py={10} fz={30}>
          Groceries
        </Box>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((item: any) => (
            <>
            {item?.category === "groceries" && 
            <SwiperSlide>
                <ShowRoomProduct
                  key={item.id}
                  products={products}
                  removeToCart={removeToCart}
                  item={item}
                  addToCart={handleClick}
                  classes={classes.imgLink}
                  favCart={favCart}
                  favListClick={favListClick}
                  remoFavClick={remoFavClick}
                  category="groceries"
                />
                </SwiperSlide>
              }
              </>
          ))}
        </Swiper>
      </Box>

      {/* home-decoration */}
      <Box mt={40}>
        <Box component="h3" py={10} fz={30}>
          Home Decoration
        </Box>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((item: any) => (
            <>
            {item?.category === "home-decoration" && 
            <SwiperSlide>
                <ShowRoomProduct
                  key={item.id}
                  products={products}
                  removeToCart={removeToCart}
                  item={item}
                  addToCart={handleClick}
                  classes={classes.imgLink}
                  favCart={favCart}
                  favListClick={favListClick}
                  remoFavClick={remoFavClick}
                  category="home-decoration"
                />
                </SwiperSlide>
              }
              </>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};
export default ShowRoom;
