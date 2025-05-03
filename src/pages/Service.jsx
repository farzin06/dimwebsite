import { Link } from 'react-router-dom';
import {
  TruckIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  GiftIcon
} from '@heroicons/react/24/outline';

const Service = () => {
  const services = [
    {
      icon: <TruckIcon className="h-12 w-12" />,
      title: "Fast Delivery",
      description: "Get your books delivered to your doorstep within 2-3 business days."
    },
    {
      icon: <ShieldCheckIcon className="h-12 w-12" />,
      title: "Secure Payment",
      description: "Multiple secure payment options including credit cards and digital wallets."
    },
    {
      icon: <BookOpenIcon className="h-12 w-12" />,
      title: "Wide Selection",
      description: "Access to millions of books across various genres and languages."
    },
    {
      icon: <UserGroupIcon className="h-12 w-12" />,
      title: "24/7 Support",
      description: "Our customer service team is available round the clock to assist you."
    },
    {
      icon: <CurrencyDollarIcon className="h-12 w-12" />,
      title: "Best Prices",
      description: "Competitive prices with regular discounts and special offers."
    },
    {
      icon: <GiftIcon className="h-12 w-12" />,
      title: "Gift Services",
      description: "Send books as gifts with personalized messages and gift wrapping."
    }
  ];

  const features = [
    {
      title: "Student Discount Program",
      description: "Special discounts for students with valid ID. Save up to 20% on educational books.",
      link: "/books"
    },
    {
      title: "Book Club Membership",
      description: "Join our book club to get exclusive benefits, early access to new releases, and monthly curated selections.",
      link: "#"
    },
    {
      title: "Corporate Bulk Orders",
      description: "Special pricing and dedicated support for corporate and institutional buyers.",
      link: "/contact"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how we make your book shopping experience seamless and enjoyable with our comprehensive range of services.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Special Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link
                  to={feature.link}
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our extensive collection of books and enjoy our premium services today.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/books"
              className="btn btn-primary"
            >
              Browse Books
            </Link>
            <Link
              to="/contact"
              className="btn bg-white text-gray-700 hover:bg-gray-100"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-2">How long does delivery take?</h3>
            <p className="text-gray-600">Standard delivery takes 2-3 business days within the continental US. International shipping times may vary.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-2">What is your return policy?</h3>
            <p className="text-gray-600">We offer a 30-day return policy for books in original condition. Return shipping is free for damaged or incorrect items.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-2">Do you offer gift wrapping?</h3>
            <p className="text-gray-600">Yes, we offer gift wrapping services for a small additional fee. You can also include a personalized message with your gift.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service; 