import React, { useState } from 'react'
import { View, Text, Image, FlatList, TextInput, TouchableOpacity, Picker } from 'react-native'
import { homeStyles } from './homeStyles';
import { lookup } from './lookup';


const colDisplay = (labelText, value, style) => {
    return (
        <View style={[homeStyles.priceInfo, style]}>
            <Text style={homeStyles.infoText}>{labelText}</Text>
            <Text style={homeStyles.infoText}>{value}</Text>
        </View>
    );
}

const addNewElement = () => { }

const getTypeColor = (type) => {
    switch (type) {
        case "paint":
            return "#F36E4C";
        case "hardware":
            return "#C8B384";
        case "sanitory":
            return "#193C63";
        default:
            return "white";
    }
}

const filterList = (data, search, type) => {
    return data.filter(m => (m.type.indexOf(type) >= 0) && (m.name.toLowerCase().indexOf(search) >= 0));
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
                    mode="dropdown"
                    prompt="Type"
                    style={homeStyles.itemTypePicker}
                    onValueChange={(itemValue, itemIndex) =>
                        setItemType(itemValue.toLowerCase())
                    }>
                    <Picker.Item label="All" value="" />
                    <Picker.Item label="Paint" value="paint" />
                    <Picker.Item label="Hardware" value="hardware" />
                    <Picker.Item label="Sanitory" value="sanitory" />
                </Picker>
            </View>
            <FlatList style={homeStyles.listView}
                keyExtractor={item => item.id.toString()}
                data={filterList(lookup, searchText, searchItemType)} renderItem={({ item }) =>
                    <TouchableOpacity key={item.id} style={homeStyles.listItem}>
                        <View style={homeStyles.topInfo}>
                            <Image source={require("../../assets/saleCart.jpg")} style={homeStyles.logo} />
                            <Text style={homeStyles.itemName}>{item.name}</Text>
                            <Text style={[{ ...homeStyles.itemType }, { backgroundColor: getTypeColor(item.type.toLowerCase()) }]}>{item.type.toUpperCase()}</Text>
                        </View>
                        <View style={homeStyles.bottomInfo}>
                            {colDisplay("Cost Price", item.costPrice)}
                            {colDisplay("Cartage", item.cartage, homeStyles.leftBorder)}
                            {colDisplay("Total Cost Price", +item.costPrice + +item.cartage, homeStyles.leftBorder)}
                            {colDisplay("Selling Price", item.sellingPrice, homeStyles.leftBorder)}
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

