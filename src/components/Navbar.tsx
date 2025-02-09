import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between">
        <Link href="#home" className="text-xl font-bold">TechieGuys</Link>
        <div>
          <Link href="#about" className="mx-2 hover:underline">About</Link>
          <Link href="#services" className="mx-2 hover:underline">Services</Link>
          <Link href="#portfolio" className="mx-2 hover:underline">Portfolio</Link>
          <Link href="/blog" className="mx-2 hover:underline">Blog</Link>
          <Link href="#contact" className="mx-2 hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
