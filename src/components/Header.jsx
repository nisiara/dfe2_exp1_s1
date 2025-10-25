import { Link } from "react-router-dom";
import data from "../../public/data/data";
const Header = () => {
  
  const carsByType = Object.groupBy(data, auto => auto.tipo);
  console.log('carsByType', carsByType)
  const carTypes = Object.keys(carsByType);
  console.log('carTypes', carTypes)


  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {carTypes.map(type => (
          <li key={type}>
            <Link to={`/type/${type.toLowerCase()}`}>{type}</Link>
          </li>
        ))}
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
 
export default Header;