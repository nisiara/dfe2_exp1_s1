import { useParams } from "react-router-dom";
import CarList from "../components/CarList";

const CarTypePage = () => {
  const {type} = useParams()

  return <CarList carType={type}/>
 
}
 
export default CarTypePage;