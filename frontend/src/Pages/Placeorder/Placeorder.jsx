import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../Context/StoreContext';
const Placeorder = () => {
  const{getTotalCartAmount}=useContext(StoreContext);
  return (
    <form className='place_order'>
      <div className="place_order_left">
   <p className='title'>Delivery Information</p>
      <div className="multi_fields"> 
           <input type="text" placeholder='first_name'/>
           <input type="text" placeholder='last_name'/>
      </div>
       <input type="email" placeholder='Email Address' />
       <input type="text" placeholder='Street'/>
        <div className="multi_fields">
          <input type="text" placeholder='city'/>
          <input type="text" placeholder='state'/>
        </div>
        <div className="multi_fields">
          <input type="text" placeholder='zip_code'/>
          <input type="text" placeholder='country'/>
        </div>
       <input type='text' placeholder='phone' />

        </div>
      <div className="place_order_right">
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>

              <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <div className='cart-total-details'>
              <p>Delivery fee</p>
              <p>Rs.{getTotalCartAmount()===0?0:2}</p>
            </div>
            <div className='cart-total-details'>
              <b>Total</b>
              <b>Rs.{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>

          </div>
          <button >Proceed To Payment</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder
