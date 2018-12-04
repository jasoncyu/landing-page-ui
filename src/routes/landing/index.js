import React from 'react';
import LandingV2 from './LandingV2';

async function action(params) {
  const id = decodeURIComponent(params.path.replace('/', ''))

  const { fetch } = params
  let demandDashboardProps = {}

  const url = 'http://10.50.0.136:9005/v1/companies/demand_company';

  const res = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ website: id })
  })
  let json = await res.json()

  console.log("json: ", json)
  const props = {
    customerProfile: [],
    supplyCompanies: [],
    demandCompetitors: [],
  }

  props.name = json.data.name
  props.website = json.data.domain
  props.description = json.data.description
  props.revenueRange = json.data.revenueRange
  props.employeeSize = json.data.employeeSize
  props.industry = json.data.industry
  props.numContacts = json.data.numContacts
  props.alexaRank = json.data.alexaRank
  props.demandKeyword = json.data.demand_keyword
  props.demandSearchSnippet = json.data.demand_search_snippet
  props.demandSearchUrl = json.data.demandSearchUrl
  props.supplyCompaniesCount = json.data.supply_companies_count
  props.keywords = json.data.keywords
  props.similarCompanies = json.data.similar_domains
  props.news = json.data.bing_news
  props.pageID = id

  demandDashboardProps = Object.assign(demandDashboardProps, props)
  console.log('demandDashboardProps:', demandDashboardProps)


  return {
    title: demandDashboardProps.name,
    chunks: ['landing'],
    component: <LandingV2 {...demandDashboardProps}/>,
  };
}

export default action;
