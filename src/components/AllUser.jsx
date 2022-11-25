import { Table, TableRow, TableCell, TableHead, TableBody, styled, Button } from "@mui/material"
import { getUsers, deleteUser } from "../services/api"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'


const StyledTable = styled(Table)`
  width: 90%;
  margin : 5px auto 0; 
`
const StyledTableRowHead = styled(TableRow)`
  background: #111111;
  & > th {
    color: #fff;
  }
`
const StyledTableRowBody = styled(TableRow)`
  & > td {
    font-size : 15px;
  }
`

const AllUser = () => {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    getAllUsers()
  }, [])

  const getAllUsers = async () => {
    let response = await getUsers()
    setUsers(response.data)
  }

const deleteUserOne = async (id) => {
  await deleteUser(id)
  getAllUsers()
}


  return (
    <>
    <div align="right" >
    <Button variant="contained" style={{marginTop: 40, marginRight: 80}} component={Link} to={`/add`}>Add User</Button>
    </div>
    <StyledTable>
      <TableHead>
        <StyledTableRowHead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>User Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Action</TableCell>
        </StyledTableRowHead>
      </TableHead>
      <TableBody>
        {
          users.map(user => (
            <StyledTableRowBody key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.user_name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant='contained' style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                <Button variant='contained' color='secondary' onClick={() => deleteUserOne(user._id)}>Delete</Button>
              </TableCell>
            </StyledTableRowBody>
          ))
        }
      </TableBody>
    </StyledTable>
    </>
  )
}

export default AllUser

