import React from 'react';
import { Header, Grid, Card } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Landing.css'
import GoogleAd from './GoogleAd'


class Landing extends React.Component {
  renderSupplyCompanies() {
    return (
      <Card.Group>
        {
          this.props.supplyCompanies.map((c) => {
            return <Card>
                <Card.Content>
                  <Card.Header>{c.name}</Card.Header>
                  <Card.Description>
                    <p>
                      {c.city}, {c.state}
                    </p>
                    <p>
                      <a href={c.website} target="_external">
                        {c.website}
                      </a>
                    </p>
                  {c.linkedin ?
                    <p>
                        <a href={c.linkedin} target="_external">
                          {c.linkedin}
                        </a>
                      </p> : null}
                    <p>

                    </p>
                    <i className="fa fa-users" aria-hidden="true" />
                  </Card.Description>
                </Card.Content>
              </Card>;
          })
        }
      </Card.Group>
    )
  }
  render() {
    return (
      <Grid className={s.demandDashboard}>
        <Grid.Row>
          <Header as="h1" className={s.asdf}>
            EverString Demand Dashboard
          </Header>
          <Header as="h1" className={s.asdf}>
            Discover companies actively researching your solution right now
          </Header>
        </Grid.Row>
        <Grid.Row className={`${s.darkRow}`}>
          <Header as="h1" className={s.h1}>
            You and {this.props.supplyCompanies.length} other companies
            are running google ads that look like this
          </Header>
          <GoogleAd />
        </Grid.Row>
        <Grid.Row>
          <Header as="h1" className={s.h1}>
            Your ideal Customer Profile
          </Header>
        </Grid.Row>
        <Grid.Row className={`${s.darkRow}`}>
          <Header as="h1" className={s.h1}>
            Our Process
          </Header>

        </Grid.Row>
        <Grid.Row>
          <Header as="h1" className={s.h1}>
            We found XXX+ companies that are actively researching for the keyword XXX
          </Header>
          {this.renderSupplyCompanies()}
        </Grid.Row>
      </Grid>
    )
  }
}

export default withStyles(s)(Landing);
