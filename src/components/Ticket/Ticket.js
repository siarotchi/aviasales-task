import React, { Component } from 'react'
import s from './Ticket.module.css'

export class Ticket extends Component {
    constructor(props) {
        super(props)
        this.stopsWordForm = this.stopsWordForm.bind(this)
        this.calculateDuration = this.calculateDuration.bind(this)
    }
    stopsWordForm = (number) => {
        const lastCharacter = number.toString().slice(-1)
        if (lastCharacter === '1') {
            return 'Stop'
        } else if (lastCharacter === '2' || lastCharacter === '3') {
            return 'Stops'
        } else {
            return 'Stops'
        }
    }

    calculateDuration = (number) => {
        const minutes = number % 60
        const hours = (number - minutes) / 60

        return `${hours}h ${minutes}m`
    }
    
    render() {
        const ticket = this.props.ticket
        const date = new Date(ticket.segments[0].date)
        const date2 = new Date(ticket.segments[1].date)
        const copieDate  = new Date(date.getTime());
        const copieDate2  = new Date(date2.getTime());
        const arrivalTime = new Date(copieDate.setMinutes(copieDate.getMinutes() + ticket.segments[0].duration))
        const arrivalTime2 = new Date(copieDate2.setMinutes(copieDate2.getMinutes() + ticket.segments[1].duration))
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
          };

        return (
            <div
                className="container mt-5"
                //  key={`${index}_${ticket.price}`}
            >
            <hr></hr>
                <div className="row">
                    <div className="col-12-xl d-flex flex-column">
                        <div className="logo d-flex flex-row justify-content-between mb-2">
                            <h3 className={s.price}>{`${ticket.price} P`}</h3>
                            <img
                                className="carrier-image"
                                src={`//pics.avs.io/110/36/${ticket.carrier}.png`}
                                alt={ticket.carrier}
                            />
                        </div>

                        <div className="d-flex flex-row justify-content-between">
                            <div className={s.block}>
                                <p className={s.greyText}>
                                    {`${ticket.segments[0].origin} - ${ticket.segments[0].destination}`}
                                </p>
                                <p className={s.blackText}>
                                {date.toLocaleString('en-US', options)} - 
                                {` ${arrivalTime.toLocaleString('en-US', options)}`}                                  
                                </p>

                                <hr />
                                <p className={s.greyText}>{`${ticket.segments[1].origin} -  
                                ${ticket.segments[1].destination}`}</p>

                                <p className={s.blackText}>
                                {date2.toLocaleString('en-US', options)} - 
                                {` ${arrivalTime2.toLocaleString('en-US', options)}`}  
                                </p>
                            </div>

                            <div className={s.block}>
                                <p className={s.greyText}>Time on the road</p>
                                <p className={s.blackText}>{this.calculateDuration(ticket.segments[0].duration)}</p>
                                <hr />
                                <p className={s.greyText}>Time on the road</p>
                                <p className={s.blackText}>{this.calculateDuration(ticket.segments[1].duration)}</p>
                            </div>

                            <div className={s.block}>
                                <p className={s.greyText}>
                                    {ticket.segments[0].stops.length +
                                        ' ' +
                                        this.stopsWordForm(ticket.segments[0].stops.length)}
                                </p>
                                <p className={s.blackText}>
                                    {ticket.segments[0].stops.length ? ticket.segments[0].stops.join(', ') : '-'}
                                </p>
                                <hr />
                                <p className={s.greyText}>
                                    {ticket.segments[1].stops.length +
                                        ' ' +
                                        this.stopsWordForm(ticket.segments[1].stops.length)}
                                </p>
                                <p className={s.blackText}>
                                    {ticket.segments[1].stops.length ? ticket.segments[1].stops.join(', ') : '-'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
