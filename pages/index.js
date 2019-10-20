import React, { Component,useEffect, useState } from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component  {
    
    static async getInitialProps (){
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        console.log(">>>>", campaigns);
        return { campaigns };
    }
  
render(){
    return (<div>
        <h1>List Camps</h1>
        <p> {this.props.campaigns[0]}</p>

    </div>)
}
  
}


export default CampaignIndex;