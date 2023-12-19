//import React, {useState, useRef} from "react";

import { View, Text, StyleSheet, TextInput, Image, ScrollView } from "react-native";
import { colors, parameters } from "../../global/styles";
import * as Animatable from "react-native-animatable";

import Swiper from 'react-native-swiper';

import { Icon, Button, SocialIcon } from "react-native-elements";
import Header from "../../components/Header";

export default function SignInWelcomeScreen({ navigation }){
    return(
        <ScrollView contentContainerStyle = {{flexGrow: 1,justifyContent: 'space-between'}} >
            <View style = {{flex: 1}}>
                <Header />
                <View style = {{justifyContent: "flex-start", alignItems: "center", paddingVertical: 80}}>
                    <Text style = {{fontSize: 23, color: colors.turquoise, fontWeight: "bold"}}>DESCUBRE CARRITOS Y LOCALES</Text>
                    <Text style = {{fontSize: 23, color: colors.turquoise, fontWeight: "bold"}}>EN TU PLAYA</Text>
                </View>

                <View style = {{}}>

                    <Swiper autoplay = {true} style = {{height: 250}}>
                        <View style = {styles.slide1}>
                            <Image
                                source= {require("../../assets/images/mcdonalds.png")}
                                style={{width: "100%", height: "100%"}}
                            />
                        </View>

                        <View style = {styles.slide2}>
                            <Image
                                source= {require("../../assets/images/oriente.png")}
                                style={{width: "100%", height: "100%"}}
                            />
                        </View>

                        <View style = {styles.slide3}>
                            <Image
                                source= {require("../../assets/images/sarevi.png")}
                                style={{width: "100%", height: "100%"}}
                            />
                        </View>

                    </Swiper>
                </View>

                <View style = {{marginHorizontal: 20, marginTop: 30}}>
                        <Button
                            title = "INICIAR SESIÓN"
                            buttonStyle = {parameters.styledButton}
                            titleStyle = {parameters.buttonTitle}
                            onPress={() => {
                                navigation.navigate("SignInScreen")
                            }}
                        />
                </View>

                <View style = {{marginHorizontal: 20, marginTop: 10}}>
                        <Button
                            title = "CREAR CUENTA"
                            buttonStyle = {parameters.createButton}
                            titleStyle = {parameters.buttonTitle}
                            onPress={() => {}}
                        />
                </View>

            </View>
        </ScrollView> 
    )
}

const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.turquoise,
    },
    slide2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.freshGreen,
    },
    slide3: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.redApetit,
    },
})