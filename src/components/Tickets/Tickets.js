import * as React from 'react'
import useGetTickets from '../../hooks/useGetTickets'
import s from './Tickets.module.css'
import { Ticket } from '../Ticket/Ticket'
import Tabs from '../Tabs/Tabs'

export const Tickets = () => {
    const { tickets } = useGetTickets()

    return (
        <div className="row mr-auto">
            <div className="col-md">
                <Tabs />
                {/* <div className={s.tabs}>
                    <button
                        type="button"
                        className="btn btn-outline-primary btn-lg "
                    >
                        the cheapest
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-primary btn-lg "
                    >
                        the fastest
                    </button>
                </div> */}
                {tickets.length
                    ? tickets.map((ticket, index) => <Ticket ticket={ticket} key={'_ticket_' + index} />)
                    : null}
            </div>
        </div>
    )
}
