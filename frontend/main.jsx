import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/styles.css';
import App from './src/pages/home/App.jsx';
// import Testimonials from './src/pages/testimonial/testimonials.jsx';
import Training from './src/pages/training/Trainings.jsx';
import Registration from './src/pages/registration/Course.jsx';
import Funding from './src/pages/funding/Fundings.jsx';
// import Contact from './src/pages/contact/Contacts.jsx'
// import Blog from './src/pages/blog/Blog.jsx'



// Router & routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  // {
  //   path: '/temoignages',
  //   element: <Testimonials />,
  // },
  {
    path: '/formations',
    element: <Training />,
  },
  {
    path: '/inscription',
    element: <Registration />,
  },
  {
    path: '/financement',
    element: <Funding />,
  },
  // {
  //   path: '/contact-faq',
  //   element: <Contact />,
  //   },
  // {
  //   path: '/blog',
  //   element: <Blog />,
  //   },

]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
