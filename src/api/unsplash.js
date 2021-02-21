import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:
    {Authorization: 'Client-ID -6x8_4JLV-PpR0QN3UaMT8P3qNa0sserH2UjiJIpALM'}
})