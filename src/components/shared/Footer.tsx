"use client";

import Link from "next/link";
import Image from "next/image";
import googleImg from "../../app/assets/google-play.webp";
import appleStore from "../../app/assets/appleS.png";
import SHContainer from "../ui/core/SHContainer";
import logo1 from "../../app/assets/footerlo.png";

const Footer = () => {
  return (
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
          {/* Copyright */}
          <p className="text-sm text-gray-600 mt-4 md:mt-0">
            © 2025. All rights reserved. Saltside Technologies
          </p>
          {/* <p>PuronoBazar</p> */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-black flex items-center"
            >
              <Image
                src={logo1}
                alt="Logo"
                width={40}
                height={40}
                className="sm:w-auto sm:h-auto max-w-[150px] md:max-w-[200px] text-black"
              />
              <h1>PuronoBazar</h1>
            </Link>
          </div>
        </div>
      </SHContainer>
    </footer>
  );
};

export default Footer;
