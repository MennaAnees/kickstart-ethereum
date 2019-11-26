import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();

        return {
            address: props.query.address,
            mininmumContribution: summary[0],
            balance: summary[1],
            requestsCounts: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }

    renderCards() {
        const {
            balance,
            manager,
            mininmumContribution,
            requestsCounts,
            approversCount
        } = this.props;

        const items = [
            {
                header: manager,
                meta: 'Adress of manager',
                description: 'The manager created the campaign and can create request to withdraw money',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: mininmumContribution,
                meta: 'Mininmum Contribution',
                description:
                    'You must contribute at least this much wei to become an approver',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: requestsCounts,
                meta: ' Number of requests',
                description: 'A request tries to withdraw money from the contract. Request must be approved by approvers'
            },
            {
                header: approversCount,
                meta: 'Number odf approvers',
                description: 'Number of people who donated to this campaign'
            },
            {
                header: web3.utils.fromWei(balance),
                meta: 'Campaign Balance (ethere)',
                description: 'The balance is how much money this campaign has left to spend'
            }
        ];
        return <Card.Group items={items} />
    }

    render() {
        return (
            <Layout>
                <h3>Campaign Details</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCards()}
                        </Grid.Column>

                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address} />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary> View Requests</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>

            </Layout>
        )
    }
}

export default CampaignShow;
