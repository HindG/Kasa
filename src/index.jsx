import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/Home/HomeView";
import AboutView from "./views/About/AboutView";
import AccomodationView from "./views/Accomodation/AccomodationView";
import ErrorView from "./views/Error/ErrorView";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeView />}></Route>
        <Route exact path="/about" element={<AboutView />}></Route>
        <Route exact path="/accomodation/:id" element={<AccomodationView />}></Route>
        <Route path='*' element={<ErrorView />}></Route>
      </Routes>
    </BrowserRouter >
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);