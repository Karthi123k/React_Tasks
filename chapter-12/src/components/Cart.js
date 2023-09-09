import { useSelector,useDispatch } from "react-redux";
import FoodItem from"./FoodItem";
import {clearCart} from"../Utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const cartstyle = {
    marginTop: '80px',
  };
const dispatch=useDispatch();
  const handleClear=()=>
  {
    dispatch(clearCart());

  };

  return (
    <>
    <div>
      <h1 style={cartstyle}>Cart {cartItems.length} Items</h1>
      <button onClick={()=>handleClear()}>Clear Cart</button>

      <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {cartItems.map((item)=>(
        <FoodItem key={item.id} {...item}/>
   
))} 
 </div>
    </div>
    </>   
  );
};
export default Cart;