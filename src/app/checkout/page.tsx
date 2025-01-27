"use client";

import Navbar from "@/components/nav";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Food } from "../../../types/food";
import { getCartItems } from "../actionButton/action";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const Checkout= () => {
  const [cartItems, setCartItems] = useState<Food[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    companyName: "",
    country: "",
    city: "",
    zipCode: "",
    address1: "",
    address2: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    emailAddress: false,
    phoneNumber: false,
    companyName: false,
    country: false,
    city: false,
    zipCode: false,
    address1: false,
    address2: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const allTotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      emailAddress: !formValues.emailAddress,
      phoneNumber: !formValues.phoneNumber,
      companyName: !formValues.companyName,
      country: !formValues.country,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      address1: !formValues.address1,
      address2: !formValues.address2,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      localStorage.removeItem("cartItems");
      localStorage.removeItem("appliedDiscount");


      alert("Order placed successfully!");
    }
  };

  return (
    <div>
      <Navbar />

      {/* Banner */}
      <div className="relative">
        <Image
          src={"/images/dc.png"}
          alt="Banner"
          width={1920}
          height={410}
          className="w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl font-bold">Our Blog</h1>
          <h2 className="text-lg">
            Home &gt; <span className="font-semibold">Blog</span>
          </h2>
        </div>
      </div>

      {/* Checkout Section */}
      <div className="container mx-auto p-4">
        {/* <h1 className="text-2xl font-bold mb-6">Checkout</h1> */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 ml-28 mt-20 -mt-64">
          {/* Shipping and Billing Form */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-4 ">Shipping Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        
                <div className="flex flex-col">
                  <label
                    htmlFor='firstname'
                  >
                   First name
                  </label>
                  <input

                   type="text"
                    id="firstName"
                    placeholder="Enter Your First Name"
                    value={formValues.firstName}
                    onChange={handleInputChange}
                   />
                    {formErrors.firstName && (
                        <p className="text-red-500 text-xs mt-1">
                          First name is required
                        </p>
                    )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor='lastName'
                    className="text-sm font-semibold mb-1"
                  >
                   Last name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Enter Your Last Name"
                    value={formValues.lastName}
                    onChange={handleInputChange}
/>
{formErrors.lastName && (
                        <p className="text-red-500 text-xs mt-1">
                          Last name is required
                        </p>
                    )}
                </div>

                <div className="-mt-14">
                  <label
                    htmlFor='emailAddress'
                    className="text-sm font-semibold mb-1"
                  >
                   Email Address
                  </label>
                  <br/>
                  <input
                    id="emailAddress"
                    type="text"
                    placeholder="Enter Your Email address"
                    value={formValues.emailAddress}
                    onChange={handleInputChange}
/>
{formErrors.emailAddress && (
                        <p className="text-red-500 text-xs mt-1">
                          Email address is required
                        </p>
                    )}
                </div>
                <div className="flex flex-col -mt-14">
                  <label
                    htmlFor='phoneNumber'
                    className="text-sm font-semibold mb-1"
                  >
                   Phone number
                  </label>
                  <input
                    id="phoneNumber"
                    type="text"
                    placeholder="Enter Your Phone number"
                    value={formValues.phoneNumber}
                    onChange={handleInputChange}
/>
{formErrors.phoneNumber && (
                        <p className="text-red-500 text-xs mt-1">
                        Phone number  is required
                        </p>
                    )}
                </div>
                <div className=" -mt-14">
                <label
                    htmlFor='companyName'
                    className="text-sm font-semibold mb-1"
                  >
                 Company
                  </label>
                  <br/>
                  <input
                    id="companyName"
                    type="text"
                    placeholder="Enter Your Company name"
                    value={formValues.companyName}
                    onChange={handleInputChange}
/>
{formErrors.companyName && (
                        <p className="text-red-500 text-xs mt-1">
                          Company name is required
                        </p>
                    )}
                </div>
                <div className="flex flex-col -mt-14">
                <label
                    htmlFor='country'
                    className="text-sm font-semibold mb-1"
                  >
             Country
                  </label>
                  <input
                    id="country"
                    type="text"
                    placeholder="Enter Your Country name"
                    value={formValues.country}
                    onChange={handleInputChange}
/>
{formErrors.country && (
                        <p className="text-red-500 text-xs mt-1">
                         Country name is required
                        </p>
                    )}
                </div>

                <div className=" -mt-14">
                <label
                    htmlFor='city'
                    className="text-sm font-semibold mb-1"
                  >
                 City
                  </label>
                  <br/>
                  <input
                    id="city"
                    type="text"
                    placeholder="Enter Your City name"
                    value={formValues.city}
                    onChange={handleInputChange}
/>
{formErrors.city && (
                        <p className="text-red-500 text-xs mt-1">
                          City name is required
                        </p>
                    )}
                </div>
                <div className="flex flex-col -mt-14">
                <label
                    htmlFor='zipCode'
                    className="text-sm font-semibold mb-1"
                  >
           Zip Code
                  </label>
                  <input
                    id="zipCode"
                    type="text"
                    placeholder="Enter Your Zip Code"
                    value={formValues.zipCode}
                    onChange={handleInputChange}
/>
{formErrors.zipCode && (
                        <p className="text-red-500 text-xs mt-1">
                         Zip Code is required
                        </p>
                    )}
                </div>

                <div className=" -mt-14">
                <label
                    htmlFor='address1'
                    className="text-sm font-semibold mb-1"
                  >
                 Address 1
                  </label>
                  <br/>
                  <input
                    id="address1"
                    type="text"
                    placeholder="Enter Your Address"
                    value={formValues.address1}
                    onChange={handleInputChange}
/>
{formErrors.address1 && (
                        <p className="text-red-500 text-xs mt-1">
                     Address is required
                        </p>
                    )}
                </div>
                <div className="flex flex-col -mt-14">
                <label
                    htmlFor='address2'
                    className="text-sm font-semibold mb-1"
                  >
             Address 2
                  </label>
                  <input
                    id="address2"
                    type="text"
                    placeholder="Enter Your Address"
                    value={formValues.address2}
                    onChange={handleInputChange}
/>
{formErrors.address2 && (
                        <p className="text-red-500 text-xs mt-1">
                         Address is required
                        </p>
                    )}
                </div>

            </div>
        </div>
          

            <div className="flex items-center mt-[560px] ">
             <div>
                <h1 className="-ml-[610px] -mt-12 text-2xl font-medium">Billing Address</h1>
             </div>
              <input
                type="checkbox"
                id="sameAsShipping"
                className="-ml-[610px]"
              />
              <label htmlFor="sameAsShipping">Same as shipping address</label>
            </div>

            <div className="flex justify-between mt-6">
          <Link href={'/blogs'}> <button className="px-4 py-2 bg-gray-200 rounded-lg">
                Back to Cart
              </button> </Link>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg ml-3">
                Proceed to Shipping
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="-ml-72 w-80">
            <h2 className="text-xl font-bold mb-4 ">Order Summary</h2>
            <div className="space-y-4">
              { cartItems.length > 0 ? (
              
              cartItems.map((item) => (
                <div key={item._id} className="flex items-center">
                    {item.image &&
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                    }
                  <div className="ml-4">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      {item.price} x {item.inventory}
                    </p>
                  </div>
                </div>
              ))):(
                <p> no items our empty</p>
              )}
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${allTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount:</span>
                <span>${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span>${(allTotal * 0.05).toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>
                  ${(allTotal - discount + allTotal * 0.05).toFixed(2)}
                </span>
              </div>
            </div>

            <button
              className="w-full bg-green-500 text-white py-2 mt-4 rounded-lg"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
   
  );
}

export default Checkout;
