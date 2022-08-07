import axios from 'axios'

const API_URL = `http://localhost:5000`

export default async () => {
  const { data } = await axios.get(`${API_URL}/todos`)
  return data
}
