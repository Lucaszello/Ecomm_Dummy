import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Navbar from "./Navbar";
import { Box } from "@mantine/core";
import Cart from "./Cart/Cart";
import Detil from "./home/Detil";
import Favourite from "./favourite/Favourite";
import Search from "./Search/Search";

const RouteHome = () => {

  
  return (
    <>
      <Box sx={{position : 'relative'}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route  path="/cart/:id" element={<Detil/>} />
          <Route path="/favourite" element={<Favourite/>} />
          <Route path="/search/:query" element={<Search/>} />
        </Routes>
      </Box>
    </>
  );
};

export default RouteHome;
