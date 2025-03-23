import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Contact from "./pages/Contact";
import ToDoList from "./pages/ToDoList";

import Navbar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo-list" element={<ToDoList />} />
      </Routes>
    </Router>
  );
};

export default App;
