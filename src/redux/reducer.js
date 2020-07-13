import { SET_USER_ID, SET_TICKETS, SET_FILTER, SET_SORT } from './constants'
// import { Tickets } from '../components/Tickets/Tickets'

const initialState = {
    userId: null,
    ticketsData: [],
    tickets: [],
    filter: {
        all: true,
        zero: false,
        one: false,
        two: false,
        three: false,
    },
    sort: 'cheep',
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_ID:
            return {
                ...state,
                userId: action.payload,
            }
        case SET_TICKETS:
            return {
                ...state,
                tickets: getTickets(state.filter, state.sort, action.payload),
                ticketsData: action.payload,
            }
        case SET_FILTER:
            const newFilter = {
                ...state.filter,
            }
            newFilter[action.payload] = !state.filter[action.payload]
            return {
                ...state,
                filter: newFilter,
                tickets: getTickets(newFilter, state.sort, state.ticketsData),
            }
        case SET_SORT:
            return {
                ...state,
                sort: action.payload,
                tickets: getTickets(state.filter, action.payload, state.ticketsData),
            }
        default:
            return state
    }
}

function getTickets(filter, sort, tickets) {
    const checkObj = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
    }
    const check = []
    Object.keys(filter).forEach((item) => {
        if (filter[item]) {
            check.push(checkObj[item])
        }
    })
    const newTickets = tickets.slice()
    if (filter.all) {
        return sortTickets(tickets, sort)
    } else {
        return sortTickets(
            newTickets.filter((item) => {
                for (let i = 0; i < item.segments.length; i++) {
                    if (!check.includes(item.segments[i].stops.length)) {
                        return false
                    }
                }
                return true
            }),
            sort
        )
    }
}

function sortTickets(tickets, sort) {
    const newTickets = tickets.slice()
    if (sort === 'fast') {
        return newTickets.sort((a, b) => {
            const aDur = a.segments.reduce((segOne, segTwo) => segOne.duration + segTwo.duration)
            const bDur = b.segments.reduce((segOne, segTwo) => segOne.duration + segTwo.duration)
            if (aDur > bDur) {
                return 1
            }
            if (aDur < bDur) {
                return -1
            }
            return 0
        })
    } else if (sort === 'cheep') {
        return newTickets.sort((a, b) => a.price - b.price)
    }
    return newTickets
}
