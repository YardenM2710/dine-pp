const Axios = require('axios')
// import Axios from 'axios'
var axios = Axios.create({ withCredentials: true })
const STORAGE_KEY = 'userDB'

export const userService = {
  login,
  logout,
  getLoggedinUser,
  signup,
}

function _getUrl(id = '') {
  const BASE_URL =
    process.env.NODE_ENV !== 'development'
      ? '/api/auth'
      : '//localhost:3030/api/auth'
  return `${BASE_URL}/${id}`
}

window.userService = userService

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY))
}

async function login(user) {
  // TODO: use axios
  console.log(user)
  try {
    sessionStorage.setItem('userDB', JSON.stringify(user))
    const loggedInUser = await axios.post(_getUrl('login'), user)
    return loggedInUser.data
  } catch (err) {
    console.log(err)
  }
}

async function logout() {
  try {
    // sessionStorage.removeItem('userDB', JSON.stringify(loggedInUser.data))
    return await axios.post(_getUrl('logout'))
  } catch (err) {
    console.log(err)
  }
}

async function signup(user) {
  console.log(user)
  try {
    const loggedInUser = await axios.post(_getUrl('signup'), user)
    sessionStorage.setItem('userDB', JSON.stringify(loggedInUser.data))
    return loggedInUser.data
  } catch (err) {
    console.log('Logged in has failed, try again', err)
  }
}
