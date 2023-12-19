import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground, Animated } from "react-native";
import { foodCartData } from "../global/Data";
import { colors } from "../global/styles";

import { Icon } from "react-native-elements";
//import { Ionicons } from "@expo/vector-icons";


export default function RestaurantHeader({ navigation, id }) {


    
    return (
        <View>
            <ImageBackground
                style={styles.container}
                source={{ uri: foodCartData[id].images }}
            >


            </ImageBackground>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 150,
    },
});