"use client";

import Link from "next/link";
import Image from "next/image";
import googleImg from "../../app/assets/google-play.webp";
import appleStore from "../../app/assets/appleS.png";
import SHContainer from "../ui/core/SHContainer";

const Footer = () => {
  return (
    // <div className="">
    //   <div className="bg-[#374b5c] text-white">
    //     <SHContainer>
    //       <div className="flex flex-col sm:flex-row justify-between py-8 items-start sm:items-center">
    //         <div className="flex flex-col w-full items-center md:items-start mb-6 sm:mb-0">
    //           <div className="text-2xl font-bold">
    //             <Link
    //               href="/"
    //               className="text-2xl font-bold text-black flex items-center"
    //             >
    //               <Image
    //                 src={logo}
    //                 alt="Logo"
    //                 width={200}
    //                 height={200}
    //                 className="mr-2 sm:w-auto sm:h-auto max-w-[150px] md:max-w-[200px]"
    //               />
    //             </Link>
    //           </div>
    //           <div className="mt-2 flex items-center">
    //             <Phone className="mr-2" />
    //             <span>+880 01925-716295</span>
    //           </div>
    //           <div className="mt-2 flex items-center">
    //             <MapPin className="mr-2" />
    //             <span>Sherpur - 2100, Nymensingh - 2200, Bangladesh</span>
    //           </div>
    //           <div className="mt-2 flex items-center">
    //             <Mail className="mr-2" />
    //             <span>halder25572@gmail.com</span>
    //           </div>
    //           <div className="mt-6 flex justify-center md:justify-start space-x-4">
    //             <button
    //               onClick={() => redirectFunction("facebook")}
    //               className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600"
    //             >
    //               <Facebook />
    //             </button>
    //             <button
    //               onClick={() => redirectFunction("instagram")}
    //               className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600"
    //             >
    //               <Instagram />
    //             </button>
    //             <button
    //               onClick={() => redirectFunction("twitter")}
    //               className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600"
    //             >
    //               <Twitter />
    //             </button>
    //           </div>
    //         </div>
    //         <div className="flex justify-center w-full">
    //           <div className="text-center sm:text-right mb-6 sm:mb-0">
    //             <div className="text-lg font-semibold">Useful Links</div>
    //             {navbarItem.map((item) => (
    //               <div key={item.name}>
    //                 <Link
    //                   href={
    //                     item.href === "/login"
    //                       ? user
    //                         ? "/dashboard/listing"
    //                         : "/login"
    //                       : item.href
    //                   }
    //                   className={`relative text-white font-medium text-lg transition-colors ${
    //                     active === item.name ? "text-yellow-400" : ""
    //                   }`}
    //                   onMouseEnter={() => setActive(item.name)}
    //                   onMouseLeave={() => setActive("")}
    //                 >
    //                   <span
    //                     className={`absolute -left-5 top-1/2 transform -translate-y-1/2 text-yellow-400 transition-all duration-300 ease-in-out ${
    //                       active === item.name
    //                         ? "opacity-100 -translate-x-0"
    //                         : "opacity-0 -translate-x-2"
    //                     }`}
    //                   >
    //                     •
    //                   </span>
    //                   {item.name}
    //                 </Link>
    //               </div>
    //             ))}
    //           </div>
    //         </div>

    //         <div className="w-full md:w-[50%] justify-end">
    //           <div className="mt-6 sm:mt-0 text-center sm:text-left">
    //             <span className="ml-2">Get it on Google Play</span>
    //             <Image
    //               className="cursor-pointer"
    //               onClick={() => redirectFunction("google")}
    //               src={googleImg}
    //               alt="No Ads"
    //               width={300}
    //               height={300}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </SHContainer>
    //   </div>
    //   <div className="bg-[#314352] text-center py-5 text-sm">
    //     <span className="text-white">
    //       Copyright © 2025 puronoBazar All Rights Reserved
    //     </span>
    //   </div>
    // </div>

    <footer className="bg-gray-100 text-gray-800 py-8">
      <SHContainer className="">
        <div className="grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-2">
          {/* More from PuronoBazar */}
          <div>
            <h3 className="font-semibold mb-3">More from PuronoBazar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#">Sell Fast</Link>
              </li>
              <li>
                <Link href="#">Membership</Link>
              </li>
              <li>
                <Link href="#">Banner Ads</Link>
              </li>
              <li>
                <Link href="#">Boost Ad</Link>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="font-semibold mb-3">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#">FAQ</Link>
              </li>
              <li>
                <Link href="#">Stay Safe</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* About PuronoBazar */}
          <div>
            <h3 className="font-semibold mb-3">About PuronoBazar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Terms and Conditions</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Sitemap</Link>
              </li>
            </ul>
          </div>

          {/* Blog & Guides */}
          <div>
            <h3 className="font-semibold mb-3">Blog & Guides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#">CarsGuide</Link>
              </li>
              <li>
                <Link href="#">BikesGuide</Link>
              </li>
              <li>
                <Link href="#">PropertyGuide</Link>
              </li>
              <li>
                <Link href="#">Official Blog</Link>
              </li>
            </ul>
          </div>

          <div className="">
            <Link href="#">
              <Image
                src={googleImg}
                alt="Google Play"
                width={120}
                height={40}
              />
            </Link>
            <Link href="#">
              <Image src={appleStore} alt="App Store" width={120} height={40} />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          {/* Download App */}

          {/* Social Media Icons */}
          {/* <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#">
              <i className="fab fa-facebook text-2xl"></i>
            </Link>
            <Link href="#">
              <i className="fab fa-x-twitter text-2xl"></i>
            </Link>
            <Link href="#">
              <i className="fab fa-tiktok text-2xl"></i>
            </Link>
            <Link href="#">
              <i className="fab fa-youtube text-2xl"></i>
            </Link>
          </div> */}

          {/* Copyright */}
          <p className="text-sm text-gray-600 mt-4 md:mt-0">
            © 2025. All rights reserved. Saltside Technologies
          </p>
          <p>PuronoBazar</p>
        </div>
      </SHContainer>
    </footer>
  );
};

export default Footer;
