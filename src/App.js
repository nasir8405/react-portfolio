import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { Skills } from "./Components/Skills/Skills";
import { Projects } from "./Components/Projects/Projects";
import { Nav } from "./Components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
