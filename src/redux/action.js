import { SET_USER_ID, SET_TICKETS, SET_FILTER, SET_SORT } from './constants'

export const setUserId = (payload) => ({
    type: SET_USER_ID,
    payload,
})

export const setTickets = (payload) => ({
    type: SET_TICKETS,
    payload,
})

export const setFilter = (payload) => ({
    type: SET_FILTER,
    payload,
})

export const setSort = (payload) => ({
    type: SET_SORT,
    payload,
})
