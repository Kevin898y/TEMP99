import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      Company Name © {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;