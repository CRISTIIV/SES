import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../global/styles";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../slices/cartSlice";

export default function CartIcon() {

    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    if (!cartItems.length) return;

    return (
        <View style = {{position: "absolute", bottom: 20, width: "100%", zIndex: 50}}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Cart')}
                style = {{flexDirection:'row', justifyContent: 'space-between', marginHorizontal: 5,backgroundColor: colors.turquoise, paddingVertical: 12, padding: 15, borderRadius: 99, marginHorizontal: 15, shadowColor: colors.black, shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.15}}
            >
                <View style = {{paddingVertical: 10, width: "15%", alignItems: "center", paddingHorizontal: 10, borderRadius: 99, backgroundColor: colors.opaqueTur}}>
                    <Text style = {{fontWeight:"bold", color: colors.white, fontSize: 16}}>
                        {cartItems.length}
                    </Text>
                </View>
                <Text style = {{flex: 1,textAlign:"center", marginVertical: 10, fontWeight: "bold", fontSize: 16, color: colors.white}}>
                    Ver carrito
                </Text>
                <Text style = {{marginVertical: 10, fontWeight: "bold", fontSize: 16, color: colors.white}}>
                    ${cartTotal}
                </Text>
            </TouchableOpacity>
        </View>
    )
}