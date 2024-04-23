import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes and Route
import Header from "./components/Header";
import "./styles/App.scss"
import Home from "./components/Home";
import "./styles/header.scss"
import "./styles/home.scss"
import Footer from "./components/Footer";
import "./styles/footer.scss"
import Contact from "./components/Contact";
import "./styles/contact.scss"
import Services from "./components/Services";
import "./styles/services.scss"
import "./styles/mediaquery.scss"
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
