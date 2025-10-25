import { Link } from "react-router-dom";
import data from "../../../public/data/data";
import "./Header.sass"
const Header = () => {
  
  const carsByType = Object.groupBy(data, auto => auto.tipo);
  console.log('carsByType', carsByType)
  const carTypes = Object.keys(carsByType);
  console.log('carTypes', carTypes)

  return (
    <header className="header">
      <h1>Automotora</h1>
      <nav className="header__nav"> 
        <ul>
          <li><Link to="/">Home</Link></li>
          {carTypes.map(type => (
            <li key={type}>
              <Link to={`/type/${type.toLowerCase()}`}>{type}</Link>
            </li>
          ))}
          
        </ul>
      </nav>
     </header>
  )
}
 
export default Header;