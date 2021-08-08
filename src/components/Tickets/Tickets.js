import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserId, setTickets } from '../../redux/action'
import Tabs from '../Tabs/Tabs'
import { Ticket } from '../Ticket/Ticket'

export const Tickets = () => {

    const dispatch = useDispatch()
    const userId = useSelector((state) => state.userId)
    const tickets = useSelector((state) => state.tickets) /*.slice(0, 5)*/ //for view only 5 tickets

    useEffect(() => {
        fetch(`https://front-test.beta.aviasales.ru/search`)
            .then((res) => res.json())
            .then((data) => dispatch(setUserId(data.searchId)))
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (userId) {
            fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${userId}`)
                .then((res) => res.json())
                .then((data) => dispatch(setTickets(data.tickets)))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId])

    if (!tickets.length) {
        return <div className="mt-2">Loading...</div>
    }

    return (
        <div className="row mr-auto">
            <div className="col-md">
                <Tabs />
                {tickets.map((ticket, index) => (
                    <Ticket ticket={ticket} key={'_ticket_' + index} />
                ))}
            </div>
        </div>
    )
}
