import React, { useState } from 'react'
import { View, Text, Image, FlatList, TextInput, TouchableOpacity } from 'react-native'
import { homeStyles } from './homeStyles';
import { lookup } from './lookup';
import {Picker} from '@react-native-picker/picker';

const colDisplay = (labelText, value, style) => {
    return (
        <View style={[homeStyles.priceInfo, style]}>
            <Text style={homeStyles.infoText}>{labelText}</Text>
            <Text style={homeStyles.infoText}>{value}</Text>
        </View>
    );
}

const addNewElement = () => { }

const filterList = (data, search) => {
    return data.filter(m => m.name.toLowerCase().indexOf(search) >= 0);
}

const Home = () => {
    const [searchText, setSearchText] = useState("");
    const [searchItemType, setItemType] = useState("");
    return (
        <View style={homeStyles.container}>
            <View style={homeStyles.searchArea}>
                <TextInput placeholder="Search here..."
                    onChangeText={(search) => setSearchText(search.toLowerCase())}
                    style={homeStyles.searchBar}>
                </TextInput>
                <Picker
                    selectedValue={searchItemType}
                    style={homeStyles.itemTypePicker}
                    onValueChange={(itemValue) =>
                        this.setItemType(itemValue)
                    }>
                    <Picker.Item label="Show Everything" value="" />
                    <Picker.Item label="Paint" value="paint" />
                    <Picker.Item label="Hardware" value="hardware" />
                    <Picker.Item label="Sanitory" value="sanitory" />
                </Picker>
            </View>
            <FlatList style={homeStyles.listView}
                keyExtractor={item => item.id.toString()}
                data={filterList(lookup, searchText)} renderItem={({ item }) =>
                    <TouchableOpacity key={item.id} style={homeStyles.listItem}>
                        <View style={homeStyles.topInfo}>
                            <Image source={require("../../assets/saleCart.jpg")} style={homeStyles.logo} />
                            <Text style={homeStyles.itemName}>{item.name}</Text>
                            <Text style={homeStyles.itemType}>{item.type.toUpperCase()}</Text>
                        </View>
                        <View style={homeStyles.bottomInfo}>
                            {colDisplay("CostPrice", item.costPrice)}
                            {colDisplay("Cartage", item.cartage, homeStyles.leftBorder)}
                            {colDisplay("TotalCostPrice", +item.costPrice + +item.cartage, homeStyles.leftBorder)}
                            {colDisplay("SellingPrice", item.sellingPrice, homeStyles.leftBorder)}
                        </View>
                    </TouchableOpacity >
                } />
            <TouchableOpacity style={homeStyles.addButton} onPress={addNewElement()}>
                <Text style={homeStyles.plusSign}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home

