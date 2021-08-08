import { useEffect, useState } from 'react'
import axios from 'axios'
import useGetId from './useGetId'

export default function useGetTickets() {
    const [tickets, setTickets] = useState([])
    useGetId()
    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://front-test.beta.aviasales.ru/tickets?searchId=3lx9n`,
        })
            .then((res) => {
                setTickets(res.data.tickets)
            })
            .catch((e) => console.log(e))
    }, [])
    return { tickets }
}
