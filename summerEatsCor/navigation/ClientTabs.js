import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import {colors} from "../global/styles";
import { Icon } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import MyOrderScreen from "../screens/MyOrderScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import { ClientStack } from "./clientStack";

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {

    return(
        <ClientTabs.Navigator
            screenOptions = {{
                tabBarActiveTintColor: colors.turquoise,
            }}
            >
            <ClientTabs.Screen
                name = 'HomeScreen'
                component = {HomeScreen}
                options = {
                {   
                    headerShown: false,
                    tabBarLabel: "Inicio",
                    tabBarIcon: ({ color, size }) => (
                        <Icon 
                            name="sait-boat" 
                            type="fontisto"
                            color={color} 
                            size={size} 
                        />
                    ),
                }
                }
            />

            <ClientTabs.Screen
                name = "Buscar"
                component = {ClientStack}
                options = {{
                    headerShown: false,
                    tabBarLabel: "Buscar",
                    tabBarIcon: ({ color, size }) => (
                        <Icon 
                            name="search" 
                            type="material"
                            color={color} 
                            size={size} 
                        />
                    ),
                }}
            />

            <ClientTabs.Screen
                name = "MyOrdersScreen"
                component = {MyOrderScreen}
                options = {{
                    tabBarLabel: "Pedidos",
                    tabBarIcon: ({ color, size }) => (
                        <Icon 
                            name="treasure-chest" 
                            type="material-community"
                            color={color} 
                            size={size} 
                        />
                    ),
                }}
            />

            <ClientTabs.Screen
                name = "MyAccount"
                component = {MyAccountScreen}
                options = {{
                    tabBarLabel: "Cuenta",
                    tabBarIcon: ({ color, size }) => (
                        <Icon 
                            name="pirate" 
                            type="material-community"
                            color={color} 
                            size={size} 
                        />
                    ),
                }}
            />
        </ClientTabs.Navigator>
    )
}