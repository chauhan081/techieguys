import Link from "next/link";

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white text-center p-6 mt-10">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} TechieGuys. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-6">
            <Link href="#" className="hover:text-blue-400">LinkedIn</Link>
            <Link href="#" className="hover:text-blue-400">Twitter</Link>
            <Link href="#" className="hover:text-blue-400">Instagram</Link>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  