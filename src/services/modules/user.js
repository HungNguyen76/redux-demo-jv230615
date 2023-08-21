import axios from 'axios'

export default {
    findUserAll: () => {
        return axios.get(import.meta.env.VITE_API_URL + "/users")
    }
}