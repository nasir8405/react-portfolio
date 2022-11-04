import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { Experience } from "./Components/Experience/Experience";
import { Header } from "./Components/Header/Header";
import { Nav } from "./Components/Nav/Nav";
import { Portfolio } from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
