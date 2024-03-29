import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import base_url from "../../../api";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export function LogInForm() {
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState({});

  const handleForm = (e) => {
    postToServer(userdata);
    e.preventDefault();
  };

  const postToServer = async (data) => {
    try {
      const response = await axios.post(`${base_url}/auth/login`, data);
  
      toast.success('Login Success', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  
      Cookies.set("jwtToken", response.data.jwtToken);
      Cookies.set("user", response.data.username);
  
      await new Promise((resolve) => setTimeout(resolve, 2000));
  
      navigate("/");
    } catch (err) {
      toast.error("Error Occurred");
    }
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
      <div className="flex justify-center items-center">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Log In
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Welcome Back !!
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-3">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => {
                  setUserdata({ ...userdata, email: e.target.value });
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => {
                  setUserdata({ ...userdata, password: e.target.value });
                }}
              />
            </div>

            <Button className="mt-6" fullWidth onClick={handleForm}>
              Log In
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Not have an account?{" "}
              <a href="/signup" className="font-medium text-gray-900">
                Sign Up
              </a>
            </Typography>
          </form>
        </Card>
      </div>
    </>
  );
}
export default LogInForm;
