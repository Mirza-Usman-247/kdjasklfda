import React from "react";
import Container from "./Container";
import MenuSection from "./MenuSection";
import Logo from "./Logo";
import Link from "next/link";
import CartIcon from "./CartIcon";
import SearchIcon from "./SearchIcon";
import FavouriteIcon from "./FavouriteIcon";

const Navbar = () => {
  return (
    <div>
      <Container className="flex items-center justify-between w-full border-b py-4 px-2">
        <MenuSection />
        <Link href="/">
          <div className="flex items-center justify-center  w-[30%]">
            <Logo className="cursor-pointer">Avion</Logo>
          </div>
        </Link>
        <div className="flex items-center justify-end gap-3 w-1/3 ">
          <SearchIcon />
          <FavouriteIcon />
          <CartIcon />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
