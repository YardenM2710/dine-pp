import { renderSync } from 'sass'

const Axios = require('axios')
// import Axios from 'axios'
var axios = Axios.create({ withCredentials: true })

const KEY = 'toysDB'

export const toyService = {
  query,
  getById,
  deleteToy,
  save,
  getEmptyToy,
}

function _getUrl(id = '') {
  const BASE_URL =
    process.env.NODE_ENV !== 'development'
      ? '/api/toy'
      : '//localhost:3030/api/toy'
  return `${BASE_URL}/${id}`
}

async function query(filterBy) {
  try {
    const toys = await axios.get(_getUrl(), { params: filterBy })
    return toys.data
  } catch (err) {
    console.log(err)
  }
}

async function getById(toyId) {
  try {
    const res = await axios.get(_getUrl(toyId), toyId)
    console.log(res)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

async function deleteToy(toyId) {
  try {
    const res = await axios.delete(_getUrl(toyId))
    return res.data
  } catch (err) {
    console.log(err)
  }
}

async function save(toy) {
  try {
    if (!toy._id) {
      console.log('TOY', toy)
      const addedToy = await addToy(toy)
      return addedToy
    } else {
      const updatedToy = await updateToy(toy)
      return updatedToy
    }
  } catch (err) {
    console.log(err)
  }
  // const savedToy = toy._id ? updateToy(toy) : addToy(toy)
  // return savedToy
}

async function updateToy(updateToy) {
  try {
    const res = await axios.put(_getUrl(updateToy._id), updateToy)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

async function addToy(toy) {
  try {
    const res = await axios.post(_getUrl(), toy)
    console.log(res.data)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

function getEmptyToy() {
  return {
    name: '',
    price: null,
    labels: [],
    createdAt: null,
    inStock: null,
    url: 'imgs/woodi.png',
  }
}
