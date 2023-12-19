import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { featured } from "../constants";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from 'react-native-maps';
import { colors } from "../global/styles";
import * as Icon from 'react-native-feather';
import { useDispatch, useSelector } from "react-redux";
import { selectResturant } from "../slices/restaurantSlice";
import { emptyCart } from "../slices/cartSlice";

export default function DeliveryScreen() {
    const restaurant = useSelector(selectResturant);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const cancelOrder = () => {
        navigation.navigate('Home');
        dispatch(emptyCart());
    }
    return (
        <View style={{ flex: 1 }}>
            {/* map view */}
            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.lng,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001,
                }}
                style={{ flex: 1 }}
                mapType="standard"
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.lng,
                    }}
                    title={restaurant.name}
                    description={restaurant.description}
                    pinColor="red"
                />
            </MapView>
            <View style={{ borderRadius: 20, marginTop: 12, paddingVertical: 15, backgroundColor: colors.white, position: "relative" }}>
                <View style={{ flexDirection: "row", marginLeft:20, justifyContent: "space-between", paddingHorizontal: 5, paddingTop: 10 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: colors.grey1, fontWeight: "bold" }}>
                            Llegada estimada
                        </Text>
                        <Text style={{ fontSize: 30, fontWeight: "bold", color: colors.grey1 }}>
                            20-30 Minutos
                        </Text>
                        <Text style={{ marginTop: 2, color: colors.grey1, fontWeight: "bold" }}>
                            Tu pedido va en camino!
                        </Text>
                    </View>
                    <Image style={{ width: 100, height: 100, marginRight:20 }} source={require('../assets/images/bikeGuy2.gif')} />
                </View>
                <View
                    style={{
                        backgroundColor: colors.turquoise,
                        padding: 4,
                        justifyContent: "space-between",
                        flexDirection: "row",
                        alignItems: "center",
                        borderRadius: 99,
                        marginVertical: 12,
                        marginHorizontal: 6,
                    }}
                >
                    <View style={{ padding: 2, borderRadius: 99, backgroundColor: colors.opaqueTur }}>
                        <Image style={{ height: 80, width: 80, borderRadius: 99 }} source={require('../assets/images/deliveryGuy.jpg')} />
                    </View>
                    <View style = {{flex: 1, marginLeft: 10}}>
                        <Text style = {{fontSize: 18, fontWeight: 'bold', color: colors.white}}>
                            El Tarro
                        </Text>
                        <Text style = {{fontSize: 13, fontWeight: 'bold', color: colors.white}}>
                            Tu repartidor
                        </Text>
                    </View>
                    <View style = {{flexDirection: 'row', alignItems: "center", marginHorizontal: 10, marginRight: 10}}>
                        <TouchableOpacity style = {{backgroundColor: colors.white, padding: 5, borderRadius: 99, marginHorizontal: 5}}>
                            <Icon.Phone fill={colors.turquoise} stroke = {colors.turquoise} width={35} height={35}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {cancelOrder} style = {{backgroundColor: colors.white, padding: 5, borderRadius: 99, marginHorizontal: 5}}>
                            <Icon.X stroke={'red'} strokeWidth = {4} width={35} height={35}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}