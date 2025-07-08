import React from "react";

const Footer = () => {
  return (
    <footer className="bg-tertiary text-white py-10 px-4 sm:px-8 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Me</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Email: <a href="mailto:kousalya19505@gmail.com" className="hover:text-white transition">kousalya19505@gmail.com</a></li>
            <li>Location: Tanuku, Andhra Pradesh, India</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
           
            <li><a href="#work" className="hover:text-white transition">Projects</a></li>
            <li><a href="#certifications" className="hover:text-white transition">Certifications</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="https://github.com/Bungakousalya" target="_blank" className="hover:text-white transition">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/bunga-kousalya-900938299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:text-white transition">LinkedIn</a></li>
           
          </ul>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Kousalya Bunga. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
