import React from 'react'
import { Link } from 'react-router-dom'
import { getImgUrl } from '../../utils/getImgUrl'
import { useDispatch, useSelector } from 'react-redux';
import CheckoutCard from '../books/CheckoutCard';
import { emptyCart } from '../../redux/feature/cart/cartSlice';


const Cart = () => {
    const cartitems = useSelector((state) => state.cart.cartItems);
    const dispatcher = useDispatch();
    console.log(cartitems);
    var total = 0;
    cartitems.map((ci,index)=>(
                
        total = total + ci.newPrice
    ))
    const handleClearCart =()=>{
        dispatcher(emptyCart());
    }
    return (
        <div className="flex mt-12 h-full flex-col overflow-hidden bg-white shadow-xl">
    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
      <div className="flex items-start justify-between">
        <div className="text-lg font-medium text-gray-900">Shopping cart</div>
        <div className="ml-3 flex h-7 items-center ">
          {
            cartitems.length?
            <button
            type="button"
            onClick={handleClearCart}
            className="relative -m-2 py-1 px-2 bg-red-500 text-white rounded-md hover:bg-secondary transition-all duration-200  "
          >
            <span className="">Clear Cart</span>
          </button>
          :""}
        </div>
      </div>
{
    cartitems.length?

      <div className="mt-8">
        <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          
          {

            cartitems.map((ci,index)=>(
                
                <CheckoutCard ci={ci} key={ci?._id}/>
            ))
          }
                       
            </ul>
        </div>
      </div>
      :   
      "No items in the cart"
    }
    </div>

    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
      <div className="flex justify-between text-base font-medium text-gray-900">
        <p>Subtotal</p>
        <p>${total.toFixed(2)}</p>
      </div>
      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
      {
            cartitems.length?<div className="mt-6">
        <Link
          to="/checkout"
          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Checkout
        </Link>
    
      </div>
      :""}
      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
        <Link to="/">
         
          <button
            type="button"

            className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </Link>
      </div>
    </div>
  </div>
    
    
  )
}

export default Cart