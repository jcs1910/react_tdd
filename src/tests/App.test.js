import React from 'react';
import { shallow, configure } from 'enzyme';
import App from '../components/App';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', function () {
    const app = shallow(<App />);

    it('renders properly', function () {
        expect(app).toMatchSnapshot();
    });

    it('contains a connected Wallet component', () => {
        expect(app.find('Connect(Wallet)').exists()).toBe(true)
    })
});