import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from "@mui/material";
import { useState } from "react";
import { addUser } from '../service/api';
import {useNavigate } from 'react-router-dom';


const Container = styled(FormGroup)`
    width:30%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top:20px;
     
    }
`

const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
} 


const AddUser = () => {
    
    const [user, setUser] = useState(defaultValue);

    const navigate = useNavigate();


    const addUserDetails = async() => {
    
       await addUser(user);  // here we  used async and await b/c addUser is await
       alert("user added successfully");
        navigate('/all');  // used to display  the all users page after submitting the page
    }




    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    // here we can create individual functions for different fields but to avoid lenthy code we use name attribute to differentiate fields. 
    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            {/* form control works as a div so that we can use css or other operations */}
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input required onChange={(e) => onValueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input required onChange={(e) => onValueChange(e)} name="username" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input required onChange={(e) => onValueChange(e)} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input required onChange={(e) => onValueChange(e)} name="phone" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>

        </Container>
    )
}
export default AddUser;