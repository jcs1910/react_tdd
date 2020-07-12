import React from "react";
import { shallow, configure } from 'enzyme';
import {Wallet} from '../components/Wallet';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Wallet', function () {
    const mockDeposit = jest.fn();
    const mockWithdraw = jest.fn();

    const props = {balance: 20, deposit: mockDeposit, withdraw: mockWithdraw };
    const wallet = shallow(<Wallet {...props} />);

    it('renders properly', function () {
        expect(wallet).toMatchSnapshot();
    });

    it('displays the balance from props', () => {
        expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20')
    });

    it('creates an input to deposit into or withdraw from the balance', function () {
        expect(wallet.find('.input-wallet').exists()).toBe(true);
    })

    describe('when the user types into the wallet input', function () {
        const userBalance = '25';

        beforeEach(() => {
            wallet.find('.input-wallet')
                .simulate('change', { target: { value: userBalance }})
        });
        it('updates the local wallet balance in `state` and converts it to a number', function () {
            expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
        });

        describe('and the user wants to make a deposit', function () {
            beforeEach(() => wallet.find('.btn-deposit')
                .simulate('click'));
            it('dispatches the `deposit()` it receives from props with local balance', function () {
                expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10))
            });
        });

        describe('and the user wants to make a withdrawal', function () {
            beforeEach(() => wallet.find('.btn-withdraw')
                .simulate('click'));
            it('dispatches the `withdraw()` it ceives from props with the local balance', function () {
                expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10))
            })
        });
    });
});