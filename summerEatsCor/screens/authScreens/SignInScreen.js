import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { blueSubtitleText, colors, descriptionText, createButton, inputText1, inputText2, parameters } from "../../global/styles";
import * as Animatable from "react-native-animatable";
import { Icon, Button, SocialIcon } from "react-native-elements";
import { Formik } from "formik";
import Header from "../../components/Header";


export default function SignInScreen({ navigation }) {

    const [textInput2Fossued, setTextInput2Fossued] = useState(false);

    const textInput1 = useRef(1);
    const textInput2 = useRef(2);
    

    return (
        <View style={styles.container}>


            <Header
                title="Mi Cuenta"
                type="backburger"
                navigation={navigation}
            />
            <View style={{ alignItems: "center" }}>
                <Image
                    source={require("../../assets/images/logo.png")}
                    style={{ width: 200, height: 200, alignSelf: "center" }}
                />
            </View>

            <View style={{ alignItems: "center" }}>
                <View style={{ marginLeft: 20 }}>
                    <Text style={styles.subTitle}>Iniciar Sesión</Text>
                </View>

                <View style={{ alignItems: "center", marginTop: 10 }}>
                    <Text style={styles.text1}>Ingrese su email y contraseña</Text>
                </View>
                
                <Formik

                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values) => { console.log(values) }}

                >
                    { (props) =>
                        <View>
                            <View style={{ marginTop: 20 }}>
                                <View style={{ alignItems: "center" }}>
                                    <TextInput
                                        style={styles.TextInput1}
                                        placeholder="Email"
                                        ref={textInput1}
                                        onChangeText={props.handleChange("email")}
                                        value= {props.values.email}
                                    />
                                </View>

                                <View style={styles.TextInput2}>
                                    <Animatable.View animation={textInput2Fossued ? "" : "fadeInRight"} duration={800}>
                                        <Icon
                                            name="lock"
                                            iconStyle={{ color: colors.vibrantOrange }}
                                            type="material"
                                            style={{}}
                                        />
                                    </Animatable.View>

                                    <TextInput
                                        style={{ width: "70%", fontSize: 17, paddingLeft: 15 }}
                                        placeholder="Contraseña"
                                        ref={textInput2}
                                        onFocus={() => {
                                            setTextInput2Fossued(false)
                                        }}
                                        onBlur={() => {
                                            setTextInput2Fossued(true)
                                        }}
                                        onChangeText={props.handleChange("password")}
                                        value= {props.values.password}
                                    />

                                    <Animatable.View animation={textInput2Fossued ? "" : "fadeInLeft"} duration={800}>
                                        <Icon
                                            name="visibility-off"
                                            iconStyle={{ color: colors.vibrantOrange }}
                                            type="material"
                                            style={{ marginRight: 10 }}
                                        />
                                    </Animatable.View>
                                </View>
                            </View>

                            <View style={{ marginTop: 10 }}>
                                <Button
                                    title="INICIAR SESIÓN"
                                    buttonStyle={parameters.styledButton}
                                    titleStyle={parameters.buttonTitle}
                                    onPress= {navigation.navigate("RootClientTabs")}
                                    //{props.handleSubmit}
                                />
                            </View>
                        </View>
                    }
                </Formik>

                <View style={{ alignItems: "center" }}>
                    <Text style={{ ...styles.text1, textDecorationLine: "underline" }}>¿Olvidaste tu contraseña?</Text>
                </View>

                <View style={{ alignItems: "center", marginTop: 10, marginBottom: 20 }}>
                    <Text style={{ fontSize: 12, fontWeight: "bold", color: colors.turquoise }}>O inicia sesión de otra forma:</Text>
                </View>

                <View style={{ paddingHorizontal: 40 }}>
                    <SocialIcon
                        title='Inicia sesión con Google'
                        button
                        type='google'
                        style={{ ...parameters.styledButton, backgroundColor: colors.google }}
                        fontStyle={parameters.buttonTitle}
                        onPress={() => { }}
                    />
                </View>

                <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
                    <Text style={{ ...styles.text1 }}>¿Nuevo usuario?</Text>
                </View>

                <View style={{ alignItems: "center" }}>
                    <Button
                        title="Regístrate"
                        buttonStyle={styles.registerButton}
                        titleStyle={parameters.buttonTitle}
                        onPress={() => { }}
                    />
                </View>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    subTitle: blueSubtitleText,

    text1: descriptionText,

    TextInput1: inputText1,

    TextInput2: inputText2,

    registerButton: parameters.createButton,
})