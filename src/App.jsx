import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CarTypePage from "./pages/CarTypePage";
import "./main.sass"

const App = () => {
  return (
    <main className="container">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/type/:type" element={<CarTypePage/>}/>
      </Routes>
    </main>
  )
}
 
export default App;