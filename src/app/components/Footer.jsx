const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">© 2024 Yulun Wang. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy Policy *
          </a>
          {/* <a href="#" className="text-gray-400 hover:text-white">
            Terms of Service
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
