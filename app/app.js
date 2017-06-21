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
        tabBarBackgroundColor: '#2A265C',
        navBarButtonColor: '#ffffff',
        tabBarButtonColor: '#ffffff',
        navBarTextColor: '#ffffff',
        tabBarSelectedButtonColor: '#ffffff',
        navigationBarColor: '#2A265C',
        navBarBackgroundColor: '#2A265C',
        statusBarColor: '#2A265C',
        tabFontFamily: 'Roboto-Light'
    },
    appStyle: {
        tabBarBackgroundColor: '#2A265C',
        navBarButtonColor: '#ffffff',
        tabBarButtonColor: '#ffffff',
        navBarTextColor: '#ffffff',
        tabBarSelectedButtonColor: '#ffffff',
        navigationBarColor: '#2A265C',
        navBarBackgroundColor: '#2A265C',
        statusBarColor: '#2A265C',
        tabFontFamily: 'Roboto-Light'
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
