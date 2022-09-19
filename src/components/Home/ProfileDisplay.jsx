import React, { useState,useEffect } from "react";
import { Box, Typography, styled, TextField, Button } from "@mui/material";
import { useUserAuth } from "../../context/UserAuthContext.js";
import { useNavigate} from "react-router-dom";
import { bookAppointment } from "../service/ServiceApi.js";
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getProfileData
} from "../../redux/action/ReviewAction";

import DtPicker from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/index.css'


const ActionButton = styled(Button)({
  width: "100%",
  background: " #e50914",
  color: "#fff",
  fontSize: 15,
  textTransform: "none",
  fontFamily: '"Rubik", sans-serif',
  "&:hover": {
    background: " #e50914",
  },
});
const Text = styled(Typography)`
  font-size: 32px;
  margin-bottom: 30px;
  font-weight: 600px;
  font-family: "Rubik", sans-serif;
`;
const SignUpBox = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: '50%',
  left: '50%',
  width: '30vw',
  transform: 'translate(-50%, -50%)',
  background: 'rgba(0, 0, 0, 0.75)',
  padding: '60px 68px 40px',
  zIndex: '2',
  [theme.breakpoints.down('sm')]: {
    width: '85vw',
    height:'auto'
  }
}))

const MainBox = styled(Box)(({ theme }) => ({
width:'50vw',
  background: 'rgba(0, 0, 0, 0.75)',
  
}))
const InputField = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const Field = styled(TextField)`
  background: #333;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 4px;
  color: #fff;
`;

const NewUser = styled(Typography)(({ theme }) => ({
  color: "#8c8c8c", 
  fontFamily: '"Rubik", sans-serif',
  textAlign: "center",
  [theme.breakpoints.down('sm')]: {
   fontSize:13
  }
}))

const Sign = styled('span')(({ theme }) => ({
  color: "#fff",
  fontFamily: '"Rubik", sans-serif',
  cursor: "pointer",
  textAlign: "center",
  [theme.breakpoints.down('sm')]: {
   fontSize:13
  }
}))
const Si = styled('Select')(({ theme }) => ({
  color: "black",
  marginBottom:20,
  fontFamily: '"Rubik", sans-serif',
  cursor: "pointer",
  textAlign: "center",
  [theme.breakpoints.down('sm')]: {
   fontSize:13
  }
}))


const ProfileDisplay = ({ setUserLog }) => {
  const { signUp } = useUserAuth();
  const nav = useNavigate();
  let userSignupDetail = {
    username: "",
    agenda: "",
    time: "",
    user:"",
    
    
  };
  const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];
  const [date, setDate] = useState(null)

  const [userDetail, setUserDetail] = useState(userSignupDetail);

  const handleOnChange = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };
  
  const changeLog = () => {
    setUserLog("login");
  };
  console.log(userDetail)
  const {username}=useParams()
//  const [selects,setSelects]=useState();
const dispatch = useDispatch();
const { userReviews } = useSelector((state) => state.Reviews);
useEffect(() => {
  console.log("user",username)
      dispatch(getProfileData(username));
    console.log(userReviews)
     
}, []);


  const book = async () => {
    try {
      await bookAppointment(userDetail);
      alert('appointment check')
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>{
      userReviews?userReviews.map((item)=>(
        <MainBox style={{marginTop:20,marginLeft:200}}>
          
              <>
              <Text>NAME: {username}</Text>
              <Text>AGENDA: {item.agenda}</Text>
              <Text>TIME: {item.time}</Text>
              <Text>USER: {item.user}</Text>
              
              
              </>
     
      
      
    </MainBox>
            )):""
          }
    </>
  );
};

export default ProfileDisplay;























