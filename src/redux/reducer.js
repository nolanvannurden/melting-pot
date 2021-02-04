import axios from 'axios';


const initialState = {
	user: {},
	isLoggedIn: false
}

const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
const GET_USER = "GET_USER";

export function loginUser(user){
	return {
			type: LOGIN_USER,
			payload: user
	}
}

//Map data from within input fields to pass onto each component

export const logoutUser = () => (
	{
			type: LOGOUT_USER,
			payload: {initialState}
	}
)

export function getUser(){
	const user = axios.get('/api/user').then(res => res.data)
	return {
		type: GET_USER,
		payload: user
	}
}

export default function reducer(state = initialState, action){
	console.log(action)
	switch(action.type){
			case LOGIN_USER:
					return {...state, user: action.payload, isLoggedIn: true}
			case LOGOUT_USER:
					return {...state, ...action.payload}
			case GET_USER + "_PENDING":
				return state
			case GET_USER + "_FULFILLED":
				return {...state, user: action.payload, isLoggedIn: true}
			case GET_USER + "_REJECTED":
				return initialState
			default:
					return state
	}
}