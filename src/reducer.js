/**
 * Created by admin on 2018-7-24.
 */
import {add,remove} from './action';

export function reducer(state,action) {
    switch (action.type){
        case 'ADD':
            return{
                list:[...state.list,add(action.text)]
            };
        case 'REMOVE':
            return{
                list:state.list.filter(item=>item.id!==action.id)
            };
        default:
            return state
    }
}