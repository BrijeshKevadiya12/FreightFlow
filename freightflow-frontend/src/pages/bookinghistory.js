
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import base_url from "../api";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { CardDefault } from "../components/Card/BookingHistoryCard";
import { Button } from "@material-tailwind/react";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const sortByDate = useCallback( async() =>{
    if (!Cookies.get("user")) {
      toast.warn("Login Requires !");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      navigate("/login");
    } else {
      const user = Cookies.get("user");
      const authToken = Cookies.get("jwtToken");
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };
      try {
        const response = await axios.get(`${base_url}/booking/sortbydate/${user}`, { headers });
        setBookings(response.data);
      } catch (error) {
        toast.error("Error fetching bookings. Please try again later.");
      }
    }
  },[navigate])

  const fetchBookings = useCallback(async () => {
    if (!Cookies.get("user")) {
      toast.warn("Login Requires !");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      navigate("/login");
    } else {
      const user = Cookies.get("user");
      const authToken = Cookies.get("jwtToken");
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };
      try {
        const response = await axios.get(`${base_url}/booking/${user}`, { headers });
        setBookings(response.data);
      } catch (error) {
        toast.error("Error fetching bookings. Please try again later.");
      }
    }
  }, [navigate]);

  const handleDelete = async (deletedBookingId) => {
    if (!Cookies.get("user")) {
      toast.warn("Login Requires!");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      navigate("/login");
    } else {
      const authToken = Cookies.get("jwtToken");
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };

      try {
        await axios.put(`${base_url}/booking/delete/${deletedBookingId}`, null, { headers });
        setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== deletedBookingId));
        toast.error("Booking Deleted!");
      } catch (error) {
        toast.warn("Error Occurred");
      }
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

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
      <div className="text-center bg-black text-white m-4 p-2 rounded-md text-4xl">Booking History</div>
      <div className="bg-black text-white flex flex-row m-4 p-3 gap-x-36 shadow-lg rounded-md">
        <div>Booking Id</div>
        <div>Shipment Country</div>
        <div>Destination Country</div>
        <div>Booking Date</div>
        <div>About Product</div>
      </div>
      <div className="ml-4">
        <Button onClick={sortByDate}>Sort By Booking Date</Button>
      </div>
      <div className="p-2">
        {bookings.map((booking) => (
          <div key={booking.id} className="flex flex-col gap-y-4">
            <CardDefault
              bookingid={booking.id}
              shipmentCountry={booking.shipmentCountry}
              destinationCountry={booking.destinationCountry}
              bookingDate={booking.bookingDate?.substring(0, 10)}
              aboutProduct={booking.aboutProduct}
              onDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default React.memo(BookingHistory);
