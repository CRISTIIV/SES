import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../global/styles";
import * as Icon from 'react-native-feather';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectCartItemsById, selectCartTotal } from "../slices/cartSlice";

export default function DishRow({item}) {

    const dispatch = useDispatch();
    const totalItems = useSelector(state => selectCartItemsById(state, item.id));

    const handleIncrease = () => {
        dispatch(addToCart({...item}))
    }

    const handleDecrease = () => {
        dispatch(removeFromCart({id: item.id}))
    }

    return (
        <View style = {{flexDirection: "row", alignItems: "center", backgroundColor: colors.white, marginBottom: 25, marginHorizontal: 3, borderRadius: 30, shadowOffset: {width: 5, height: 5}, shadowColor: colors.black, shadowOpacity: 0.1}}>
            <Image  style = {{borderRadius: 30, height: 100, width: 100, margin: 10}} source={item.image}/>
            <View style = {{display: "flex", flex: 1, marginVertical: 4}}>
                <View style = {{paddingLeft: 4, marginBottom: 15}}>
                    <Text style = {{fontSize: 20}}>{item.name}</Text>
                    <Text style = {{color: colors.grey2}}>{item.description}</Text>
                </View>
                <View style = {{flexDirection: "row", justifyContent: "space-between", paddingLeft: 3, alignItems: "center"}}>
                    <Text style = {{color: colors.grey2, fontSize: 16, fontWeight: "bold"}}>
                        ${item.price}
                    </Text>
                    <View style = {{flexDirection: "row", alignItems: "center"}}>
                        <TouchableOpacity
                            onPress={handleDecrease}
                            disabled = {!totalItems.length}
                            style = {{backgroundColor: colors.vibrantOrange, padding: 2, borderRadius: 99}}
                        >
                            <Icon.Minus height = '20' strokeWidth = {2} width={20} stroke={colors.white}/>
                        </TouchableOpacity>
                        <Text style = {{marginHorizontal: 15}}>
                            {totalItems.length}
                        </Text>
                        <TouchableOpacity
                            onPress={handleIncrease}
                            style = {{backgroundColor: colors.vibrantOrange, padding: 2, borderRadius: 99, marginRight: 15}}
                        >
                            <Icon.Plus height = '20' strokeWidth = {2} width={20} stroke={colors.white}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}