import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ResultSearch from "./Pages/ResultSearch";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="app">
        <Routes>
          <Route path="/items" element={<ResultSearch />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
