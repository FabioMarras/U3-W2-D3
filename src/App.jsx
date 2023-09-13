import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/NavBar";
import HarryPotter from "./components/HarryPotter";
import TheLordOfRings from "./components/TheLordOfRings";
import JohnWick from "./components/JohnWick";
import Header from "./components/Header";
import Footer from "./components/footer";
import Profile from "./components/Profile";
import Setting from "./components/Setting";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Header />
        <TheLordOfRings />
        <Routes>
          <Route path="/MovieTLOR/:movieId" element={<MovieDetails />} />
        </Routes>
        <HarryPotter />
        <Routes>
          <Route path="/MovieHP/:movieId" element={<MovieDetails />} />
        </Routes>
        <Routes>
          <Route path="/JohnWick" element={<JohnWick />} />
          <Route path="/MovieDetails/:movieId" element={<MovieDetails />} />
        </Routes>
        {/* <Profile /> */}
        {/* <Setting /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
