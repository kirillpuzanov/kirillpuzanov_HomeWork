import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/',
})

type ResponseHW13Type = {
    errorText:string
    info: string
    yourBody:{success:boolean}
}

export const HW13_request = (value:boolean) => {
    return instance.post<ResponseHW13Type>('test', {success: value})
}