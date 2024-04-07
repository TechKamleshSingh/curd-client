import axios from 'axios'

// const URL = 'http://localhost:8000';
const URL = 'https://crud-test-server.vercel.app';


export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data)
    } catch (error) {
        console.log('Error while calling add user api', error)
    }
}

export const getUsers = async () => {
    try {
        return await axios.get( `${URL}/all`)
    } catch (error) {
        console.log('Error while calling get all users api', error)
    }
}

export const getUser = async (id) => {
    try {
        return await axios.get( `${URL}/${id}`)
    } catch (error) {
        console.log('Error while calling edit user api', error)
    }
}

export const editUser = async (user, id) => {
    try{
        return await axios.put(`${URL}/${id}`, user)
    }catch (error){
        console.log('Error while calling udate user details api', error)
    }

}

export const deleteUser = async (id) => {
    try{
        return await axios.delete(`${URL}/${id}`)
    }catch(err){
        console.log('Error while calling delete User api', err)
    }
}