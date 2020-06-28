import React, { Component } from 'react'
import s from './Ticket.module.css'
import logoS7 from '../../images/S7Logo.png'

export class Ticket extends Component {
    constructor(props) {
        super(props)
        this.stopsWordForm = this.stopsWordForm.bind(this)
        this.calculateDuration = this.calculateDuration.bind(this)
    }
    stopsWordForm = (number) => {
        const lastCharacter = number.toString().slice(-1)
        if (lastCharacter === '1') {
            return 'Пересадка'
        } else if (lastCharacter === '2' || lastCharacter === '3' || lastCharacter === '4') {
            return 'Пересадки'
        } else {
            return 'Пересадок'
        }
    }

    calculateDuration = (number) => {
        const minutes = number % 60
        const hours = (number - minutes) / 60

        return `${hours}ч ${minutes}м`
    }
    render() {
        const ticket = this.props.ticket
        return (
            <div
                className="container mt-5"
                //  key={`${index}_${ticket.price}`}
            >
                <div className="row">
                    <div className="col-12-xl d-flex flex-column">
                        <div className="logo d-flex flex-row justify-content-between mb-2">
                            <h3 className={s.price}>{`${ticket.price} P`}</h3>
                            <img src={logoS7} alt="logo"></img>
                            {/* <img
                                className="carrier-image"
                                src={`//pics.avs.io/110/36/${ticket.carrier}.png`}
                                alt={ticket.carrier}
                            /> */}
                        </div>

                        <div className="d-flex flex-row justify-content-between">
                            <div className={s.block}>
                                <p className={s.greyText}>
                                    {`${ticket.segments[0].origin} -  
                                ${ticket.segments[0].destination}`}
                                </p>
                                <p className={s.blackText}>{ticket.segments[0].date}</p>
                                <hr />
                                <p className={s.greyText}>{`${ticket.segments[1].origin} -  
                                ${ticket.segments[1].destination}`}</p>
                                <p className={s.blackText}>{ticket.segments[1].date}</p>
                            </div>

                            <div className={s.block}>
                                <p className={s.greyText}>В ПУТИ</p>
                                <p className={s.blackText}>{this.calculateDuration(ticket.segments[0].duration)}</p>
                                <hr />
                                <p className={s.greyText}>В ПУТИ</p>
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
