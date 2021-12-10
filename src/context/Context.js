import { createContext, useContext, useReducer } from "react";
//import faker from "faker";
import { cartReducer } from "./Reducers";
import logo from '../images/Shirt1.webp';
import logo1 from '../images/Shirt2.webp';
import logo2 from '../images/Shirt3.webp';
import logo3 from '../images/Shirt4.jpg';
import logo4 from '../images/Tshirt1.webp';
import logo5 from '../images/Tshirt2.webp';
import logo6 from '../images/Tshirt3.webp';
import logo7 from '../images/Tshirt4.webp';
import logo8 from '../images/Tshirt5.webp';
const Cart = createContext();
//faker.seed(99);

const Context = ({ children }) => {
  const products = [
    {
    id:1,
    name:"Black Shirt",
    price:100,
    image:logo,
    inStock:true,
    },
    {
      id:2,
      name:"Purple Shirt",
      price:100,
      image:logo1,
      inStock:true,
      },
      {
        id:3,
        name:"Gray Shirt",
        price:100,
        image:logo2,
        inStock:true,
        },
        {
          id:4,
          name:"Check Shirt",
          price:100,
          image:logo3,
          inStock:true,
          },
          {
            id:5,
            name:"Red Tshirt",
            price:100,
            image:logo4,
            inStock:true,
            },
            {
              id:6,
              name:"Black Tshirt",
              price:100,
              image:logo5,
              inStock:true,
              },
              {
                id:7,
                name:"Green Tshirt",
                price:100,
                image:logo6,
                inStock:true,
                },
                {
                  id:8,
                  name:"White Tshirt",
                  price:100,
                  image:logo7,
                  inStock:true,
                  },
                  {
                    id:9,
                    name:"Denim Tshirt",
                    price:100,
                    image:logo8,
                    inStock:true,
                    }
  ]

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  return (
    <Cart.Provider value={{ state, dispatch}}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;