/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

//var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

var MOCKED_SALES_DATA = [
  {opportunities: [
    {prospectName: 'John Deere Financial',
    prospectLogo: 'https://mfa-inc.com/portals/0/CreditFinance/image/JDFinancial.png',
    opportunityName: 'Point of Sale - UK, Germany, Spain',
    region: 'Europe'},
    {prospectName: 'GM Financial',
    prospectLogo: 'https://media.glassdoor.com/sqll/488523/gm-financial-squarelogo-1445021144899.png',
    opportunityName: 'End-to-end - Ireland',
    region: 'Europe'},
    {prospectName: 'CarMax',
    prospectLogo: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAARBAAAAJGVmMTRjNzUxLTMxY2EtNDQ1MS05NzNmLWJkZTIzYTZlMTNhMQ.png',
    opportunityName: 'Back-end - USA',
    region: 'North America'},
    {prospectName: 'Royal Bank of Canada',
    prospectLogo: 'https://lh3.googleusercontent.com/_Xe3RDC0TntZEhmlvmeAR4cXRVjHJX_axkIKMT0fhVGbjcqdPlQtZFpVDIoU_SjlvHY=w170',
    opportunityName: 'Back-end - Canada',
    region: 'North America'},
    {prospectName: 'Dell Financial Services',
    prospectLogo: 'https://centretechnologies.com/wp-content/uploads/2013/12/p-dell.png',
    opportunityName: 'Back-end - USA',
    region: 'North America'},
  ]
}
];

export default class salesboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let responseData = MOCKED_SALES_DATA[0];
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(responseData.opportunities),
      loaded: true,
    });
  }

  // fetchData() {
  //   fetch(REQUEST_URL)
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       this.setState({
  //         dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
  //         loaded: true,
  //       });
  //     })
  //     .done();
  // }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderOpportunity}
        style={styles.listView}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading opportunities...
        </Text>
      </View>
    );
  }

  renderOpportunity(opportunity) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: opportunity.prospectLogo}}
          style={styles.prospectLogo}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.prospectName}>{opportunity.prospectName}</Text>
          <Text style={styles.opportunityName}>{opportunity.opportunityName}</Text>
          <Text style={styles.region}>{opportunity.region}</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  prospectLogo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  prospectName: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  opportunityName: {
    textAlign: 'center',
  },
  region: {
    textAlign: 'center',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('salesboard', () => salesboard);
