import "./App.css";
import OpenWhenCard from "./components/OpenWhenCard";
import { openWhens } from "./data/messages";

function App() {
  return (
    <>
      <h1>Open When 💌</h1>
      <p className="subtitle">For you, whenever you need me.</p>

      <div className="grid">
        {openWhens.map((item) => (
          <OpenWhenCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default App;
