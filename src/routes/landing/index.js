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
      {
        'city': 'Foster City',
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
        text: 'Predictive Analytics',
      },
      {
        text: 'Predictive Analytics',
      },
      {
        text: 'Predictive Analytics',
      },
      {
        text: 'Predictive Analytics',
      },
      {
        text: 'Predictive Analytics',
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
