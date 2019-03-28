import {createAction, handleActions} from 'redux-actions';
import {Map} from 'immutable'
import {pender} from 'redux-pender';
import * as api from '../../../libs/myPage';

const READ_MYINFO = 'myPage/READ_MYINFO';

export const read_myInfo = createAction(READ_MYINFO, api.readMyInfo);

const initialState = Map({
    gradeLevel: 'a',
    chargingAmount: '',
    remainingAmount: '',
    usedAmount: '',

});

export default handleActions({
    ...pender({
        type: READ_MYINFO,
        onSuccess: (state, action) => {
            console.log("here!!!!!!!!");
            console.log(action.payload)
            const {gradeLevel, chargingAmount, remainingAmount, usedAmount} = action.payload.data

            return state.set('gradeLevel', gradeLevel)
                .set('chargingAmount', chargingAmount)
                .set('remainingAmount', remainingAmount)
                .set('usedAmount', usedAmount)
        },
        onFailure:(state,action)=>{
            console.log("onFailure : ",action.payload)
            return state.set('gradeLevel',"b")
        }
    })
}, initialState);
