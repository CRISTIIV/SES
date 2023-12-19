import React from "react";

import { View, Text, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import { colors, parameters, subTitleText, titleText } from "../global/styles";

import { Icon } from "react-native-elements";

export default function Header({title, type, navigation}) {
    return (
        <SafeAreaView style = {styles.container}>
            <View >
                <View style = {styles.header}>
                    <View style = {{marginLeft:20}}>
                        <Icon 
                            type = "material-community"
                            name = {type}
                            color = {colors.buttonIcons}
                            size = {40}
                            onPress={() => {
                                if(type == "backburger"){
                                    navigation.goBack();
                                }
                            }}
                        />
                    </View>
                    <View style = {{marginLeft: 10}}>
                        <Text style = {styles.title}>
                            {title}
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header : {
        flexDirection: "row",
        backgroundColor: colors.turquoise,
        height: parameters.headerHeight,
        //paddingVertical: 10,
    },
    title: titleText,
    subtitle: subTitleText,

    container:{
        backgroundColor: colors.turquoise,
        marginTop: 40,
    }
});