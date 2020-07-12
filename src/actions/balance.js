import * as constants from './constants'

// 액션 함수
export const setBalance = balance => {
    return {
        type: constants.SET_BALANCE,
        balance
    }
}

export const deposit = deposit => {
    return {
        type: constants.DEPOSIT,
        deposit
    }
}

export const withdraw = withdrawal => {
    return {
        type: constants.WITHDRAW,
        withdrawal,
    }
}
