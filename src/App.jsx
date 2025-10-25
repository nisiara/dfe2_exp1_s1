import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CarTypePage from "./pages/CarTypePage";
import "./main.sass"
import AboutUsPage from "./pages/AboutUsPage";

const App = () => {
  return (
    <main className="container">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/type/:type" element={<CarTypePage/>}/>
        <Route path="/about-us" element={<AboutUsPage/>} />
      </Routes>
    </main>
  )
}
 
export default App;