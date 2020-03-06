import axios from 'axios'

import { GET_ITEMS_URL } from './constants'

export const getItems = () => axios.get(GET_ITEMS_URL).then(({ data }) => data)
