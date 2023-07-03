import React, { useEffect, useState } from "react";
import Search from "./Search";
import { BsCartDash } from "react-icons/bs";
import { ImAmazon } from "react-icons/im";
import { useRouter } from "next/router";

function Header() {
  const [barShown, setBarShown] = useState(false);
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      setBarShown(!barShown);
    }, 2000);
  }, []);

  return (
    <div className="bg-[#000000] text-white">
      <header className="flex justify-around max-w-screen-2xl mx-auto items-center p-4 text-base font-semibold cursor-default ">
        {barShown ? (
          <>
            <div className="flex flex-col sm:flex-row space-x-4 items-center">
              {/* <ImAmazon className="h-20 w-20" /> */}
              <img
                className="w-[120px] invert"
                src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
                alt=""
              />
              <div className="flex sm:block">
                <p className="text-sm">Deliver to User</p>
                <p className="text-sm">User address</p>
              </div>
            </div>
            <Search />
            <div className="flex space-x-4 ">
              <p className="onHover">Account</p>
              <p className="onHover">Orders</p>
              <BsCartDash className="h-6 w-6 onHover hover:scale-110" onClick={() => router.push('/cart')} />
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center space-x-4">
            <h1>Welcome user to Amazon</h1>
            <img
              className="w-[120px]"
              src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
              alt=""
            />
            {/* <p><ImAmazon className="h-20 w-20" /></p> */}
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
