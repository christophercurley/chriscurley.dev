import "./App.css";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Portrait from "./components/Portrait";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Portrait />
      <Info />
    </>
  );
}

export default App;
