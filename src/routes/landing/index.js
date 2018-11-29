import React from 'react';
import LandingV2 from './LandingV2';

async function action({ fetch }) {
  let demandDashboardProps = {
    customer: {
      'city': 'Foster City',
      'name': 'Qualys',
      'state': 'CA',
      website: 'qualys.com',
      'numContacts': 42,
      revenue: '$25M',
      employeeSize: 77,
      industry: 'Computer Software',
      numContacts: 102,
      alexaRank: 245712,
      description: 'Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.  Vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus.  Nullam libero mauris, consequat quis, varius et, dictum id, arcu.  Mauris mollis tincidunt felis.  Aliquam feugiat tellus ut neque.  Nulla facilisis, risus a rhoncus fermentum, tellus tellus lacinia purus, et dictum nunc justo sit amet elit.'
    },
    googleAd: {
      'body': "Get Internet Speeds You Want At A Price You'll Love. Sign Up With Xfinity Today! Move service stress-free. Millions of hotspots. Fast internet. Norton™ security included. Advanced security. Services: Internet, TV, Phone, WIFI Hotspots, X1 Entertainment System, Sports Packages.",
      'title': "Xfinity® High Speed Internet | Limited Offer - $29.99/mo/1yr | xfinity.com‎",
      website: 'www.xfinity.com/Internet‎',
    },
    similarCompanies: [
      { 'city': 'Foster City',
        'name': '247 Software',
        'state': 'CA',
        'website': '247software.com',
        'numContacts': 42,
        logoUrl: 'https://via.placeholder.com/200x100',
      },
      {
        'city': 'Foster City',
        'name': 'Adarit',
        'state': 'CA',
        'website': 'adarit.com',
        'numContacts': 42,
        logoUrl: 'https://via.placeholder.com/200x100',
      },
      {
        'city': 'Foster City',
        'name': 'Adarit',
        'state': 'CA',
        'website': 'adarit.com',
        'numContacts': 42,
        logoUrl: 'https://via.placeholder.com/200x100',
      },
      {
        'city': 'Foster City',
        'name': 'Adarit',
        'state': 'CA',
        'website': 'adarit.com',
        numContacts: 42,
        logoUrl: 'https://via.placeholder.com/200x100',
      },
      {
        'city': 'Foster City',
        'name': 'Adarit',
        'state': 'CA',
        'website': 'adarit.com',
        'numContacts': 42,
        logoUrl: 'https://via.placeholder.com/200x100',
      },
    ],
    customerProfile: [
      {
        text: 'Information Technology Services',
        type: 'industry',
      },
      {
        text: 'Financial Services',
        type: 'industry',
      },
      {
        text: 'it infrastructure',
        type: 'keyword',
      },
      {
        text: 'data transformation',
        type: 'keyword',
      },
      {
        text: 'data integration',
        type: 'keyword',
      },
      {
        text: 'master data management',
        type: 'keyword',
      },
      {
        text: 'data management',
        type: 'keyword',
      },
      {
        text: 'hybrid integration',
        type: 'keyword',
      },
      {
        text: 'data solutions',
        type: 'keyword',
      },
      {
        text: 'security and compliance',
        type: 'keyword',
      },
      {
        text: 'information and technology',
        type: 'keyword',
      },
      {
        text: 'financial services products',
        type: 'keyword',
      },
      {
        text: 'saas cloud',
        type: 'keyword',
      },
      {
        text: '100-200',
        type: 'employeeSize'
      },
      {
        text: '50-100',
        type: 'employeeSize'
      },
      {
        text: 'Chief Technology Officer',
        type: 'jobTitle'
      },
      {
        text: 'Head of Channel Sales',
        type: 'jobTitle'
      },
      {
        text: 'Chief Information Officer',
        type: 'jobTitle'
      },
    ],
    demandCompanies: [],
    keywords: 'Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat. Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.  Vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus.  Nullam libero mauris, consequat quis, varius et, dictum id, arcu.  Mauris mollis tincidunt felis.  Aliquam feugiat tellus ut neque.  Nulla facilisis, risus a rhoncus fermentum, tellus tellus lacinia purus, et dictum nunc justo sit amet elit. Nullam eu ante vel est convallis dignissim.  Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio.  Nunc porta vulputate tellus.  Nunc rutrum turpis sed pede.  Sed bibendum.  Aliquam posuere.  Nunc aliquet, augue nec adipiscing interdum, lacus tellus malesuada massa, quis varius mi purus non odio.  Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus diam neque sit amet urna.  Curabitur vulputate vestibulum lorem.  Fusce sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.  Sed id ligula quis est convallis tempor.  Curabitur lacinia pulvinar nibh.  Nam a sapien. '.split(' '),
  }

  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let json = await res.json()
  json = {
    "data": {
      "contact_titles": [
        "VP Marketing",
        "Director Sales"
      ],
      "demand_competitors": {
        "count": 2,
        "websites": [
          "optimove.com",
          "redpointglobal.com"
        ]
      },
      "demand_keyword": "predictive analytics",
      "demand_search_snippet": "",
      "demand_search_url": "",
      "demand_website": "c3.ai",
      "employee_size_ranges": [
        "100-200",
        "50-100"
      ],
      "industries": [
        "computer software",
        "information technology"
      ],
      "keywords": [
        "iot software",
        "machine learning",
        "data scientist"
      ],
      "supply_companies_count": 81,
      "top_supply_companies": [
        {
          "city": "Garland",
          "country": "United States",
          "domain": "bearcom.com",
          "id": 112514882,
          "linkedinUrl": "linkedin.com/company/bearcom",
          "name": "BearCom",
          "state": "Texas"
        },
        {
          "city": "Milpitas",
          "country": "United States",
          "domain": "linear.com",
          "id": 136480445,
          "linkedinUrl": "linkedin.com/company/linear-technology",
          "name": "Linear Technology LLC",
          "state": "California"
        },
        {
          "city": "La Mirada",
          "country": "United States",
          "domain": "livingspaces.com",
          "id": 151948687,
          "linkedinUrl": "linkedin.com/company/living-spaces-furniture",
          "name": "Living Spaces Furniture LLC",
          "state": "California"
        },
        {
          "city": "Ipswich",
          "country": "United States",
          "domain": "neb.com",
          "id": 149366259,
          "linkedinUrl": "linkedin.com/company/26482",
          "name": "New England Biolabs Inc",
          "state": "Massachusetts"
        },
        {
          "city": "Costa Mesa",
          "country": "United States",
          "domain": "vans.com",
          "id": 155782682,
          "linkedinUrl": "linkedin.com/company/vans",
          "name": "Vans",
          "state": "California"
        }
      ],
    }
  }
  console.log("json: ", json)
  const props = {
    customerProfile: [],
    supplyCompanies: [],
    demandCompetitors: [],
  }
  json.data.contact_titles.forEach((title) => {
    props.customerProfile.push({
      text: title,
      type: 'jobTitle'
    })
  })
  json.data.keywords.forEach((kw) => {
    props.customerProfile.push({
      text: kw,
      type: 'keyword'
    })
  })
  json.data.industries.forEach((industry) => {
    props.customerProfile.push({
      text: industry,
      type: 'industry'
    })
  })
  json.data.employee_size_ranges.forEach((esr) => {
    props.customerProfile.push({
      text: esr,
      type: 'employeeSize'
    })
  })

  json.data.demand_competitors.websites.forEach((w) => {
    props.demandCompetitors.push({
      website: w
    })
  })
  props.demandCompetitorsCount = json.data.demand_competitors.count
  props.demandKeyword = json.data.demand_keyword
  props.demandSearchSnippet = json.data.demand_search_snippet
  props.demandSearchUrl = json.data.demandSearchUrl
  props.supplyCompaniesCount = json.data.supply_companies_count
  json.data.top_supply_companies.forEach((c) => {
    props.supplyCompanies.push({
      id: c.id,
      website: c.domain,
      linkedin: c.linkedinUrl,
      city: c.city,
      name: c.name,
      state: c.state,
    })
  })

  demandDashboardProps = Object.assign(demandDashboardProps, props)

  return {
    title: 'EverString',
    chunks: ['landing'],
    component: <LandingV2 {...demandDashboardProps}/>,
  };
}

export default action;
