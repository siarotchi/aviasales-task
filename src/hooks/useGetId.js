import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useGetId() {
    const [searchId, setId] = useState([])

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://front-test.beta.aviasales.ru/search',
        }).then((res) => {
            setId(res.data.searchId)
        })
    }, [])
    return { searchId }
}
