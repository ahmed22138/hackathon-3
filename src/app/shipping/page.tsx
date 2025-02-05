"use client";

import React, { useEffect, useState } from "react";
import { Food } from "../../../types/food";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actionButton/action";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AuthGuard from "@/components/AuthGuard";



function ShippingCart() {
  const [cartItems, setCartItems] = useState<Food[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const food = cartItems.find((item) => item._id === id);
    if (food) handleQuantityChange(id, food.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const food = cartItems.find((item) => item._id === id);
    if (food && food.inventory > 1) handleQuantityChange(id, food.inventory - 1);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.inventory,
      0
    );
  };
  const router = useRouter();
  const handleProceed = () =>{
    Swal.fire({
      title: "Proceed to checkout?",
      text: "please wait a moment!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
       Swal.fire("Success!", "Your order has been successfully processed!", "success");
       
       router.push('/checkout');

       setCartItems([]);
      }

    });
  }

  return (
    <AuthGuard>
    <div className="container mx-auto p-4">
      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 w-[1200px] ml-36 mt-36">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2 text-left">Product</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Quantity</th>
              <th className="border border-gray-300 p-2">Total</th>
              <th className="border border-gray-300 p-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item._id} className="text-center">
                <td className="border border-gray-300 p-2 text-left flex items-center gap-2">
                 {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.name}
                    className="w-12 h-12 rounded"
                    width={1000}
                    height={1000}
                  />
                ) }
                  {item.name}
                </td>
                <td className="border border-gray-300 p-2">${item.price}</td>
                <td className="border border-gray-300 p-2">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-2 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    {item.inventory}
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-2 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 p-2">
                  ${item.price * item.inventory}
                </td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="text-red-500"
                  >
                    ×
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 absolute top-[780px] ml-36 w-[1200px] ">
        {/* Coupon Code Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Coupon Code</h3>
          <p className="text-sm text-gray-500 mb-4">
            Enter your coupon code to get discounts.
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter your code"
              className="border p-2 flex-grow rounded"
            />
            <button className="bg-orange-500 text-white py-2 px-4 rounded">
              Apply
            </button>
          </div>
        </div>

        {/* Total Bill Section */}
        <div className="bg-gray-50 p-4 rounded shadow w-[600px]">
          <h3 className="font-bold text-lg mb-4">Total Bill</h3>
          <div className="flex justify-between mb-2">
            <span>Cart Subtotal</span>
            <span>${calculateTotal()}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping Charge</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total Amount</span>
            <span>${calculateTotal()}</span>
          </div>
          <button className="bg-orange-500 text-white w-full mt-4 py-2 rounded"
          onClick={handleProceed}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
    </AuthGuard>
  );
}

export default ShippingCart;
