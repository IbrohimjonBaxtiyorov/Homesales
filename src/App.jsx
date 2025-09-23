import Card from "./components/Card";
import Footer from "./components/Footer";
import FooterText from "./components/FooterText";
import Header from "./components/Header";
import Main from "./components/Main";
import Map from "./components/Map";

const App = () => (
  <div className="App">
    <Header />
    <Main />
    <Card />
    <Map/>
    {/* <Footer/> */}
    <FooterText/>
  </div>
);

export default App;
