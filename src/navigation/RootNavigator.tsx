import React from 'react';
import {
    NavigationContainer,
    NavigationContainerRef,
  } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { APP_SCREENS, RootParamList } from './types';
import { INITIAL_ROUTE } from '../constants';
import { color } from '../theme';
import { DogsProvider } from '../context/DogContext';

const Tab = createBottomTabNavigator();

export const TabNavigator = ({}) => {
    return (
        <Tab.Navigator
            initialRouteName={INITIAL_ROUTE}
            screenOptions={{
                headerShown: true,
                tabBarActiveTintColor: color.primary,
                tabBarInactiveTintColor: color.text,
            }}
            backBehavior="history"
        >
            {Object.entries(APP_SCREENS).map(([screenName, data]) => (
                <Tab.Screen
                    key={screenName}
                    name={data.options.tabBarLabel}
                    component={data.component}
                    options={data.options}
                />
            ))}
        </Tab.Navigator>
    )
}

// Forward all navigation props to children and keep current state
export const RootNavigator = React.forwardRef<
  NavigationContainerRef<RootParamList>,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <DogsProvider>
      <TabNavigator />
      </DogsProvider>
    </NavigationContainer>
  );
});