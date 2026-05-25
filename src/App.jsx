import { useState } from "react";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import RoutesPage from "./pages/RoutesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import "./styles/global.css";

export default function App() {

  const [page, setPage] = useState("home");

  const pages = {
    home: HomePage,
    services: ServicesPage,
    routes: RoutesPage,
    about: AboutPage,
    contact: ContactPage,
  };

  const PageComp = pages[page] || HomePage;

  return (
    <>
      <Header
        page={page}
        setPage={setPage}
      />

      <main>
        <PageComp setPage={setPage} />
      </main>

      <Footer setPage={setPage} />
    </>
  );
}