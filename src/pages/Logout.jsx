import axios from "../utils/AxiosInstance";
import React, { useEffect } from "react";
import { userLogout } from "../utils/Endpoint";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/AuthSlicer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(userLogout)
      .then((res) => {
        dispatch(logout());
        //  toast.success("Successfully Logout");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div>Logout</div>;
};

export default Logout;
