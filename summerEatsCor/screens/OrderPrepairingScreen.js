import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { colors } from "../global/styles";
import { useNavigation } from "@react-navigation/native";

export default function OrderPrepairingScreen() {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery')
        }, 3000)
    }, [])
    return (
        <View style = {{flex: 1, justifyContent: 'center', backgroundColor: colors.white, alignItems: 'center'}}>
            <Image source = {require('../assets/summereats.gif')} style = {{width: 400, height: 400}}/>
        </View>
    )
}