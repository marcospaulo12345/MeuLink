
/// minha chave: 6cfbee3b2a7db2ea3e61f292ccf90f4f4b4535ef

import axios from 'axios';

export const key = '6cfbee3b2a7db2ea3e61f292ccf90f4f4b4535ef';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;