import React from 'react';
import s from './LandingV2.css'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Header, Grid, Card, } from 'semantic-ui-react'


class LandingV2 extends React.Component {
  constructor(props) {
    console.log("props: ", props)
    super(props)
    this.state = {
      properties: []
    }
  }

  renderFirmos() {
    const c = this.props.customer
    const headers = ['Revenue', 'Employees', 'Industry', 'Contacts', 'Alexa Rank']

    return [c.revenue, c.employeeSize, c.industry, c.numContacts, c.alexaRank].map((val, i) => {
      return (
        <Grid.Column width={16} className={s.firmo}>
          <div className={s.firmoHeader}>
            {headers[i]}
          </div>
          <span className={s.firmoVal}>
            {val}
          </span>
        </Grid.Column>
      )
    })
  }

  render() {
    return (
      <div className={s.landingV2}>
        <div className={s.navBar}>
          <div className={s.logoCont}>
            <img src="/logo_molecule.png"/>
            <img src="/logo.svg"/>
          </div>
        </div>

        <Grid columns="equal" className={s.content}>
          <Grid.Row className={s.titleRow}>
            <h1>
              {this.props.customer.name}
            </h1>
            <a href={this.props.customer.website}>
              {this.props.customer.website}
            </a>
          </Grid.Row>
          <Grid.Row className={s.firmosRow}>
            <Grid.Column className={s.cell}>
              {this.props.customer.description}
            </Grid.Column>
            <Grid.Column className={s.cell}>
              Logo
            </Grid.Column>
            <Grid.Column className={s.cell}>
              <Grid columns="equal">
                {this.renderFirmos()}
              </Grid>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className={s.demandCompaniesRow}>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default withStyles(s)(LandingV2);
