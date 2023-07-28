import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Search from "./components/Search/search";
import Support from "./components/Support/Support";
import Info from "./components/Info/Info";
import Lounge from "./components/Lounge/Lounge";
import Travelers from "./components/Travelers/travelers";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribe />
      <Footer />

    </div>
  )
}
export default App