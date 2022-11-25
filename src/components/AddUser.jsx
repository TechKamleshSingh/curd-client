import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button,  } from "@mui/material"
import { useState } from "react"
import { addUser } from "../services/api"
import { useNavigate } from 'react-router-dom'

const Container = styled(FormGroup)`
  width: 50%;  
  margin: 5% auto 0;
  & > div {
    margin-top : 20px
  }
`;

const AddUser = () => {  
  
  const defaultData = {
    name : '',
    user_name : '',
    email : '',
    phone : ''
  }

  const navigate = useNavigate()

  const [user, setUser] = useState(defaultData);
  const Value = (e) =>{
    setUser({...user, [e.target.name] : e.target.value})
    console.log(user)
  }
  const userData = async () => {
    await addUser(user)
    navigate('/all')
  }

  

  return (
    <Container>
      <Typography variant='h4' >Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input color="secondary" onChange={ (e) => Value(e)} name="name"/>
      </FormControl>
      <FormControl>
        <InputLabel>User Name</InputLabel>
        <Input color="secondary" onChange={ (e) => Value(e)} name="user_name"/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={ (e) => Value(e)} name="email"/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={ (e) => Value(e)} name="phone"/>
      </FormControl>
      <FormControl>
        <Button variant='contained' onClick={(e) => userData(e)} > Add User </Button>
      </FormControl>
    </Container>
    
  )
}

export default AddUser