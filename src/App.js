import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import Home from "./pages/home";
import NavBar from "./components/navbar";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound";
import Footer from "./components/footer";
import Photos from "./pages/photos";

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div className="App">
            <NavBar/>
            <AnimatePresence exitBeforeEnter>
                <Routes>
                    <Route path='/' exact element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/photos' element={<Photos/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </AnimatePresence>
            <Footer/>
            <ToastContainer />
        </div>
    );
}

export default App;
