import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    Link,
    RouterProvider,
  } from "react-router-dom";
import App from './App';




import 'react-toastify/dist/ReactToastify.css';




// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children:[{
// path:"/",
// element :< App/>,

//     }],
//     errorElement: < Errorpage/>
//   },
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
// ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
//  <Provider store={store}>
   
//     <RouterProvider  router={router}/>
//     </Provider>
);

