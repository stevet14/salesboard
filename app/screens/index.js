import { Navigation } from 'react-native-navigation';

import Dashboard from './Dashboard';
import AnotherTab from './AnotherTab';

export default function () {
    Navigation.registerComponent('salesboard.Dashboard', () => Dashboard);
    Navigation.registerComponent('salesboard.AnotherTab', () => AnotherTab);
}
