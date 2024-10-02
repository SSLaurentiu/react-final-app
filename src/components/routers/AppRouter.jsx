import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Galerie } from "../pages/Galerie";
import { Suspensii } from "../pages/Suspensii";
import { Proiectoare } from "../pages/Priectoare";
import { Bare } from "../pages/Bare";
import { Jante } from "../pages/Jante";
import { Accesorii } from "../pages/Accesorii";

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
        <Route path="/accesorii" element={<Accesorii />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
/*<Route path="/Galerie" element={<Galerie />} />
<Route path="/Suspensii" element={<Suspensii />} />
<Route path="/Proiectoare" element={<Proiectoare />} />
<Route path="/Jante" element={<Jante />} />
<Route path="/Bare" element={<Bare />} />
<Route path="/Accesorii" element={<Accesorii />} />*/
