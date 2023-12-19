import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';
import { colors } from '../global/styles';
import { useNavigation } from '@react-navigation/native';

export default function RestaurantCard({item}) {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback
            onPress = {() => navigation.navigate('Restaurant', {...item})}
        >
            <View style = {{marginRight: 15, backgroundColor: colors.white, borderRadius: 30, shadowOffset: {width: 5, height: 5}, shadowColor: colors.black, shadowOpacity: 0.1}}>
                <Image style = {{height: 180, width: 270, borderTopLeftRadius: 30, borderTopRightRadius: 30}} source = {item.image} />
                <View style = {{paddingHorizontal: 12, paddingBottom: 16, marginVertical: 10}}>
                    <Text style = {{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
                    <View style = {{flexDirection: "row", alignItems: "center", marginHorizontal: 5, paddingTop: 5}}>
                        <Image style = {{height: 15, width: 15, marginRight: 5}} source = {require('../assets/images/fullStar.png')} />
                        <Text style = {{fontSize: 15}}>
                            <Text style = {{color: colors.yellowV}}>{item.stars}</Text>
                            <Text style = {{color: colors.grey3}}>
                                ({item.reviews} review) • <Text style = {{fontWeight: "bold"}}>{item.category}</Text>
                            </Text>
                        </Text>
                    </View>
                    <View style = {{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5}}>
                        <Icon.MapPin color = {colors.grey3} height = '15' width = '15'/>
                        <Text style = {{fontSize: 15, color: colors.grey3}}>Cercano • {item.address}</Text>
                    </View>
                </View> 
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    roundedT3xl: {
      borderTopLeftRadius: 99,
      borderTopRightRadius: 99,
      borderBottomRadius: 0, 
      borderBottomLeftRadius: 0,
    },
  });