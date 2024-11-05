import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ResultSearch from "./Pages/ResultSearch";
import ProductDetail from "./Pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="app">
        <Routes>
          <Route path="/items" element={<ResultSearch />} />
          <Route path="/items/:id" element={<ProductDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
