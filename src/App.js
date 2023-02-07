import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Description } from "./components/Description";
import { Profile } from "./components/Profile";
import { CardsContaniner } from "./components/CardsContainer";
import './styles/index.css'

function App() {
  return (
    <div className="container">
      <Header />

      <main className="main-container">
         <section className="content"> 
         <Description />
         <CardsContaniner/>
         </section>
         <Profile/>
      </main>

      <Footer />
    </div>
  );
}

export default App;
