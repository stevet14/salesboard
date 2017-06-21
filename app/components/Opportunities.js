import React, { Component } from 'react'
import {
  AppRegistry,
  Image,
  ListView,
  NavigatorIOS,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { setCustomText } from 'react-native-global-props'
import Pie from 'react-native-pie'
import {
  FormattedCurrency,
  FormattedNumber
} from 'react-native-globalize'

var Accordion = require('react-native-accordion')

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
      dayRate: 2040
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
      dayRate: 2040
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
      dayRate: 2040
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
      dayRate: 2040
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
      dayRate: 2040
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
      dayRate: 2040
    }
  ]
  }
]

class Opportunities extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    }
  }

  componentDidMount () {
    this.fetchData()
  }

  fetchData () {
    let responseData = MOCKED_SALES_DATA[0]
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(responseData.opportunities),
      loaded: true
    })
  }

  // fetchData() {
  //   fetch(REQUEST_URL)
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       this.setState({
  //         dataSource: this.state.dataSource.cloneWithRows(responseData.opportunities),
  //         loaded: true,
  //       });
  //     })
  //     .done();
  // }

  render () {
    if (!this.state.loaded) {
      return this.renderLoadingView()
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderOpportunity}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        style={styles.listView}
      />
    )
  }

  renderLoadingView () {
    return (
      <View style={styles.container}>
        <Text>
          Loading opportunities...
        </Text>
      </View>
    )
  }

  renderOpportunity (opportunity) {
    var gaugeColour
    if (opportunity.probability < 25) {
      gaugeColour = '#A21122'
    } else if (opportunity.probability > 75) {
      gaugeColour = '#7ED321'
    } else {
      gaugeColour = '#F6A623'
    }

    var header = (
      <View style={styles.container}>
        <StatusBar
          barStyle='light-content'
        />
        <Image
          source={{uri: opportunity.prospectLogo}}
          style={styles.prospectLogo}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.prospectName}>{opportunity.prospectName}</Text>
          <View style={styles.bottomContainer}>
            <Text style={styles.region}>{opportunity.region}: </Text>
            <Text style={styles.opportunityName}>{opportunity.opportunityName}</Text>
          </View>
        </View>
        <View>
          <Pie
            radius={25}
            innerRadius={20}
            series={[opportunity.probability]}
            colors={[gaugeColour]}
            backgroundColor='#ddd' />
          <View style={styles.gauge}>
            <Text style={styles.gaugeText}>{opportunity.probability}%</Text>
          </View>
        </View>
      </View>
      )

    var content = (
      <View>
        <View style={styles.statusLine}>
          <Text style={styles.opportunityStatusLabel}>Status: </Text>
          <Text style={styles.opportunityStatus}>{opportunity.status}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', margin: '5%', marginBottom: 0}}>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={{fontFamily: 'Roboto-Regular'}}>Licence:
                <FormattedCurrency
                  value={opportunity.licence}
                  maximumFractionDigits='0'
                  currency={opportunity.currency} />
            </Text>
            <Text style={{fontFamily: 'Roboto-Regular'}}>Maintenance:
                <FormattedCurrency
                  value={opportunity.maintenance}
                  maximumFractionDigits='0'
                  currency={opportunity.currency} />
            </Text>
            <Text style={{fontFamily: 'Roboto-Regular'}}>Currency: {opportunity.currency}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={{fontFamily: 'Roboto-Regular'}}>Days:
                <FormattedNumber
                  value={opportunity.days}
                  maximumFractionDigits={0} />
            </Text>
            <Text style={{fontFamily: 'Roboto-Regular'}}>Rate:
                <FormattedNumber
                  value={opportunity.dayRate}
                  maximumFractionDigits={0} />
            </Text>
            <Text style={{fontFamily: 'Roboto-Regular'}}>Pricing: {opportunity.pricingStatus}</Text>
          </View>
        </View>
        <Text style={styles.opportunityDetail}>
            Notes: 6 weeks to decline strategy……..
            iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi .
          </Text>
      </View>
      )

    return (
      <Accordion
        header={header}
        content={content}
        easing='easeOutCubic'
        underlayColor='#FFFFFF'
        />
    )
  }
  }

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: '5%',
    marginBottom: -5
        // shadowColor: '#888',
        // shadowOffset: {
        //   width: 0,
        //   height: 2
        // },
        // shadowRadius: 2,
        // shadowOpacity: 1.0,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 10
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline'
  },
  prospectLogo: {
    width: 69,
    height: 69,
    resizeMode: 'contain'
  },
  prospectName: {
    fontFamily: 'Roboto-Regular',
    fontSize: 24
  },
  opportunityName: {
    fontFamily: 'Roboto-Regular',
    textAlign: 'left',
    fontSize: 16
  },
  region: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16
  },
  opportunityDetail: {
    fontSize: 16,
    margin: '5%',
    marginBottom: 0
  },
  statusLine: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: '5%',
    marginBottom: 0
  },
  opportunityStatusLabel: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18
  },
  opportunityStatus: {
    color: '#7ED321',
    fontSize: 18
  },
  listView: {
    backgroundColor: '#FFFFFF'
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth * 2,
    width: '90%',
    margin: '5%',
        //      marginBottom: -5,
    marginBottom: 1,
    backgroundColor: '#9B9B9B'
  },
  gauge: {
    position: 'absolute',
    width: 53,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gaugeText: {
    backgroundColor: 'transparent',
    fontSize: 16
  }
})

export default Opportunities
