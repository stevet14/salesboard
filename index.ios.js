/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var MOCKED_SALES_DATA = [
  {prospectName: 'John Deere Financial',
  prospectLogo: 'https://mfa-inc.com/portals/0/CreditFinance/image/JDFinancial.png',
  opportunityName: 'Point of Sale - UK, Germany, Spain',
  region: 'Europe'}
]

export default class salesboard extends Component {
  render() {
    var opportunities = MOCKED_SALES_DATA[0];
    return (
      <View style={styles.container}>
        <Image
          source={{uri: opportunities.prospectLogo}}
          style={styles.prospectLogo}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.prospectName}>{opportunities.prospectName}</Text>
          <Text style={styles.opportunityName}>{opportunities.opportunityName}</Text>
          <Text style={styles.region}>{opportunities.region}</Text>
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
    width: 105,
    height: 27,
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
});

AppRegistry.registerComponent('salesboard', () => salesboard);
