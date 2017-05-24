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
          <Text>{opportunities.prospectName}</Text>
          <Text>{opportunities.opportunityName}</Text>
          <Text>{opportunities.region}</Text>
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
    width: 316,
    height: 83,
  },
});

AppRegistry.registerComponent('salesboard', () => salesboard);
