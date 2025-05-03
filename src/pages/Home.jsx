import { Link } from 'react-router-dom';
import book1 from '../assets/book-1.jpg';
import book2 from '../assets/book-2.jpg';
import book3 from '../assets/book-3.jpg';
import book4 from '../assets/book-4.jpg';
import heroImage from '../assets/teenager-student-girl-yellow-pointing-finger-side-copy.png';

const Home = () => {
  const featuredBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 290.00,
      image: book1
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 240.00,
      image: book2
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      price: 190.0,
      image: book3
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: 220.00,
      image: book4
    }
  ];

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 sm:py-16 lg:py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <span className="text-primary uppercase tracking-wide font-medium">back to school</span>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mt-2 mb-4">Special 50% Off</h1>
              <h2 className="text-xl sm:text-2xl text-gray-600 mb-6">for our student community</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
                Discover amazing deals on textbooks, study guides, and educational materials.
                Don't miss out on this limited-time offer exclusively for students!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
                <Link to="/books" className="btn btn-primary">
                  Get The Deal
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
                <button className="btn bg-white text-gray-700 hover:bg-gray-100">
                  See other Promos
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={heroImage}
                alt="Student with books"
                className="w-full max-w-lg mx-auto h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-bolt text-primary text-2xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Quick Delivery</h3>
              <p className="text-gray-600">Get your books delivered fast and securely</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield text-primary text-2xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">Safe and secure payment methods</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-thumbs-up text-primary text-2xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Best Quality</h3>
              <p className="text-gray-600">Curated collection of quality books</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-star text-primary text-2xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Return Guarantee</h3>
              <p className="text-gray-600">Easy returns within 30 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Featured Books</h2>
            <p className="text-gray-600">Discover our handpicked selection of must-read books</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredBooks.map((book) => (
              <div key={book.id} className="card group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-1">{book.title}</h3>
                  <p className="text-gray-600 mb-2 line-clamp-1">{book.author}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">₹{book.price}</span>
                    <Link 
                      to={`/books/${book.id}`} 
                      className="text-secondary hover:underline"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 