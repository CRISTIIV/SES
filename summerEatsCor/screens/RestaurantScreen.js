import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import * as Icon from 'react-native-feather';
import { colors } from "../global/styles";
import DishRow from "../components/dishRow";
import CartIcon from "../components/cartIcon";
import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";
import { setResturant } from "../slices/restaurantSlice";

export default function RestaurantScreen() {

    const { params } = useRoute();
    const navigation = useNavigation();
    let item = params;
    const dispatch = useDispatch();
    //console.log('restaurant', item);

    useEffect(() => {
        if (item && item.id) {
            dispatch(setResturant({...item}))
        }
    }, [])

    return (
        <View>
            <CartIcon />
            <StatusBar barStyle='light' />
            <ScrollView>
                <View style={{ position: "relative" }}>
                    <Image style={{ width: '100%', height: 300 }} source={item.image} />
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ position: "absolute", top: 40, left: 25, backgroundColor: colors.white, padding: 10, borderRadius: 99, shadowColor: colors.grey6, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
                    >
                        <Icon.ArrowLeft color={colors.white} stroke={colors.vibrantOrange} strokeWidth={3} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 20, backgroundColor: colors.white, paddingTop: 15 }}>
                    <View style={{ paddingHorizontal: 2 }}>
                        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>{item.name}</Text>
                        <View style={{ flexDirection: "row", alignItems:"center", marginVertical: 4 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 5, paddingVertical: 5 }}>
                                <Image style={{ height: 15, width: 15, marginRight: 5 }} source={require('../assets/images/fullStar.png')} />
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ color: colors.yellowV }}>{item.stars}</Text>
                                    <Text style={{ color: colors.grey3 }}>
                                        ({item.reviews} review) • <Text style={{ fontWeight: "bold" }}>{item.category}</Text>
                                    </Text>
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 }}>
                                <Icon.MapPin color={colors.grey3} height='15' width='15' />
                                <Text style={{ fontSize: 12, color: colors.grey3 }}>Cercano • {item.address}</Text>
                            </View>
                        </View>
                        <Text style = {{color: colors.grey3, marginTop: 2}}>{item.description}</Text>
                    </View>
                </View>
                <View style = {{paddingBottom: 36, backgroundColor: colors.white}}>
                    <Text style = {{paddingHorizontal: 20, fontSize: 25, fontWeight: "bold"}}>Menú</Text>
                    {/* dishes */}
                    {
                        item.dishes.map((dish, index) => <DishRow item={{...dish}} key ={index}/>)
                    }
                </View>
            </ScrollView>
        </View>
    )
}