import React from "react";
import { DogsContainer, HomeContainer } from "../screens";
import Ionicons from '@expo/vector-icons/Ionicons';

export type RootParamList = {
    home: undefined;
    "my-dogs": undefined;
};

export const APP_SCREENS: {[index: string]: any} = {
    home: {
        component: HomeContainer,
        options: {
            tabBarLabel: 'Home',
            tabBarLabelStyle: {fontFamily: 'Poppins-SemiBold', fontSize: 11},
            tabBarIcon: ({color, size}) => (
              <Ionicons
                name="home-outline"
                color={color}
                size={size}
              />
            ),
        }
    },
    "my-dogs": {
        component: DogsContainer,
        options: {
            tabBarLabel: 'My Dogs',
            tabBarLabelStyle: {fontFamily: 'Poppins-SemiBold', fontSize: 11},
            tabBarIcon: ({color, size}) => (
                <Ionicons
                  name="logo-octocat"
                  color={color}
                  size={size}
                />
            ),
        }
    },
}