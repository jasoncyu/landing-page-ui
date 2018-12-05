import _ from 'lodash'
import React from 'react';
import s from './LandingV2.css'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Button, Header, Grid, Card, } from 'semantic-ui-react'


class LandingV2 extends React.Component {
  constructor(props) {
    console.log("props: ", props)
    super(props)
    this.state = {
      properties: []
    }
  }

  renderNewsRow() {
    if (_.isEmpty(this.props.news)) {
      return
    }
    const newsElem = this.props.news.slice(0, 3).map((newsItem) => {
      return (
        <div className={s.newsWrapper}>
          <div className={s.newsHeadline}>
            {newsItem.title}
          </div>
          <div className={s.newsContent}>
            {newsItem.description}
          </div>
          <div className={s.newsDate}>
            {newsItem.date}
          </div>
        </div>
      )
    })

    return (
      <Grid.Row className={`${s.cell} ${s.newsRow}`}>
        <div className={`${s.newsHeader} ${s.redHeader}`}>
          News
        </div>
        <div className={s.newsItemsWrapper}>
          {newsElem}
        </div>
      </Grid.Row>
    )
  }

  renderCTARow() {
    const elems = ['Technologies EverString uses', 'Companies Looking For EverString'].map((title) => {
      return (
        <Grid.Column className={`${s.ctaCell} ${s.cell}`}>
          <div className={`${s.redHeader}`}>
            {title}
          </div>
          <div className={`${s.blurred}`}>
            <div className={s.blurredText}>
              Nullam eu ante vel est convallis dignissim.  Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio.  Nunc porta vulputate tellus.  Nunc rutrum turpis sed pede.  Sed bibendum.  Aliquam posuere.  Nunc aliquet, augue nec adipiscing interdum, lacus tellus malesuada massa, quis varius mi purus non odio.  Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus diam neque sit amet urna.  Curabitur vulputate vestibulum lorem.  Fusce sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.  Sed id ligula quis est convallis tempor.  Curabitur lacinia pulvinar nibh.  Nam a sapien.
            </div>
            <a href="http://pages.everstring.com/free-assessment.html" target="_blank">
              <Button primary className={s.button}>
                Register To See
              </Button>
            </a>
          </div>
        </Grid.Column>
      )
    })
    return (
      <Grid.Row className={`${s.ctaRow}`}>
        {elems}
      </Grid.Row>
    )
  }

  renderKeywordsRow() {
    console.log('this.props:', this.props)

    const keywords = this.props.keywords.map((kw) => {
      return <span className={s.keyword}>{kw},</span>
    })

    return (
      <Grid.Row className={`${s.cell} ${s.keywordsRow}`}>
        <div className={` ${s.keywordsCont} ${s.redHeader}`}>
          Keywords
        </div>
        <div className={` ${s.keywordsCont}`}>
          {keywords}
        </div>
      </Grid.Row>
    )
  }

  renderCompanies() {
    return this.props.similarCompanies.map((c) => {
      return (
        <div className={s.simComp}>
          <img className={s.logo} src={c.logoUrl} />
          <span className={s.simCompName}>{c.name}</span>
        </div>
      )
    })
  }

  renderFirmos() {
    const c = this.props
    const headers = ['Revenue', 'Employees', 'Industry', 'Contacts', 'Alexa Rank']

    return [c.revenueRange, c.employeeSize, c.industry, c.numContacts, c.alexaRank].map((val, i) => {
      if (!val) {
        return
      }

      return (
        <Grid.Column width={16} className={s.firmo}>
          <div className={s.redHeader}>
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
          <div>
            <img src="/ESlogo2x.png" className={s.headerLogo}/>
          </div>
        </div>

        <Grid columns="equal" className={s.content}>
          <Grid.Row className={s.titleRow}>
            <h1 className={s.custName}>
              {this.props.name}
            </h1>
            <a href={this.props.website}>
              {this.props.website}
            </a>

            <div className={s.divider}/>
          </Grid.Row>

          <Grid.Row className={s.firmosRow}>
            <Grid.Column className={`${s.cell} ${s.desc}`}>
              {this.props.description}
            </Grid.Column>
            <Grid.Column className={s.cell}>
              <div className={s.firmosCont}>
                {this.renderFirmos()}
              </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row className={s.companiesRow}>
            <div className={`${s.redHeader} ${s.simCompHeader}`}>
              Similar Companies
            </div>
            <div className={s.companiesCont}>
              {this.renderCompanies()}
            </div>
          </Grid.Row>

          {this.renderKeywordsRow()}

          {this.renderNewsRow()}

          {this.renderCTARow()}
        </Grid>
      </div>
    )
  }
}

export default withStyles(s)(LandingV2);
