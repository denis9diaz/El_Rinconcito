import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import injectContext from "./store/appContext";

import Footer from "./pages/Footer.js";
import Home from "./pages/Home.js";
import Informacion from "./pages/Informacion.js";
import Galeria from "./pages/Galeria.js";
import Carta from "./pages/Carta.js";
import Menus from "./pages/Menus.js";
import Historia from "./pages/Historia.js";
import Entrantes from "./secciones-carta/Entrantes.js";
import Marisco from "./secciones-carta/Marisco.js";
import Arroces from "./secciones-carta/Arroces.js";
import Carnes from "./secciones-carta/Carnes.js";
import Pescados from "./secciones-carta/Pescados.js";
import Postres from "./secciones-carta/Postres.js";
import Bebidas from "./secciones-carta/Bebidas.js";
import Vinos from "./secciones-carta/Vinos.js";

const Layout = () => {

    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Informacion />} path="/info" />
                        <Route element={<Galeria />} path="/galeria" />
                        <Route element={<Carta />} path="/carta" />
                        <Route element={<Menus />} path="/menus" />
                        <Route element={<Historia />} path="/historia" />
                        <Route element={<Entrantes />} path="/entrantes" />
                        <Route element={<Marisco />} path="/marisco" />
                        <Route element={<Arroces />} path="/arroces" />
                        <Route element={<Carnes />} path="/carnes" />
                        <Route element={<Pescados />} path="/pescados" />
                        <Route element={<Postres />} path="/postres" />
                        <Route element={<Bebidas />} path="/bebidas" />
                        <Route element={<Vinos />} path="/vinos" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
