import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Provider } from "react-redux";
import Navbar from "./Components/Headeer/Header";
import Errorpage from "./Components/Errorpage/Errorpage";
// import SignupModal from './Components/HomePage/outh/Signup/Signup';
import { store } from "./Store/Store";
import Restorentspage from "./Components/Restorentspage/Restorentspage";
import FilterProduct from "./Components/Filterproduct/FilterProduct";
import ViewDetail from "./Components/ViewDetail/ViewDetail";
import DrawerAppBar from "./Components/Headeer/Header";


function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Navbar />, 
    
      children:[{
        path: "",
        element: <HomePage />,
      },
        
        {
        path:"",
        element: <Errorpage />
      },
      
      {
        path: "/Restorentspage",
        element: <Restorentspage />,
      },
      {
        path: "/FilterProduct",
        element: <FilterProduct />,
      },
      {
        path: "/ViewDetail",
        element: <ViewDetail />,
      },
     
     

    ],
       },
    
    
    
  ]);

  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
