import axios from 'axios';

export const readMyInfo=()=>{
    console.log("Read myInfo ");
    axios.get('http://13.125.251.45:3000/v1/memberships/5c91c24c1580b736cf91e9db')
        .then(response =>console.log("then !!!!",response))
        .catch((error)=>console.log("reacMyInfo error : ",error))
};
