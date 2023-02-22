import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { Skills } from "./Components/Skills/Skills";
import { Projects } from "./Components/Projects/Projects";
import { Nav } from "./Components/Nav/Nav";
import { Header } from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;
