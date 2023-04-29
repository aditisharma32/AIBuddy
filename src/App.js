import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./components/Navigation";
import GrammarCorrection from "./components/Grammarcorrection";
import Home from "./components/Home";
import SqlRequest from "./components/SqlRequest";
import Timecomplexity from "./components/Timecomplexity";
import Javascripthelper from "./components/Javascripthelper";
import Translateprogramminglang from "./components/Translateprogramminglang";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Storycreator from "./components/Storycreator";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App styling">
        <Navigation />
        <section style={{ backgroundColor: "rgb(205 242 226)", minHeight: "100vh" }}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/sql-requests" element={<SqlRequest />} />
            <Route path="/grammar-correction" element={<GrammarCorrection />} />
            <Route path="/time-complexity" element={<Timecomplexity />} />
            <Route path="/javascript-helper" element={<Javascripthelper />} />
            <Route
              path="/translate-programming-lang"
              element={<Translateprogramminglang />}
            />
            <Route path="/story-creator" element={<Storycreator />} />
            <Route path="/contacts" element={<Contact />} />
          </Routes>
          <hr
            style={{
              height: "3px",
              backgroundColor: "gray",
              border: "none",
            }}
          />

          <Footer />
        </section>
      </div>
    </Router>
  );
}

export default App;
