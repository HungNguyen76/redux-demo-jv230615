import axios from 'axios'

export default {
    findPostAll: () => {
        return axios.get(import.meta.env.VITE_API_URL + "/posts")
    },
    findPostById: (postId) => {
        return axios.get(import.meta.env.VITE_API_URL + "/posts/" + postId)
    },
    //deleteById
    deleteById: (postId) => {
        return axios.delete(import.meta.env.VITE_API_URL + "/posts/" + postId)
    },

    //updateById
    updateById: (postId, postEdited) => {
        return axios.put(import.meta.env.VITE_API_URL + "/posts/" + postId, postEdited)
    }
}