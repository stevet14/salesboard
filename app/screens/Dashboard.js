import React from 'react'
import {
  FormattedWrapper
} from 'react-native-globalize'
import Opportunities from '../components/Opportunities.js'

var Accordion = require('react-native-accordion')

class Dashboard extends React.Component {
  
  render () {
    return (
      <FormattedWrapper locale='en' currency='USD'>
        <Opportunities/>
      </FormattedWrapper>
    )
  }
}

export default Dashboard
