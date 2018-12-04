import React from 'react';
import LandingV2 from './LandingV2';

async function action(params) {
  const id = decodeURIComponent(params.path.replace('/', ''))

  const { fetch } = params
  let demandDashboardProps = {}

  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let json = await res.json()
  json = {
    "data": {
      "alexaRank": 245712,
      "bing_news": [
        {
          "date": "2018-11-09T02:30:00.0000000Z",
          "description": "president of EverString. \"He brings unique insight into understanding the challenges of our customers, as well as first-hand knowledge of the benefits of leveraging predictive technology to build a more efficient pipeline. He is the perfect person for the ...",
          "title": "EverString Hires Marketo Alum to Spearhead World-Class Customer Success Program",
          "url": "http://news.sys-con.com/node/3472802"
        },
        {
          "date": "2018-11-06T18:41:00.0000000Z",
          "description": "Nov. 6, 2018 /PRNewswire/ -- EverString, the fastest-growing B2B data platform ... We have built an unrivaled technology platform, assembled a world-class executive team, and delivered the best financial results in the company's history.",
          "title": "EverString Names B2B Data Veteran Santosh Sharan As Chief Executive Officer To Lead Company Through Next Phase of Growth",
          "url": "https://markets.businessinsider.com/news/stocks/everstring-names-b2b-data-veteran-santosh-sharan-as-chief-executive-officer-to-lead-company-through-next-phase-of-growth-1027698246"
        },
        {
          "date": "2017-06-07T00:00:00.0000000Z",
          "description": "SAN MATEO, Calif., June 07, 2017 (GLOBE NEWSWIRE) — EverString Audience Platform is the first product of its kind to put the power of artificial intelligence directly into the hands of front-line sales and marketing users. EverString, the leading ...",
          "title": "EverString Brings Self-Service AI to B2B Sales and Marketing Teams",
          "url": "https://forextv.com/top-news/everstring-brings-self-service-ai-to-b2b-sales-and-marketing-teams/"
        },
        {
          "date": "2017-05-09T12:03:00.0000000Z",
          "description": "Inc. (NASDAQ: TTEC), a leading global provider of customer experience, engagement and growth solutions delivered through a proprietary end-to-end Customer Engagement as a Service offering, and EverString, a leading provider of AI-assisted marketing and ...",
          "title": "TeleTech and EverString Announce Breakthrough Approach to B2B Sales and Marketing",
          "url": "https://markets.businessinsider.com/news/stocks/teletech-and-everstring-announce-breakthrough-approach-to-b2b-sales-and-marketing-1001995375"
        },
        {
          "date": "2017-05-03T12:07:00.0000000Z",
          "description": "In late 2016, Zeta appointed Jarrod Yahes, former Chief Financial Officer of Jackson Hewitt Tax Service Inc ... technology company, announced that Shankar Venkataraman (pictured left) has been named Senior Vice President of Engineering, joining from ...",
          "title": "Chatmeter's AI Tech & Research; Zeta Global Raises $140 Million; and much more",
          "url": "http://www.adotas.com/2017/05/new-ai-technology-jeremiah-rosen-cro-for-media-storm-zeta-global-raises-140-million-shankar-venkataraman-sr-vp-eng-anna-luo-vp-cim-at-jivox/"
        },
        {
          "date": "2016-09-13T16:30:00.0000000Z",
          "description": "SAN MATEO, CA--(Marketwired - Sep 13, 2016) - EverString, the largest and fastest-growing predictive marketing and predictive sales SaaS company, today announced that it has expanded its partnership with Marketo, Inc., to enable marketing and sales teams ...",
          "title": "Marketo Selects Predictive Marketing Leader EverString as Launch Partner for Marketo ABM",
          "url": "https://sports.yahoo.com/news/marketo-selects-predictive-marketing-leader-163000593.html"
        },
        {
          "date": "2016-05-04T15:11:00.0000000Z",
          "description": "SAN MATEO, CA--(Marketwired - May 4, 2016) - EverString, the fastest-growing predictive marketing SaaS company, today announced that they have extended their partnership and integration with Marketo, Inc., to ... EverString's predictive technology to ...",
          "title": "EverString and Marketo Empower Marketers to Utilize Predictive Technology to Reach More Customers",
          "url": "http://www.marketwired.com/press-release/everstring-marketo-empower-marketers-utilize-predictive-technology-reach-more-customers-nasdaq-mkto-2121429.htm"
        },
        {
          "date": "2015-10-13T11:37:00.0000000Z",
          "description": "The EverString ... Inc. \"They are building the foundations for broader application of machine intelligence throughout the marketing process, addressing critical bottlenecks that now prevent marketers from making full use of today's technology for ...",
          "title": "EverString Extends Artificial-Intelligence-Powered Predictive Marketing to Predictive Ad Targeting",
          "url": "http://www.marketwired.com/press-release/everstring-extends-artificial-intelligence-powered-predictive-marketing-predictive-ad-2063164.htm"
        },
        {
          "date": "2014-08-12T13:30:00.0000000Z",
          "description": "While there are a host of marketing analytics services in the market like Silverpop and Eloqua that businesses use to aggregate numerous sales leads and find potential customers, EverString's technology goes beyond whatever data is hosted internally ...",
          "title": "With $12M in new cash, EverString wants businesses to boost sales with machine learning",
          "url": "https://gigaom.com/2014/08/12/with-12m-in-new-cash-everstring-wants-businesses-to-boost-sales-with-machine-learning/"
        }
      ],
      "city": "San Mateo",
      "companyPhone": "+1 6504253937",
      "country": "United States",
      "description": "EverString helps B2B sales, marketing, and operations teams build pipeline, prioritize prospects, and streamline operations. EverStrings marketing and sales intelligence software puts the power of artificial intelligence (AI), applied data science, and the most reliable data directly into the hands of marketing, sales and operations teams. With EverString, users are able to quickly expand and prioritize their pipeline, gain insight into relevant prospects, and directly access data with the highest accuracy and coverage. EverString is backed by leading investors including Lightspeed Venture Partners, Sequoia Capital, IDG Ventures and Lakestar.",
      "domain": "everstring.com",
      "ecid": 152695187,
      "employeeSize": "101-200",
      "facebookUrl": "facebook.com/everstringtechnology",
      "id": 152695187,
      "industry": "Computer Software",
      "keywords": [
        "predictive scoring",
        "account-based marketing",
        "demand generation",
        "predictive marketing",
        "marketing and sales",
        "sales and marketing",
        "sales intelligence",
        "sales prospecting",
        "sales development",
        "b2b sales and marketing",
        "marketing alignment",
        "b2b sales",
        "b2b marketing and sales",
        "data science",
        "predictive analytics",
        "marketing and crm",
        "sales and marketing alignment",
        "applied data science",
        "pipeline acceleration",
        "marketing teams"
      ],
      "linkedinUrl": "linkedin.com/company/everstring-technology",
      "location_id": "152695187WBQRDMZFFR",
      "name": "EverString Technology Inc",
      "numLocations": 2,
      "revenueRange": "$10M-$25M",
      "similar_domains": [
        {
          "domain": "infer.com",
          "ecid": 152998799,
          "name": "Infer Inc"
        },
        {
          "domain": "mintigo.com",
          "ecid": 157224278,
          "name": "Mintigo"
        },
        {
          "domain": "lattice-engines.com",
          "ecid": 112453612,
          "name": "Lattice Engines Inc"
        },
        {
          "domain": "leadspace.com",
          "ecid": 138134660,
          "name": "Leadspace Inc"
        },
        {
          "domain": "radius.com",
          "ecid": 161566188,
          "name": "Radius Intelligence Inc"
        }
      ],
      "state": "California",
      "street": "1850 Gateway Dr Ste 400",
      "twitterUrl": "twitter.com/everstring",
      "zipcode": "94404"
    }
  }

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
