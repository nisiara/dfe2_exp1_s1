import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const  {pathname} = useLocation()
  console.log('genero', pathname)
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
 
export default Header;