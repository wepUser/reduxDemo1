/**
 * Created by admin on 2018-7-24.
 */
let index=0;

export function add(text) {
    return{
        id:index++,
        type:'ADD',
        text:text
    }
}

export function remove(id) {
    return{
        type:'REMOVE',
        id:id
    }
}

// export function forbidden() {
//     return{
//         type:'FORBIDDEN',
//         ifForbidden:action.num
//     }
// }