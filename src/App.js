

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import './index.css';



import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Provider } from 'react-redux';
import Navbar from './Components/HomePage/Navbar/Navbar';
import Errorpage from './Components/Errorpage/Errorpage';



function App() {

 const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children:[{
path:"/",
element :< HomePage/>,

    }],
    errorElement: < Errorpage/>
  },
//   {
//     path: "/sign-up",
//     element: <Signup />
//   },
//   {
//     path: "/Add-product",
//     element: <ProtectedRounte> <AddProduct />  </ProtectedRounte> 
//   },
//   {
//     path: "/sign-in",
//     element: <Signin />
//   },
//   {
// path:"/Productdeatails/:Product_id",
// element:<Productdeatails/>
//   }
]);

  return (
    <div className="App">
     
              <RouterProvider router={router} />

    
    </div>
  );
}

export default App;
