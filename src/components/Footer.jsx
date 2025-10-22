import React from 'react';
import MyContainer from './MyContainer';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="bg-base-300 ">
      <MyContainer>
        <footer className=" grid md:grid-cols-3  md:justify-items space-x-15 py-10 p-3 gap-5 ">
          <nav>
            <h6 className="footer-title">Contact Info</h6>
            <p>Address: 123, Green Road, Dhaka, Bangladesh</p>
            <p className="flex items-center gap-2 ">
              <FaPhone /> Phone: +880 1789 123 456
            </p>
            <p className="flex items-center gap-2 ">
              <MdOutlineEmail /> Email: support@skillswap.com
            </p>
          </nav>
          <nav>
            <h6 className="footer-title">privacy policy</h6>
            <p className="">
              At Grapcode, we value your privacy. This Privacy Policy outlines
              how we collect, use, and protect your personal information to
              ensure a safe and trusted experience on our website and services.
            </p>
          </nav>
          <nav>
            <h6 className="footer-title">Social Links</h6>
            <div className="flex flex-col">
              <a className="flex items-center gap-2 font-medium" href="">
                <FaFacebook /> Facebook
              </a>
              <a className="flex items-center gap-2 font-medium" href="">
                <FaXTwitter /> Twitter
              </a>
              <a className="flex items-center gap-2 font-medium" href="">
                <FaInstagram /> Instagram
              </a>
              <a className="flex items-center gap-2 font-medium" href="">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </nav>
        </footer>
      </MyContainer>
    </div>
  );
};

export default Footer;
