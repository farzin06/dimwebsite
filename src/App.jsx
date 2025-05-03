import { 
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  defer
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Books from './pages/Books';
import BookDetail from './pages/BookDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Service from './pages/Service';

// Loader function to handle data fetching
const layoutLoader = () => {
  return defer({
    // Add any global data you want to load
    user: Promise.resolve(null),
  });
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
      path="/" 
      element={<Layout />}
      loader={layoutLoader}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <Route index element={<Home />} />
      <Route path="books">
        <Route index element={<Books />} />
        <Route path=":id" element={<BookDetail />} />
      </Route>
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="contact" element={<Contact />} />
      <Route path="service" element={<Service />} />
    </Route>
  ),
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
);

function App() {
  return (
    <RouterProvider 
      router={router}
      fallbackElement={<div>Loading...</div>}
    />
  );
}

export default App;
