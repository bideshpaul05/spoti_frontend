import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Nav from "./utils/Nav";
import Footer from "./utils/Footer";
import Home from "./pages/Home";

function App() {
  function Layout() {
    return (
      <div>
        <Nav />
        <Outlet />
        <Footer />
      </div>
    );
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        }
       
      ]
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    
   
  
  ]);
  return (
    <div className="App" style={{"background":"black"}}>
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
