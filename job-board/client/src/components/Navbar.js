import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <ul className="flex justify-center space-x-6 text-lg font-semibold">
        <li><Link to="/" className="hover:text-yellow-300 transition duration-300">Home</Link></li>
        <li><Link to="/login" className="hover:text-yellow-300 transition duration-300">Login</Link></li>
        <li><Link to="/register" className="hover:text-yellow-300 transition duration-300">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
