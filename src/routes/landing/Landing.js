import React from 'react';
import { Header, Grid, Card } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Landing.css'
import GoogleAd from './GoogleAd'
import _ from 'lodash'


class Landing extends React.Component {
  static defaultProps = {
    news: [],
  }
  constructor(props) {
    console.log("props: ", props)
    super(props)
    this.state = {
      properties: []
    }
  }

  componentDidMount() {
    const properties = {}
    this.props.customerProfile.forEach((property) => {
      if (!(properties[property.type])) {
        properties[property.type] = []
      }
      properties[property.type].push(property)
    })

    this.setState({properties})
  }

  renderSupplyCompanies() {
    return (
      <Card.Group centered className={s.supplyCompanyCards}>
        { this.props.supplyCompanies.map((c) => {
          console.log("c: ", c)
          return (
            <Card className={s.supplyCompanyCard}>
              <Card.Content>
                <div className={s.supplyLogoCont}>
                  <img className={s.supplyLogo} src="https://via.placeholder.com/200x150" />
                </div>
                <Card.Header className={s.companyName} textAlign="center">{c.name}</Card.Header>
                <Card.Description>
                  <p className={s.supplyCompanyLocation}>
                    {c.city}, {c.state}
                  </p>
                  <p className={s.supplyCompanyWebsite}>
                    <a href={c.website} target="_external">
                      {c.website}
                    </a>
                  </p>
                  {c.linkedin ? <p className={s.supplyCompanyLinkedin}>

                      <a href={c.linkedin} target="_external">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </p> : null}

                  {c.numContacts ?
                   <p className={s.numContacts}>
                     <i className="fa fa-users" aria-hidden="true" />
                     <span className={s.numContactsNum}>{c.numContacts}</span>
                   </p>
                   : null}
                </Card.Description>
              </Card.Content>
            </Card>
          )
        })
      }
      </Card.Group>
    )
  }

  renderCustomerProfile() {
    return (
      <div className={s.propertiesCont}>
        {
          _.map(this.state.properties, (property, type) => {
            return this.renderProperty(type);
          })
        }
      </div>
    )
  }

  renderProperty(type) {
    const titleMap = {
      'industry': 'Industry',
      'keyword': 'Keyword',
      'employeeSize': 'Employee Size',
      'jobTitle': 'Titles',
    }

    const properties = this.state.properties[type]
    console.log('properties:', properties)

    if (!properties) {
      return
    }

    return (
      <div className={s.property}>
        <div className={s.propertyTitle}>{titleMap[type]}</div>
        <div className={s.propChipCont}>
        {
          properties.map((property) => {
            const chipClass = 'propChip-' + property.type

            return (
              <span className={s[chipClass]}>
                {property.text}
              </span>
            )
          })
        }
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={s.demandDashboard}>
        <Grid>
          <div className={s.navBar}>
            <div className="logoCont">
              <img src="public/logo_white.png"/>
              <div className="logoText">
                EverString
              </div>
            </div>

            <div className={s.helpText}>
              learn more at <a className={s.whiteLink} href="https://www.everstring.com">everstring.com</a>
            </div>
          </div>
          <Grid.Row className={s.row}>
            <Grid.Column width={16}>
              <Header as="h1" className={s.titleHeader}>
                EverString Demand Dashboard
              </Header>
            </Grid.Column>
            <Grid.Column width={16}>
              <Header as="h1" className={s.titleHeader}>
                Discover companies actively researching your solution right now
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className={`${s.darkRow}`}>
            <Header as="h1" className={s.h1}>
              You and {this.props.supplyCompanies.length} other companies
              are running google ads that look like this
            </Header>
            <GoogleAd className={s.googleAd} />
          </Grid.Row>
          <Grid.Row className={s.row}>
            <Header as="h1" className={s.h1}>
              Your ideal Customer Profile
            </Header>
            {this.renderCustomerProfile()}
          </Grid.Row>
          <Grid.Row className={`${s.darkRow}`}>
            <Header as="h1" className={s.h1}>
              Our Process
            </Header>
            <img className={s.aiMagic} src="/images/ai_magic.png"/>
          </Grid.Row>
          <Grid.Row className={s.row}>
            <Header as="h1" className={`${s.h1} ${s.longH1}`}>
              We found XXX+ companies that are actively researching for the keyword XXX
            </Header>
            {this.renderSupplyCompanies()}
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default withStyles(s)(Landing);
