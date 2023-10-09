import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Grass from "./pages/Grass";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import './sass/style.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="grass" element={<Grass />} />
          <Route path="contact" element={<Contact />} />
          <Route path=":id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);