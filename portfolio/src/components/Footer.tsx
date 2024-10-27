import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12">
      <div className="flex flex-col items-center space-y-6">
        
        {/* Resume Button */}
        <a 
          href="/Resume-Ashraf-Swaidan.pdf"  
          download
          className="text-2xl font-semibold hover:underline"
        >
          Download My Resume
        </a>

        {/* Social Media Icons */}
        <div className="flex space-x-6 text-4xl">
          <a 
            href="https://github.com/Ashraf-Swaidan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-600"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.facebook.com/share/VujJA8HHxkXK9zHK/?mibextid=LQQJ4d" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-600"
          >
            <FaFacebook />
          </a>
          <a 
            href="https://instagram.com/_ashraf_swaidan_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-600"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.linkedin.com/in/ashraf-swaidan-9aaa612b1/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-600"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Contact Information */}
        <div className="text-lg text-gray-700 text-center">
          <p>Phone: +961 76 350 373</p> 
          <p>Email: ashraf.swaidan.13@gmail.com</p> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
