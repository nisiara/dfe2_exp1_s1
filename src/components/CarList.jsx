import data from "../../public/data/data";

const CarList = ({carType}) => {
  const filteredCars = carType 
    ? data.filter(car => car.tipo.toLowerCase() === carType.toLowerCase())
    : data;

  return ( 
    <>
      {filteredCars.length > 0 ? (
        filteredCars.map(car => (
          <article key={car.id}>
            <h3>{car.marca}</h3>
            <h4>{car.modelo}</h4>
            <p>Tipo: {car.tipo}</p>
          </article>
        ))
      ) : (
        <p>No se encontraron autos de tipo "{carType}"</p>
      )}
    </>

  );
}
 
export default CarList;