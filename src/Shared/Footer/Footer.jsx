import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-0">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {/* Left side */}
        <div className="bg-[#1F2937] text-white p-8 md:p-10 text-center space-y-3 flex flex-col items-center justify-center">
          <h1 className="text-lg md:text-xl font-bold">CONTACT US</h1>
          <p className="text-sm md:text-base leading-relaxed">
            123 ABS Street, Uni 21, Bangladesh <br />
            +88 01761654478 <br />
            Mon - Fri: 08:00 - 22:00 <br />
            Sat - Sun: 10:00 - 23:00
          </p>
        </div>

        {/* Right side */}
        <div className="bg-[#111827] text-white p-8 md:p-10 text-center space-y-3 flex flex-col items-center justify-center">
          <h1 className="text-lg md:text-xl font-bold">Follow US</h1>
          <p className="text-sm md:text-base">Join us on social media</p>
          <div className="flex gap-5 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="hover:text-blue-500 cursor-pointer transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-sky-400 cursor-pointer transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center bg-[#151515] text-white p-3 text-sm md:text-base font-medium">
        <p>Copyright © CulinaryCloud. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
