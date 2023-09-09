import { IMG_CDN_URL } from "../constants";

// Restaurant card component: Image, name, cuisine
const FoodItem = ({
    imageId,
  name, 
  description,
  sla,
  costForTwo,
  
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + imageId} />
      <h3>{name}</h3>      
      <h5>{description}</h5>
      <span>
        
        <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
        <h4>{costForTwo ?? '₹200 for two'}</h4>
      </span>
    </div>
  );
};

export default FoodItem;