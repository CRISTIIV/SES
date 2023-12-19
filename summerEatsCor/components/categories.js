import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, {useState} from "react";
import { categories } from "../constants";
import { colors } from "../global/styles";
import { useEffect } from "react";

export default function Categories() {

    const [activeCategory, setActiveCategory] = useState(null);   

    return (
        <View >
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                style={{ overflow: 'visible' }}
            >

                {
                    categories.map((category, index) => {
                        let isActive = category.id === activeCategory;
                        let btnClass = isActive ? colors.vibrantOrange : colors.grey5;
                        let textColor = isActive ? colors.vibrantOrange : colors.grey3;
                        let textClass = isActive ? fontWeight = 'bold' : fontWeight = 'normal';
                        return (
                            <View key={index} style={{ display: 'flex', justifyContent: "center", alignItems: "center", marginRight: 12, paddingVertical: 10, paddingHorizontal: 5 }}>
                                <TouchableOpacity
                                    onPress={() => setActiveCategory(category.id)}
                                    style={{ padding: 10, borderRadius: 50, backgroundColor: colors.grey5, shadowColor: colors.grey6, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, backgroundColor: btnClass }}
                                >
                                    <Image style={{ width: 50, height: 50 }}
                                        source={category.image}
                                    />

                                </TouchableOpacity>
                                <Text style={{ paddingHorizontal: 5, paddingVertical: 2, color: textColor, fontWeight: textClass }}> {category.name}</Text>

                            </View>)
                    })
                }
            </ScrollView>

        </View>
    )
}