import * as actions from './actionTypes';

// export const bugAdded = description => ({
//     type: actions.BUG_ADDED,
//     payload: {
//         description: description
//     }
// })

export function bugAdded(description) {
    return {
        type: actions.BUG_ADDED,
        payload: {
            description: description
        }
    }
}

export const bugRemoved = id => ({
    type: actions.BUG_REMOVED,
    payload: {
        id: id
    }
});

export function bugResolved(id) {
    return {
        type: actions.BUG_RESOLVED,
        payload: {
            id: id
        }
    }
}