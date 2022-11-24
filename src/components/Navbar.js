import { BrowserRouter, Route, Routes, Link} from "react-router-dom"
import Home from "../pages/Home"
import Photos from "../pages/Photos"



function Navbar() {
    return (
        <BrowserRouter>
        <header>
        <nav>
            <ul>
                 <Link to="/">Home</Link>
                 <Link to="/photos">Photos</Link>

            </ul>
        </nav>

        </header>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/photos' element={<Photos/>}></Route>
        </Routes>
    </BrowserRouter>
    )
}

export default Navbar