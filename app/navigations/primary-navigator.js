import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {Image} from 'react-native';
import {color, distance} from '../theme';
import {HomeScreen} from '../screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// export function HomeBottomTab() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused}) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused
//               ? require('../assets/images/home.png')
//               : require('../assets/images/home.png');
//           } else if (route.name === 'Play') {
//             iconName = focused
//               ? require('../assets/images/play.png')
//               : require('../assets/images/play.png');
//           } else if (route.name === 'Rewards') {
//             iconName = focused
//               ? require('../assets/images/rewardActive.png')
//               : require('../assets/images/reward.png');
//           } else if (route.name === 'User') {
//             iconName = focused
//               ? require('../assets/images/userActive.png')
//               : require('../assets/images/user.png');
//           }

//           return (
//             <Image source={iconName} style={{width: 25, height: 25}} />
//             // <Icon
//             //   name={iconName}
//             //   size={25}
//             //   type="ionicon"
//             //   color={focused ? color.main : color.gray140}
//             //   style={{marginBottom: 4}}
//             // />
//           );
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: color.redText,
//         inactiveTintColor: 'rgba(0,0,0,0.4)',
//         keyboardHidesTabBar: true,
//         tabStyle: {
//           backgroundColor: '#fff',
//           paddingBottom: distance.smaller,
//           paddingTop: 5,
//           borderTopColor: 'white',
//           borderTopWidth: 1,
//         },
//         style: {
//           height: 60,
//         },
//       }}
//       lazy={false}>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Play" component={PlayScreen} />
//       <Tab.Screen name="Rewards" component={RewardsScreen} />
//       <Tab.Screen name="User" component={UserScreen} />
//     </Tab.Navigator>
//   );
// }

export function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      {/* <Stack.Screen name="HomeBottomTab" component={HomeBottomTab} /> */}
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      {/* <Stack.Screen name="PlayScreen" component={PlayScreen} />
      <Stack.Screen name="RewardsScreen" component={RewardsScreen} />
      <Stack.Screen name="UserScreen" component={UserScreen} /> */}
    </Stack.Navigator>
  );
}
