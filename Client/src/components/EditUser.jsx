import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from "@mui/material";
import { useState ,useEffect} from "react";
import { editUser, getUser } from '../service/api';
import {useNavigate, useParams } from 'react-router-dom';


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


const EditUser = () => {
    
    const [user, setUser] = useState(defaultValue);

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        loadUserDetails();
    },[])

    const loadUserDetails = async ()=>{

        const response = await getUser(id);
        // console.log(response);
        setUser(response.data);
    }
 

    const editUserDetails = async() => {
    
       await editUser(user,id);  // here we  used async and await b/c addUser is await
       alert("user updated successfully");
        navigate('/all');  // used to display  the all users page after submitting the page
    }




    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    // here we can create individual functions for different fields but to avoid lenthy code we use name attribute to differentiate fields. 
    return (
        <Container>
            <Typography variant="h4">Edit User</Typography>
            {/* form control works as a div so that we can use css or other operations */}
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input required onChange={(e) => onValueChange(e)} name="name" value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input required onChange={(e) => onValueChange(e)} name="username" value={user.username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input required onChange={(e) => onValueChange(e)} name="email" value={user.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input required onChange={(e) => onValueChange(e)} name="phone" value={user.phone} />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => editUserDetails()}>EDIT USER</Button>
            </FormControl>

        </Container>
    )
}
export default EditUser;