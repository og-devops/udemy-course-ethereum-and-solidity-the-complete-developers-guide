import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>

          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link>

          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
/*
import React, { Component } from 'react';
import { Card, Button, Menu } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';

class CampaignIndex extends Component {
  static async getInitialProps() {
      const campaigns = await factory.methods.getDeployedCampaigns().call();

      return { campaigns };
  }

  renderCampaigns() {
      const items = this.props.campaigns.map(address => {
        return {
          header: address,
          description: <a>View Campaign</a>,
          fluid: true
        };
      });

      return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>

          <Button floated="right"
            content="Create Campaign"
            icon="add circle" //icon="add"
            primary //same thing as => primary="true"
          />

          {this.renderCampaigns()}
        </div>
      </Layout>

    //return <div>{this.props.campaigns[0]}</div>;
  );
  }
}

export default CampaignIndex;
*/

/*
import React, { Component } from 'react';
import { Card, Button, Menu } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';

class CampaignIndex extends Component {
  static async getInitialProps() {
      const campaigns = await factory.methods.getDeployedCampaigns().call();

      return { campaigns };
  }

  renderCampaigns() {
      const items = this.props.campaigns.map(address => {
        return {
          header: address,
          description: <a>View Campaign</a>,
          fluid: true
        };
      });

      return <Card.Group items={items} />;
  }

  render() {
    return (
    <Layout>
      <div>
      <link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" />
      <h3>Open Campaigns</h3>
    {this.renderCampaigns()}
    <Button floated="right"
      content="Create Campaign"
      icon="add circle" //icon="add"
      primary //same thing as => primary="true"
        />
      </div>
    </Layout>

    //return <div>{this.props.campaigns[0]}</div>;
  );
  }
}

export default CampaignIndex;
*/

/*
export default () => {
  return <h1>This is the campaign list page!!!</h1>;
};
*/

/*
import React, { Component } from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
  static getInitialProps() {
      async
  }

  async componentDidMount() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    console.log(campaigns);
  }

  render() {
    return <div>Campaigns Index!</div>;
  }
}

export default CampaignIndex;
*/
