import { takeEvery, put, delay } from "@redux-saga/core/effects";

// Async Action Dispatcher
function* ageUpAsync() {
    yield delay(2000);
    yield put ({type: 'ageUpAsync', payload: 1})
}

function* ageDownAsync() {
    yield delay(2000);
    yield put ({type: 'ageDownAsync', payload: 1})
}

// Action Catcher 
export function* watchAgeUp() {
    yield takeEvery('ageUp', ageUpAsync)
    yield takeEvery('ageDown', ageDownAsync)
}