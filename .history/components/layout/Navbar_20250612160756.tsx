import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-blue-600 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-white font-bold text-xl">
        MyApp
      </Link>
      <div className="space-x-4">
        <Link href="/" className="text-white hover:text-gray-200">
          Home
        </Link>
        <Link href="/about" className="text-white hover:text-gray-200">
          About
        </Link>
        <Link href="/contact" className="text-white hover:text-gray-200">
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
