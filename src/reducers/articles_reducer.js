import {GET_ARTICLES} from '../actions/types'

const INITIAL_STATE = { all:[], article: null }

export default function(state=INITIAL_STATE, action) {
	switch(action.type){
		case GET_ARTICLES:
		  console.log(action.payload)
		  return { ...state, all: action.payload.data }
		default: 
		  return state
	}
}