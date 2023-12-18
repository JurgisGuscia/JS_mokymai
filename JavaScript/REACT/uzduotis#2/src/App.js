import NavBar from "./components/navBar/NavBar";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import AboutUs from "./components/aboutUs/AboutUs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Services />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
