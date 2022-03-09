import About from "./components/about/About";
import Intro from "./components/intro/Intro"

import ProductList from "./components/product list/ProductList";
import Contact from "./components/contact/Contact";
import Toogle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";




const App = () => {
  const theme=useContext(ThemeContext)
  const darkMode =theme.state.darkMode;
  

  return <div style={{backgroundColor:darkMode? " #222 ": "#ECEFF1" ,
  color:darkMode && "white"}}>
    
      
      <Intro/>
    <About />
    
    <ProductList />
    
    <Contact/>
    <Toogle />
    
    
  </div>;

};

export default App;