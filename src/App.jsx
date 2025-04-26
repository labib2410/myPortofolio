import { createHashRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'animate.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Components/Layout/Layout';
function App() {
  const router = createHashRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Hero /> },
        { path: 'about', element: <About /> },
        { path: 'projects', element: <Projects /> },
        { path: 'contact', element: <Contact /> },

      ]

    }
  ]);
  return (<>
    {/* <Navbar/>
  <Hero/>
  <About/>
  <Projects/>
  <Contact/>
  <Toaster />  */}
    <RouterProvider router={router} />
    <Toaster />
  </>
  )
}

export default App
