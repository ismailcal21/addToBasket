import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./home";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
