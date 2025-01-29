import React from 'react'
import { getImgUrl } from '../../utils/getImgUrl'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/feature/cart/cartSlice';

const CheckoutCard = ({ci}) => {
    const dispatcher = useDispatch();
    const handleDeleteItem= () =>{
        dispatcher(deleteItem({ci}))
    }
  return (
    <li key={ci?._id}  className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      alt=""
                      src={`${getImgUrl(ci?.coverImage)}`}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex flex-wrap justify-between text-base font-medium text-gray-900">
                        <h3>
                          <Link to='/'>{ci?.title}</Link>
                        </h3>
                        <p className="sm:ml-4">{ci?.newPrice}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500 capitalize"><strong>Category:</strong> {ci?.category}</p>
                    </div>
                    <div className="flex flex-1 flex-wrap items-end justify-between space-y-2 text-sm">
                      <p className="text-gray-500"><strong>Qty:</strong> 1</p>

                      <div className="flex">
                        <button onClick={handleDeleteItem}  type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
  )
}

export default CheckoutCard