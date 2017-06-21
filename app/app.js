import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import registerScreens from './screens';

const customTextProps = {
  style: {
    fontFamily: 'Roboto-Light',
    color: '#9B9B9B',
  }
}

// screen related book keeping
registerScreens();

// The tabs that are displayed along the bottom of the application
const tabs = [{
    label: 'Dashboard',
    screen: 'salesboard.Dashboard',
    icon: require('../img/list.png'),
    title: 'Dashboard',
}, {
    label: 'Another Tab',
    screen: 'salesboard.AnotherTab',
    icon: require('../img/swap.png'),
    title: 'Another Tab',
}];


// this will start our app
Navigation.startTabBasedApp({
    tabs,
    tabsStyle: {
        tabBarBackgroundColor: '#003a66',
        navBarButtonColor: '#ffffff',
        tabBarButtonColor: '#ffffff',
        navBarTextColor: '#ffffff',
        tabBarSelectedButtonColor: '#ff505c',
        navigationBarColor: '#003a66',
        navBarBackgroundColor: '#003a66',
        statusBarColor: '#002b4c',
        tabFontFamily: 'BioRhyme-Bold',
    },
    appStyle: {
        tabBarBackgroundColor: '#003a66',
        navBarButtonColor: '#ffffff',
        tabBarButtonColor: '#ffffff',
        navBarTextColor: '#ffffff',
        tabBarSelectedButtonColor: '#ff505c',
        navigationBarColor: '#003a66',
        navBarBackgroundColor: '#003a66',
        statusBarColor: '#002b4c',
        tabFontFamily: 'BioRhyme-Bold',
    }
    //,
    // Uncomment this to add a draw that can be dragged from the side for
    // settings etc
    // drawer: {
    //     left: {
    //         screen: 'example.Types.Drawer'
    //     }
    // }
});
