import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

// Import book images
import book1 from '../assets/book-1.jpg';
import book2 from '../assets/book-2.jpg';
import book3 from '../assets/book-3.jpg';
import book4 from '../assets/book-4.jpg';
import book5 from '../assets/book-5.jpg';
import book6 from '../assets/book-6.jpg';

const Books = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const dispatch = useDispatch();

  const categories = [
    'all',
    'fiction',
    'non-fiction',
    'science',
    'history',
    'technology',
    'business'
  ];

  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 290.00,
      category: "fiction",
      image: book1,
      description: "A story of decadence and excess."
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 240.00,
      category: "fiction",
      image: book2,
      description: "A classic of modern American literature."
    },
    {
      id: 3,
      title: "Brief History of Time",
      author: "Stephen Hawking",
      price: 190.00,
      category: "science",
      image: book3,
      description: "Exploring the mysteries of the universe."
    },
    {
      id: 4,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      price: 220.00,
      category: "business",
      image: book4,
      description: "A guide to personal development and success."
    },
    {
      id: 5,
      title: "The Art of War",
      author: "Sun Tzu",
      price: 180.00,
      category: "history",
      image: book5,
      description: "Ancient wisdom for modern strategy."
    },
    {
      id: 6,
      title: "Clean Code",
      author: "Robert C. Martin",
      price: 340.00,
      category: "technology",
      image: book6,
      description: "A handbook of agile software craftsmanship."
    }
  ];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Our Books Collection</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search books..."
            className="input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="input"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
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
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">{book.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">₹{book.price}</span>
                <div className="flex gap-2">
                  <Link
                    to={`/books/${book.id}`}
                    className="text-secondary hover:underline"
                  >
                    Details
                  </Link>
                  <button
                    onClick={() => handleAddToCart(book)}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <ShoppingCartIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books; 