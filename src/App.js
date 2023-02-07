import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Description } from "./components/Description";
import './styles/index.css'

function App() {
  return (
    <div className="container">
      <Header />

      <main>
         <section className="main-content"> 
         <Description />
         </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
