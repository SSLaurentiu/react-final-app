import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Galerie } from "../pages/Galerie";
import { Suspensii } from "../pages/Suspensii";
import { Proiectoare } from "../pages/Proiectoare";
import { Bare } from "../pages/Bare";
import { Jante } from "../pages/Jante";
import { Anvelope } from "../pages/Anvelope";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/suspensii" element={<Suspensii />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/proiectoare" element={<Proiectoare />} />
        <Route path="/bare" element={<Bare />} />
        <Route path="/jante" element={<Jante />} />
        <Route path="/anvelope" element={<Anvelope />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
