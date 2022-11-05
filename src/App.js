import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { Experience } from "./Components/Skills/Skills";
import { Projects } from "./Components/Portfolio/Projects";
import { Nav } from "./Components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
