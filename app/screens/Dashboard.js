import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableHighlight } from 'react-native';

var MOCKED_SALES_DATA = [
  {opportunities: [
    {prospectName: 'John Deere Financial',
    prospectLogo: 'https://mfa-inc.com/portals/0/CreditFinance/image/JDFinancial.png',
    opportunityName: 'Point of Sale',
    region: 'Europe',
    probability: 80,
    status: 'Subject to Contract',
    pricingStatus: 'Pre-negotiated',
    currency: 'USD',
    licence: 10000000,
    maintenance: 2000000,
    days: 20000,
    dayRate: 2040,
  },
  {prospectName: 'GM Financial',
  prospectLogo: 'https://www.fourgonsrivesud.com/wp-content/uploads/2016/04/gm.png',
  opportunityName: 'End-to-end',
  region: 'Europe',
  probability: 95,
  status: 'Subject to Contract',
  pricingStatus: 'Pre-negotiated',
  currency: 'USD',
  licence: 10000000,
  maintenance: 2000000,
  days: 20000,
  dayRate: 2040,
},
{prospectName: 'CarMax',
prospectLogo: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAARBAAAAJGVmMTRjNzUxLTMxY2EtNDQ1MS05NzNmLWJkZTIzYTZlMTNhMQ.png',
opportunityName: 'Back-end',
region: 'North America',
probability: 20,
status: 'Subject to Contract',
pricingStatus: 'Pre-negotiated',
currency: 'USD',
licence: 10000000,
maintenance: 2000000,
days: 20000,
dayRate: 2040,
},
{prospectName: 'Royal Bank of Canada',
prospectLogo: 'https://lh3.googleusercontent.com/_Xe3RDC0TntZEhmlvmeAR4cXRVjHJX_axkIKMT0fhVGbjcqdPlQtZFpVDIoU_SjlvHY=w170',
opportunityName: 'Back-end',
region: 'North America',
probability: 25,
status: 'Workshops',
pricingStatus: 'Pre-negotiated',
currency: 'USD',
licence: 10000000,
maintenance: 2000000,
days: 20000,
dayRate: 2040,
},
{prospectName: 'Dell Financial Services',
prospectLogo: 'https://centretechnologies.com/wp-content/uploads/2013/12/p-dell.png',
opportunityName: 'Back-end',
region: 'North America',
probability: 10,
status: 'RFP',
pricingStatus: 'Pre-negotiated',
currency: 'USD',
licence: 10000000,
maintenance: 2000000,
days: 20000,
dayRate: 2040,
},
{prospectName: 'Nissan Financial Services',
prospectLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Nissan-logo.svg/200px-Nissan-logo.svg.png',
opportunityName: 'Back-end',
region: 'North America',
probability: 30,
status: 'Initial Contact',
pricingStatus: 'Pre-negotiated',
currency: 'USD',
licence: 10000000,
maintenance: 2000000,
days: 20000,
dayRate: 2040,
},
]
}
];

class Dashboard extends React.Component {
    render() {
        return (
            <View>
              <Text>Hello</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        height: 48,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.054)',
    },
    text: {
        fontSize: 16,
    },
});

export default Dashboard;
