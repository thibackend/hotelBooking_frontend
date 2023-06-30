import house from "../../assets/house.jpg";
import Rental from "./Rental";

const Rentals = () => {
  const rentals = [
    { title: "", image: house, price: "123" }
  ];
  return (
    <div className="py-3 sm:py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 "style={{flexWrap:'wrap'}}>
        {rentals.map((rental) => (
          <Rental 
            image={rental.image}
            title={rental.title}
            address={rental.address}
            price={rental.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Rentals;