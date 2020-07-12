import React, {Component} from "react"
import { connect } from 'react-redux';
import balance from "../reducers/balance";

export class Wallet extends Component {
    render() {
        return(
            <div>
                <h3 className='balance'>Wallet balance: {this.props.balance}</h3>
            </div>
        )
    }
}

// eslint-disable-next-line no-unused-expressions
export default connect(state => { balance: state } ,null)(Wallet);