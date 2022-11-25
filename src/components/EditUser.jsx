import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { editUser, getUser } from "../services/api";

const Container = styled(FormGroup)`
  width: 50%;  
  margin: 5% auto 0;
  & > div {
    margin-top : 20px
  }
`;


const EditUser = () => {  
  const defaultData = {
    name : '',
    user_name : '',
    email : '',
    phone : ''
  }

  const navigate = useNavigate()
  const { id } = useParams();

  useEffect(() => {
    loadUserDetails()
  }, [])

  

  const [user, setUser] = useState(defaultData);
  const Value = (e) =>{
    setUser({...user, [e.target.name] : e.target.value})
    console.log(user)
  }

  const loadUserDetails = async () => {
    const response = await getUser(id)
    setUser(response.data)
  }
  
  

  const editUserDetails = async () => {
    await editUser(user, id)
    navigate('/all')
  }
    

  return (
    <Container>
      <Typography variant='h4' >Update User Details</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={ (e) => Value(e)} name="name" value={user.name} />
      </FormControl>
      <FormControl>
        <InputLabel>User Name</InputLabel>
        <Input onChange={ (e) => Value(e)} name="user_name" value={user.user_name}/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={ (e) => Value(e)} name="email" value={user.email}/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={ (e) => Value(e)} name="phone" value={user.phone}/>
      </FormControl>
      <FormControl>
        <Button variant='contained' onClick={(e) => editUserDetails(e)} > Update User </Button>
      </FormControl>
    </Container>
    
  )
}

export default EditUser