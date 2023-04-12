import "./style.scss"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import Cart from "./Cart/Cart";
function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={'/'} element={<Layout/>}>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/cart'} element={<Cart/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Route>
        )
    )
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
