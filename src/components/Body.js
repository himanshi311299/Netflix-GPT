import { createBrowserRouter} from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";

const Body = () => {

    const appouter = createBrowserRouter([
        {
            path : "/",
            element: <Login />
        },
        {
            path : "/browse",
            element: <Browse />
        }
    ]

    );

    return (
        <div>
            <RouterProvider router={appouter} />
        </div>
   
    )
}; 

export default Body;