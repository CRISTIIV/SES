import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { featured } from "../constants";
import { colors } from "../global/styles";
import * as Icon from 'react-native-feather';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectResturant } from "../slices/restaurantSlice";
import { removeFromCart, selectCartItems, selectCartTotal } from "../slices/cartSlice";

export default function CartScreen() {
    const restaurant = useSelector(selectResturant);
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const [groupedItems, setGroupedItems] = useState({});
    const deliveryFee = 1000;
    const dispatch = useDispatch();
    useEffect(() => {
        const items = cartItems.reduce((group, item) => {
            if (group[item.id]){
                group[item.id].push(item);
            }else{
                group[item.id] = [item];
            }
            return group;
        }, {});
        setGroupedItems(items);
    },[cartItems]);


        return (
            <View style={{ backgroundColor: colors.white, flex: 1 }}>
                {/* back button */}
                <View style={{ position: "relative", paddingVertical: 8 }}>
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        style={{ backgroundColor: colors.vibrantOrange, position: "relative", marginVertical: 15, padding: 10, borderRadius: 99, marginHorizontal: 15, shadowColor: colors.black, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.15 }}
                    >
                        <Icon.ArrowLeft stroke={colors.white} strokeWidth={3} />
                    </TouchableOpacity>
                    <View style={{ marginTop: 5 }}>
                        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>Tu carrito</Text>
                        <Text style={{ textAlign: "center", fontSize: 15, color: colors.grey3 }}>{restaurant.name}</Text>
                    </View>
                </View>
                {/* delivery time*/}
                <View style={{ backgroundColor: colors.turquoise, flexDirection: "row", alignItems: "center", paddingHorizontal: 4 }}>
                    <Image style={{ width: 85, height: 85, borderRadius: 99 }} source={require('../assets/images/bikeGuy.png')} />
                    <Text style={{ flex: 1, paddingLeft: 4, color: colors.white, marginHorizontal: 5 }}>Entrega de 20 a 30 minutos</Text>
                    <TouchableOpacity>
                        <Text style={{ color: colors.white, fontWeight: "bold", marginHorizontal: 15 }}>Cambiar</Text>
                    </TouchableOpacity>
                </View>
                {/* dishes */}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 50 }}
                    style={{ backgroundColor: colors.white, paddingTop: 10 }}
                >
                    {
                        Object.entries(groupedItems).map(([key, items]) => {
                            let dish = items[0];
                            return (
                                <View key={key}
                                    style={{ flexDirection: "row", alignItems: "center", backgroundColor: colors.white, marginBottom: 25, marginHorizontal: 10, borderRadius: 30, shadowOffset: { width: 5, height: 5 }, shadowColor: colors.black, shadowOpacity: 0.1 }}
                                >
                                    <Text style={{ fontWeight: 'bold', color: colors.vibrantOrange, marginLeft: 5 }}>
                                        {items.length} x
                                    </Text>
                                    <Image style={{ borderRadius: 99, height: 70, width: 70, margin: 10 }} source={dish.image} />
                                    <Text style={{ flex: 1, fontWeight: 'bold', color: colors.grey1 }}>{dish.name}</Text>
                                    <Text style={{ fontWeight: 'bold', textAlign: "center", marginHorizontal: 10 }}>${dish.price}</Text>
                                    <TouchableOpacity
                                        onPress={() => dispatch(removeFromCart({id: dish.id}))}
                                        style={{ padding: 3, borderRadius: 99, backgroundColor: colors.vibrantOrange, marginRight: 15 }}
                                    >
                                        <Icon.Minus strokeWidth={2} width={20} stroke={colors.white} />
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </ScrollView>
                {/* total */}
                <View style={{ padding: 6, paddingVertical: 25, paddingHorizontal: 8, borderRadius: 20, backgroundColor: colors.turquoise }}>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }}>
                        <Text style={{ color: colors.grey1 }}>SubTotal</Text>
                        <Text style={{ color: colors.grey1 }}>${cartTotal}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }}>
                        <Text style={{ color: colors.grey1 }}>Tarifa reparto</Text>
                        <Text style={{ color: colors.grey1 }}>${deliveryFee}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }}>
                        <Text style={{ color: colors.grey1, fontWeight: 'bold' }}>Total</Text>
                        <Text style={{ color: colors.grey1, fontWeight: 'bold' }}>${deliveryFee + cartTotal}</Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('OrderPrepairing')}
                            style={{ backgroundColor: colors.vibrantOrange, padding: 10, borderRadius: 99, marginVertical: 10, paddingVertical: 15, shadowColor: colors.black, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.15 }}
                        >
                            <Text style={{ textAlign: "center", color: colors.white, fontWeight: "bold", fontSize: 20 }}>Confirmar Pedido</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }