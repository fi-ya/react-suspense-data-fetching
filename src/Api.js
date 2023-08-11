import axios from "axios";

const fetchUser = () => {
    console.log('Fetching User...')
    return axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => console.log(`Error:${err}`))
}

const fetchPosts = () => {
    console.log('Fetching Posts....')
    return axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(res => res.data)
        .catch(err => console.log(`Error: ${err}`))
}