import { Table, TableCell, TableHead, TableRow, TableBody, Button } from "@mui/material";
import { getUsers ,deleteUser} from '../service/api';
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";


const StyledTable = styled(Table)`

  width: 90%;
  margin:50px auto 0 auto;
`
const THead = styled(TableRow) `
  background-color:black;
  & > th {

    color: #fff;
    font-size:20px;
  }
}

`
const TBody = styled(TableRow)`
  & > td {
    font-size:20px;
  }
`
const AllUser = () => {

  const [users, setUsers] = useState([]);


  useEffect(() => {

    getAllUsers();

  }, []);

  // ------------------- RENDRING THE USER ---------------------------------
  
  const getAllUsers = async () => {

    const response = await getUsers();
    
      setUsers(response.data);

   
    
  }

  // ---------------------- DELETING THE USER ------------------------
  const deleteUserDetails = async (id)=>{
      await deleteUser(id);
      getAllUsers();
  }

  

  return (
    // <Table>
    <StyledTable>
      
      <TableHead>
      <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
        </THead>
      </TableHead>

      <TableBody>
        {
          users.map(e => (
            <TBody key={e._id}>
              <TableCell>{e._id}</TableCell>
              <TableCell>{e.name}</TableCell>
              <TableCell>{e.username}</TableCell>
              <TableCell>{e.email}</TableCell>
              <TableCell>{e.phone}</TableCell>
              <TableCell>
                <Button variant="contained" style={{marginRight:10}} component = {Link} to = {`/edit/${e._id}`} >Edit</Button>
                <Button variant="contained" color="secondary" onClick={()=> deleteUserDetails(e._id)}>Delete</Button>
              </TableCell> 
            </TBody>
          ))
        }
      </TableBody>
      </StyledTable> 
    // </Table> 

  )
}

export default AllUser;