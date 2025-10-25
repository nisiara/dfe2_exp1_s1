import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import { Route, Routes } from "react-router-dom";
import CarTypePage from "./pages/CarTypePage";

const App = () => {
  return (
    <main>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/type/:type" element={<CarTypePage/>}/>
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </main>
  )
}
 
export default App;