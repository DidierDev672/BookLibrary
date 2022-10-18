import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import "../styles/global.scss";

const App = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/sign-in" element={<SignIn/>} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;