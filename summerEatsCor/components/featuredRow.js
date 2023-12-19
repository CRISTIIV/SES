import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { colors } from "../global/styles";
import RestaurantCard from "./restaurantCard";

export default function FeaturedRow({title,description,restaurants}) {
    return (
        <View>
            <View style = {{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12}}>
                <View>
                    <Text style = {{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
                    <Text style = {{fontSize: 16, color: colors.yellowV}}>{description}</Text>
                </View>
                <TouchableOpacity>
                    <Text style = {{color: colors.vibrantOrange, fontWeight: "bold", fontSize: 16}}>Ver Todo</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                style={{ overflow: 'visible', paddingVertical: 10 }}
            >
                {
                    restaurants.map((restaurant, index) => {
                        return(
                            <RestaurantCard
                                item = {restaurant}
                                key = {index}
                            />
                        )
                    })
                }
                
            </ScrollView>
        </View>
    )
}