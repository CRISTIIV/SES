import React from "react";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import SignInWelcomeScreen from "../screens/authScreens/SignInWelcomeScreen";
import SignInScreen from "../screens/authScreens/SignInScreen";
import HomeScreen from "../screens/HomeScreen";
import RootClientTabs from "./ClientTabs";
import RestaurantMapScreen from "../screens/RestaurantsMapScreen";
import MyMenuScreen from "../screens/MyMenuScreen";
import BusinessConsoleScreen from "../screens/BusinessConsoleScreen";
import MyAccountScreen from "../screens/MyAccountScreen";


const Auth = createStackNavigator();

export default function AuthStack() {


    return(
        <Auth.Navigator>
            <Auth.Screen
                name="SignInWelcomeScreen"
                component={SignInWelcomeScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Auth.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            
            <Auth.Screen
                name="RootClientTabs"
                component={RootClientTabs}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Auth.Screen
                name="RestaurantMapScreen"
                component={RestaurantMapScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            
            <Auth.Screen
                name="MyMenuScreen"
                component={MyMenuScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />

            <Auth.Screen
                name="BusinessConsoleScreen"
                component={BusinessConsoleScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />

            <Auth.Screen
                name="MyAccountScreen"
                component={MyAccountScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />
        </Auth.Navigator>
    )

}