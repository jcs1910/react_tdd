import * as constants from '../actions/constants';
import * as actions from '../actions/balance';

it('create an action to set the balance', function () {
    const balance = 0;

    const expectedAction = { type: constants.SET_BALANCE, balance };

    expect(actions.setBalance(balance)).toEqual(expectedAction)
});

it('creates an action to deposit into the balance', () => {
   const deposit = 10;

   const expectedAction = { type: constants.DEPOSIT, deposit: deposit };

   expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it('creates an action to withdraw from the balance', function () {
    const withdrawal = 10;

    const expectedAction = { type: constants.WITHDRAW, withdrawal: withdrawal}

    expect(actions.withdraw(withdrawal)).toEqual(expectedAction);
});