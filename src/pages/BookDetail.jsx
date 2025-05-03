import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { ShoppingCartIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

// Import book images
import book1 from '../assets/book-1.jpg';
import book2 from '../assets/book-2.jpg';
import book3 from '../assets/book-3.jpg';
import book4 from '../assets/book-4.jpg';
import book5 from '../assets/book-5.jpg';
import book6 from '../assets/book-6.jpg';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Map of book images
  const bookImages = {
    1: book1,
    2: book2,
    3: book3,
    4: book4,
    5: book5,
    6: book6
  };

  // Book data mapping
  const bookData = {
    1: {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 29.99,
      category: "fiction",
      description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
      isbn: "978-0743273565",
      publisher: "Scribner",
      publishDate: "April 10, 1925",
      pages: 180,
      language: "English",
      format: "Paperback"
    },
    2: {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 24.99,
      category: "fiction",
      description: "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature.",
      isbn: "978-0446310789",
      publisher: "Grand Central Publishing",
      publishDate: "July 11, 1960",
      pages: 281,
      language: "English",
      format: "Paperback"
    },
    // Add more books as needed
  };

  const currentId = parseInt(id);
  const book = {
    id: currentId,
    image: bookImages[currentId],
    ...bookData[currentId]
  };

  const handleAddToCart = () => {
    dispatch(addToCart(book));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-primary mb-8 transition-colors"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Back to Books
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-[3/4] relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">{book.title}</h1>
          <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
          <p className="text-2xl text-primary font-bold mb-6">${book.price}</p>
          
          <div className="prose max-w-none mb-6">
            <p className="text-gray-700">{book.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-semibold text-gray-700">ISBN</h3>
              <p>{book.isbn}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Publisher</h3>
              <p>{book.publisher}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Publication Date</h3>
              <p>{book.publishDate}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Pages</h3>
              <p>{book.pages}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Language</h3>
              <p>{book.language}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Format</h3>
              <p>{book.format}</p>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="btn btn-primary w-full flex items-center justify-center"
          >
            <ShoppingCartIcon className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              id: 1,
              user: "John Doe",
              rating: 5,
              comment: "A masterpiece of American literature."
            },
            {
              id: 2,
              user: "Jane Smith",
              rating: 4,
              comment: "Beautifully written, captures the essence of the era."
            }
          ].map((review) => (
            <div key={review.id} className="card p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold">{review.user}</p>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`text-${
                        index < review.rating ? 'yellow' : 'gray'
                      }-400`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookDetail; 