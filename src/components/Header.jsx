import { brainwave } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import MenuSvg from "../assets/svg/MenuSvg";
import { HambugerMenu } from "./design/Header";
import Button from "./Button";
import { useState } from "react";
const Header = () => {
  const pathname = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [openNavigation, setOpenNavigation] = useState(false);
  const handleToggleNavigation = () => {
    setOpenNavigation(!openNavigation);
    console.log(openNavigation);
  };
  return (
    <header
      className={`fixed top-0 z-50 left-0 w-full bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}
    >
      <div className="flex items-center px-5  lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#hero" className="block w-[12rem] xl:mr-8">
          <img src={brainwave} width={190} height={40} alt="brainwave" />
        </a>
        <nav
          className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 righ-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent `}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row ">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative font-code text-2xl uppercase cursor-pointer text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6  md:my-8  lg:-mr-0.25  lg:text-xs lg:font-semibold ${item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
            <HambugerMenu />
          </div>
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>
        <Button className={"hidden lg:flex"} href={"#login"}>
          Sign in
        </Button>
        <Button
          className={"ml-auto lg:hidden"}
          onClick={handleToggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
