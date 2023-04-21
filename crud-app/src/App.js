import "./App.css";
import Navbar from "./components/Navbar";
import MainRoutes from "./pages/MainRoutes";

function App() {
  return (
    <div className="App">
      <h1>CRUP App</h1>
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
