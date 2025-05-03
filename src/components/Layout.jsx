import { useState, useTransition, Suspense } from 'react';
import { Link, Outlet, useNavigate, useLocation, useLoaderData, Await } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCartIcon, UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useLoaderData();
  const cartItems = useSelector(state => state.cart.items);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleNavigation = (path) => {
    startTransition(() => {
      navigate(path);
      setIsMenuOpen(false);
    });
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center space-x-2"
              onClick={() => startTransition(() => setIsMenuOpen(false))}
            >
              <img src={logo} alt="Bookoe" className="h-10 w-10" />
              <div>
                <h1 className="text-xl font-bold">Bookoe</h1>
                <p className="text-sm text-gray-600">Book Store Website</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { path: '/', label: 'Home' },
                { path: '/service', label: 'Service' },
                { path: '/contact', label: 'Contact' },
                { path: '/books', label: 'Books' }
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`text-gray-700 hover:text-primary transition-colors ${
                    isActive(path) ? 'text-primary font-medium' : ''
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/cart" className="relative">
                <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-primary transition-colors" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>
              <Link 
                to="/login" 
                className={`btn btn-secondary transition-opacity ${isPending ? 'opacity-70' : ''}`}
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className={`btn btn-primary transition-opacity ${isPending ? 'opacity-70' : ''}`}
              >
                <UserIcon className="h-5 w-5 inline-block mr-1" />
                Sign Up
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                {[
                  { path: '/', label: 'Home' },
                  { path: '/service', label: 'Service' },
                  { path: '/contact', label: 'Contact' },
                  { path: '/books', label: 'Books' },
                  { path: '/cart', label: 'Cart' }
                ].map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`text-gray-700 hover:text-primary transition-colors ${
                      isActive(path) ? 'text-primary font-medium' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <Link 
                  to="/login" 
                  className="btn btn-secondary w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="btn btn-primary w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[200px]">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
          </div>
        }>
          <Await resolve={user}>
            {(resolvedUser) => (
              <div className={`transition-opacity duration-200 ${isPending ? 'opacity-70' : ''}`}>
                <Outlet />
              </div>
            )}
          </Await>
        </Suspense>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About Bookoe</h3>
              <p className="text-gray-400">
                Your one-stop shop for all your reading needs. Find the latest books,
                best sellers, and rare collections.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/books" className="text-gray-400 hover:text-white">Books</Link></li>
                <li><Link to="/service" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Shipping Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Return Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Bookoe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 