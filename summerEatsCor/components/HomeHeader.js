import React from "react";

import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Icon, withBadge } from 'react-native-elements';
import { colors, parameters } from "../global/styles";


export default function HomeHeader({ navigation }) {

    const BadgeIcon = withBadge(0)(Icon)

    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.header}>
                <View style = {{alignItems: "center", justifyContent: "center", marginLeft: 15}}>
                    <BadgeIcon 
                        type = "material-community"
                        name = "cart"
                        color = {colors.buttonIcons}
                        size = {35}
                    />
                </View>

                <View style = {{alignItems: "center", justifyContent: "center"}}>
                    <Text style = {{color: colors.title, fontSize: 25, fontWeight: 'bold'}}>
                        SummerEats
                    </Text>
                </View>

                <View style = {{alignItems: "center", justifyContent: "center", marginRight: 15}}>
                    <Icon 
                        type = "material-community"
                        name = "menu"
                        color = {colors.buttonIcons}
                        size = {35}
                        onPress={() => navigation.navigate("MyMenuScreen")}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: colors.turquoise,
        height: parameters.headerHeight,
        //alignItems: "center",
        justifyContent: "space-between",
        //paddingHorizontal: 20,
    },
    container: {
        backgroundColor: colors.turquoise,
        marginTop: 40,
    }
});
