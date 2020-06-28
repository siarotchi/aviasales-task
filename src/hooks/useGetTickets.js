import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useGetTickets() {
    const [tickets, setTickets] = useState([])

    // useEffect(() => {
    //     axios({
    //         method: 'GET',
    //         url: `https://front-test.beta.aviasales.ru/search`,
    //     })
    //         .then((res) => {
    //             axios.get(
    //                 `https://front-test.beta.aviasales.ru/tickets?searchId=${res.data.searchId}`
    //             )
    //         })
    //         .then((res) => {
    //             setTickets(res.data.tickets).catch((e) => console.log(e))
    //         }, [])
    //     return { tickets }
    // })
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://front-test.beta.aviasales.ru/tickets?searchId=3ehtu',
        })
            .then((res) => {
                setTickets(res.data.tickets)
                // console.log(res.data);
            })
            .catch((e) => console.log(e))
    }, [])
    return { tickets }
}
