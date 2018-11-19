import React from 'react';
import Landing from './Landing';

function action() {
  const demandDashboardProps = {
    customer: {
      'city': 'Foster City',
      'name': 'Qualys',
      'state': 'CA',
      website: 'qualys.com',
      'numContacts': 42,
    },
    googleAd: {
      'body': "Get Internet Speeds You Want At A Price You'll Love. Sign Up With Xfinity Today! Move service stress-free. Millions of hotspots. Fast internet. Norton™ security included. Advanced security. Services: Internet, TV, Phone, WIFI Hotspots, X1 Entertainment System, Sports Packages.",
      'title': "Xfinity® High Speed Internet | Limited Offer - $29.99/mo/1yr | xfinity.com‎",
      website: 'www.xfinity.com/Internet‎',
    },
    supplyCompanies: [
      { 'city': 'Foster City',
        'name': '247 Software',
        'state': 'CA',
        'website': '247software.com',
        'numContacts': 42,
      },
      {
        'city': 'Foster City',
        'name': 'Adarit',
        'state': 'CA',
        'website': 'adarit.com',
        'numContacts': 42,
      },
      {
        'city': 'Foster City',
        'name': 'Adarit',
        'state': 'CA',
        'website': 'adarit.com',
        'numContacts': 42,
      },
      {
        'city': 'Foster City',
        'name': 'Adarit',
        'state': 'CA',
        'website': 'adarit.com',
        numContacts: 42,
      },
      // {
      //   'city': 'Foster City',
      //   'name': 'Adarit',
      //   'state': 'CA',
      //   'website': 'adarit.com',
      // 'numContacts': 42,
      // },
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
  }

  return {
    title: 'EverString',
    chunks: ['landing'],
    component: <Landing {...demandDashboardProps}/>,
  };
}

export default action;
