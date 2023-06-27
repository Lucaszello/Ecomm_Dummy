import {
  Box,
  Burger,
  Container,
  Drawer,
  Flex,
  Text,
  TextInput,
  createStyles,
} from "@mantine/core";
import { Player } from "@lottiefiles/react-lottie-player";
import logo from "../image/137751-shopping-cart.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {  useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { CartStore } from "../store/CartStore";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { BiSearch } from "react-icons/bi";
// import {BsListNested} from 'react-icons/bs'
//createStyles
const useStyles = createStyles((theme) => ({
  navLink: {
    textDecoration: "none",
    color: theme.colors.gray,
    marginInline: 10,
    fontSize: 18,
    paddingInline: 5,
    cursor: "pointer",
    textAlign: "center",
  },
  active: {
    textDecoration: "none",
    color: theme.colors.gray,
    marginInline: 10,
    fontSize: 18,
    position: "relative",
    paddingInline: 5,
    cursor: "pointer",
    textAlign: "center",
    "&::before": {
      content: '""',
      position: "absolute",
      color: "orange",
      bottom: -5,
      left: -4,
      height: 2,
      width: "100%",
      transition: "all 0.3s",
      paddingInline: 5,
      backgroundColor: "black",
    },
  },
}));

const Navbar = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const smallerThan = useMediaQuery("(max-width : 48em)");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  //search
  const [query,setQuery] = useState<string>('')
  //
  const [active, setActive] = useState("home");
  const { classes, cx } = useStyles();
  const products = CartStore((state: any) => state.products);

  //searchQuery
    const SearchHandler = (event : any) => {
      if(event.key === "Enter" && query.length > 0 ){
          navigate(`/search/${query}`)
          setQuery('')
        }
    }
  

   useEffect(() => {
    if (pathname === "/") {
      setActive("home");
    } else {
      setActive(pathname.slice(1));
    }
  }, [pathname]);
  return (
    <Container size={"xl"}>
      <Flex justify={"space-between"} align={"center"}>
        <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
          <Flex mr={"auto"} align={"center"} justify={"center"}>
            <Player
              autoplay
              loop
              src={logo}
              style={{ height: "50px", width: "50px" }}
            ></Player>
            <Text fz={25} pt={5} fw={"600"}>
              {" "}
              Shop MM{" "}
            </Text>
          </Flex>
        </Link>
        <Flex>
          <Box sx={{ listStyle: "none" }} component="ul">
            {smallerThan ? (
              <>
                <Flex mt={10}>
                  <Link
                    style={{
                      display: "block",
                      textAlign: "start",
                      marginBottom: 15,
                      paddingBottom: 0,
                      position: "relative",
                      paddingTop: 10,
                    }}
                    className={cx(classes.navLink, {
                      [classes.active]: active === "cart",
                    })}
                    onClick={() => setActive("cart")}
                    to={"/cart"}
                  >
                    <BsCart3 />
                    <span
                      style={{
                        position: "absolute",
                        top: -5,
                        fontSize: 12,
                        backgroundColor: "red",
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        paddingInline: 1,
                        paddingBottom: 1,
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      {products.length}
                    </span>
                  </Link>
                  <Burger onClick={toggle} opened={opened} />
                </Flex>

                <Drawer size={'sm'} position="right" opened={opened} onClose={close}>
                  <Link
                    style={{
                      display: "block",
                      textAlign: "start",
                      marginBottom: 15,
                      paddingBottom: 10,
                      marginTop: 20,
                    }}
                    className={cx(classes.navLink, {
                      [classes.active]: active === "home",
                    })}
                    onClick={() => setActive("home")}
                    to={"/"}
                  >
                    Home
                  </Link>
                  <Link
                    style={{
                      display: "block",
                      textAlign: "start",
                      marginBottom: 15,
                      paddingBottom: 10,
                      paddingTop: 10,
                    }}
                    className={cx(classes.navLink, {
                      [classes.active]: active === "favourite",
                    })}
                    onClick={() => setActive("favourite")}
                    to={"/favourite"}
                  >
                    Favourite
                  </Link>
                  <Link
                    style={{
                      display: "block",
                      textAlign: "start",
                      marginBottom: 15,
                      paddingBottom: 10,
                      paddingTop: 10,
                    }}
                    className={cx(classes.navLink, {
                      [classes.active]: active === "new",
                    })}
                    onClick={() => setActive("new")}
                    to={"/"}
                  >
                    What's New
                  </Link>
                </Drawer>
              </>
            ) : (
              <Box
                sx={{ display: "flex", alignItems: "center" }}
                component="li"
              >
                <Link
                  className={cx(classes.navLink, {
                    [classes.active]: active === "home",
                  })}
                  onClick={() => setActive("home")}
                  to={"/"}
                >
                  Home
                </Link>
                <Link
                  className={cx(classes.navLink, {
                    [classes.active]: active === "favourite",
                  })}
                  onClick={() => setActive("favourite")}
                  to={"/favourite"}
                >
                  Favourite
                </Link>
                {/* SearchBox */}
                <TextInput
                variant="filled"
                value={query}
                onChange={e => setQuery(e.target.value)}
                radius={8}
                px={10}
                onKeyUp={SearchHandler}
                  styles={() => ({
                    input: {
                      "&:focus-within": {
                       borderColor : 'transparent'
                      },
                    },
                  })}
                  placeholder="Search"
                  icon={<BiSearch style={{ fontSize: "1.25rem" }} />}
                />
                <Link
                  style={{ position: "relative" }}
                  className={cx(classes.navLink, {
                    [classes.active]: active === "cart",
                  })}
                  onClick={() => setActive("cart")}
                  to={"/cart"}
                >
                  Cart <BsCart3 />
                  <span
                    style={{
                      position: "absolute",
                      top: -5,
                      fontSize: 12,
                      backgroundColor: "red",
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      paddingBottom: 1,
                      color: "white",
                    }}
                  >
                    {products.length}
                  </span>
                </Link>
              </Box>
            )}
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
