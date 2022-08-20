import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { CampsitesList } from "./features/campsites/CampsitesList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesList />
      <Footer />
    </div>
  );
}

export default App;
