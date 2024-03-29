import React, { useState } from "react";
import List from "../components/List";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import base_url from "../api";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();
  const [shipmentCountry, setShipmentCountry] = useState("");
  const [destinationCountry, setDestinationCountry] = useState("");
  const [aboutProduct, setAboutProduct] = useState("");

  const handleBooking = async (e)=>{
    e.preventDefault();
    if(!Cookies.get('jwtToken')){
      toast.warn("Login Required !")
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate("/login");
    }
    else{
      const bookingDetails = {
        shipmentCountry: shipmentCountry,
        destinationCountry: destinationCountry,
        aboutProduct: aboutProduct,
        user: Cookies.get("user")
      };
      console.log(bookingDetails)
      postToServer(bookingDetails)
    }
  }

  const postToServer = (data) =>{
    if (Object.values(data).some((value) => value === null || value === undefined || value === "")) {
      toast.warn("Fill in all details");
    }
    else{
      const authToken = Cookies.get("jwtToken")
    const headers = {
      Authorization: `Bearer ${authToken}`,
    };
      axios.post(`${base_url}/booking`, data,{headers}).then((response) => {
        toast.success("Booking Successfull", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        toast.error("Error in Booking");
      });
    }
  }

  const handleShipmentCountryChange = (selectedCountry) => {
    setShipmentCountry(selectedCountry);
  };

  const handleDestinationCountryChange = (selectedCountry) => {
    setDestinationCountry(selectedCountry);
  };
  return (

    <>
    <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="">
        <div className="text-center text-4xl text-white bg-black p-2 m-4 rounded-md">
          Book Consignment
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div className="flex flex-row gap-2">
            <div>Shipment From : </div>
            <div>
              <List
                selectedCountry={shipmentCountry}
                handleCountryChange={handleShipmentCountryChange}
              />
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div>Shipment To : </div>
            <div>
              <List
                selectedCountry={destinationCountry}
                handleCountryChange={handleDestinationCountryChange}
              />
            </div>
          </div>
            <div className="flex flex-row ">
              <div
              >
                About Product :
              </div>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write about your product..."
                onChange={(e) => {
                  setAboutProduct(e.target.value);
                }}
              ></textarea>
            </div>

            <Button onClick={handleBooking}>
              Book
            </Button>
        </div>
      </div>
    </>
  );
};

export default Booking;
