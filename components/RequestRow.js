import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class RequestRow extends Component {
    state = {

    }

    onAprrove = async (event) => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);

        const accounts = await web3.eth.getAccounts();

        await campaign.methods.approveRequest(this.props.id).send({
            from: accounts[0]
        });
    }

    onFinalize = async (event) => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);

        const accounts = await web3.eth.getAccounts();

        await campaign.methods.finalizeRequest(this.props.id).send({
            from: accounts[0]
        });
    }

    render() {
        const { Row, Cell } = Table;
        const { id,
            approversCount,
            request: { description, value, recipient, approvalCount, complete } } = this.props;
        const readyToFinalize = approvalCount > approversCount / 2;
        return (
            <Row disable={complete} positive={readyToFinalize && !complete}>
                <Cell>{id}</Cell>
                <Cell>{description}</Cell>
                <Cell>{web3.utils.fromWei(value, 'ether')}</Cell>
                <Cell>{recipient}</Cell>
                <Cell>{approvalCount}/{approversCount}</Cell>
                <Cell>
                    {complete ? null :
                        <Button
                            color="green"
                            basic
                            onClick={this.onAprrove}>
                            Aprrove
                        </Button>
                    }
                </Cell>

                <Cell>
                    {complete ? null :
                        <Button
                            color="teal"
                            basic
                            onClick={this.onFinalize}>
                            Finalize
                    </Button>
                    }
                </Cell>
            </Row>
        )
    }
}

export default RequestRow;
