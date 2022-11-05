import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { Experience } from "./Components/Skills/Skills";
import { Nav } from "./Components/Nav/Nav";
import { Portfolio } from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
