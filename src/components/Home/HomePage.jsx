import React, { useState,useEffect } from "react";
import { Box, Typography, styled, TextField, Button } from "@mui/material";
import { useUserAuth } from "../../context/UserAuthContext.js";
import { useNavigate,Link} from "react-router-dom";
import { bookAppointment } from "../service/ServiceApi.js";
import { useParams } from "react-router-dom";

// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader'


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


const HomePage = ({ setUserLog }) => {
  const { signUp } = useUserAuth();
  const {username}=useParams()
  const nav = useNavigate();
  let userSignupDetail = {
    title: "",
    agenda: "",
    time: "",
    user:"",
    
    
  };






  const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];
  const [date, setDate] = useState(null)
  const [email, setEmail] = useState()
  const { user,changeEmail } = useUserAuth();

  const [userDetail, setUserDetail] = useState(userSignupDetail);

  const handleOnChange = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };

  const handleOnChanges = (e) => {
    setEmail({ email, [e.target.name]: e.target.value });
  };
  
  const changeLog = () => {
    setUserLog("login");
  };
  console.log(userDetail)
  
//  const [selects,setSelects]=useState();




  const book = async () => {
    try {
      await bookAppointment(userDetail);
      alert('appointment booked')
    } catch (error) {
      console.log(error.message);
    }
  };

 
  return (
    <>
        <SignUpBox>
      <Text>Add Appointment</Text>
      <InputField>
        <Field
          required
          id="filled-search"
          label="Title"
          type="search"
          variant="filled"
          name="title"
          InputLabelProps={{
            style: { color: "#8c8c8c", fontFamily: '"Rubik", sans-serif' },
          }}
          inputProps={{
            sx: { color: "#fff", fontFamily: '"Rubik", sans-serif' },
          }}
          onChange={handleOnChange}
          sx={{
            ".css-19mk8g1-MuiInputBase-root-MuiFilledInput-root::after": {
              borderBottom: " 2px solid #e50914",
              borderBottomRightRadius: 4,
              borderBottomLeftRadius: 4,
            },
          }}
        />
        <Field
          required
          id="filled-search"
          label="Agenda"
          type="search"
          variant="filled"
          name="agenda"
          InputLabelProps={{
            style: { color: "#8c8c8c", fontFamily: '"Rubik", sans-serif' },
          }}
          inputProps={{
            sx: { color: "#fff", fontFamily: '"Rubik", sans-serif' },
          }}
          onChange={handleOnChange}
          sx={{
            ".css-19mk8g1-MuiInputBase-root-MuiFilledInput-root::after": {
              borderBottom: " 2px solid #e50914",
              borderBottomRightRadius: 4,
              borderBottomLeftRadius: 4,
            },
          }}
        />

          <Field
        id="datetime-local"
        label="Appointment time"
        type="datetime-local"
        name="time"
        onChange={handleOnChange}
        defaultValue="2022-09-18T10:30"
        sx={{ width: 250,".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":{color:'#8c8c8c'},}}
        InputLabelProps={{
          shrink: true,
        }}

      />
      </InputField>
      {/* <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {[0, 1, 2, 3, 4].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
            {[0, 1, 2].map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List> */}
  
{/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />; */}

<div>

  
  <Si  onChange={handleOnChange} name="user" >
    <option>Mr.Anand</option>
    <option>Mrs.Ruchi</option>
    <option>Mr.Aman</option>
    <option>Mr.Suresh</option>
  </Si>
</div>




      
      <ActionButton variant="contained" onClick={() => book()}>
        Book
      </ActionButton>
      <Link to={`/${username}/forgotPassword`}>
      <ActionButton style={{marginTop:20}} variant="contained" >
        Change Password
      </ActionButton>
      </Link>
      <Link to={`/${username}/profile`}>
      <ActionButton style={{marginTop:20}} variant="contained" onClick={() => book()}>
      
        Upcoming appointment
      </ActionButton></Link>
      
    </SignUpBox>
    </>
  );
};

export default HomePage;























