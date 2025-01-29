import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'


const initialState = {
    cartItems: [],
  }

  export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addItem: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        var flag = true;
        state.cartItems.find(ci=>{
            if(ci._id==action.payload._id)
                flag=false;
        });
        if(flag)
        {
            state.cartItems.push(action.payload);
            Swal.fire("Item added successfully!");
        }   
        else
        {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Item already exists",
                //footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
        //console.log(cartItems);
      },
      deleteItem:(state,action)=>{
        var flag= false;
        //const index = state.cartItems.findIndex(element => element._id === action.payload._id);
        state.cartItems = state.cartItems.filter(item=> item._id!== action.payload.ci._id);
        
      }, 
      emptyCart:(state,action)=>{
        state.cartItems = [];
        
      }
      
      /*
      incrementByAmount: (state, action) => {
        state.value += action.payload
      },*/
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addItem,deleteItem,emptyCart } = cartSlice.actions
  
  export default cartSlice.reducer