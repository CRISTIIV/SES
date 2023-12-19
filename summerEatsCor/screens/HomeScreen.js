import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme'
import { stylese, colors } from '../global/styles';
import Categories from '../components/categories';
import { featured } from '../constants';
import FeaturedRow from '../components/featuredRow';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='dark-content' />
            {/* search bar */}
            <View style={styles.searchBar}>
                <View style={styles.inputBar}>
                    <Icon.Search height="25" width="25" stroke="gray" />
                    <TextInput placeholder='Restaurantes' style={styles.inputText} />

                    <View style={styles.barDivisor}>
                        <Icon.MapPin height="20" width="20" stroke="grey" />
                        <Text style={{ color: colors.grey3 }}>New York, NYC</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: colors.vibrantOrange, padding: 8, borderRadius: 50 }}>
                    <Icon.Sliders height={20} width={20} strokeWidth="2.5" stroke="white" />
                </View>
            </View>

            {/* main */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            >
                {/* categories */}
                <View style={{ backgroundColor: colors.white, paddingVertical: 10 }}>
                    <Categories /> 
                </View>

                {/* featured */}
                <View style={{ backgroundColor: colors.white, paddingVertical: 10, marginTop: 20 }}>
                    {
                        [featured, featured, featured].map((item, index) => {
                            return (
                                <FeaturedRow
                                    key={index}
                                    title={item.title}
                                    restaurants={item.restaurants}
                                    description={item.description}
                                />
                            )
                        })
                    }                    
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.turquoise,
    },
    searchBar: {
        //flex-row items-center space-x-2 px-4 pb-2
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        paddingHorizontal: 4,
        paddingBottom: 20,
        paddingTop: 10,
    },
    inputBar: {
        //flex-row flex-1 items-center p-3 rounded-full border border-gray-3
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        backgroundColor: colors.grey5,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.turquoise,
    },

    inputText: {
        marginLeft: 2,
        flex: 1,
    },

    barDivisor: {
        //flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 0,
        borderLeftWidth: 2,
        paddingLeft: 5,
        borderLeftColor: colors.grey3,


    }
})


