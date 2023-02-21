import "./App.css";
import FlippabelCard from "./components/FlippabelCard";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <FlippabelCard />
      </div>
    </>
  );
}

export default App;
