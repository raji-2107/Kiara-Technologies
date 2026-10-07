import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Competition from "./pages/Competition";
import Register from "./pages/Register";
import Success from "./pages/Success";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/categories"
          element={<Categories />}
        />

        <Route
          path="/competition"
          element={<Competition />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/success"
          element={<Success />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;