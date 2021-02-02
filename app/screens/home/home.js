import React, { useState } from 'react'
import { View, Text, Image, FlatList, TextInput, TouchableOpacity, Picker } from 'react-native'
import { homeStyles } from './homeStyles';
import { lookup } from './lookup';
import { categories, getCategoryTypeColor } from "../../static-data/category";

const colDisplay = (labelText, value, style) => {
    return (
        <View style={[homeStyles.priceInfo, style]}>
            <Text style={homeStyles.infoText}>{labelText}</Text>
            <Text style={homeStyles.infoText}>{value}</Text>
        </View>
    );
}

const addNewElement = () => { }

const updateElement = (element) => { }

const updateList = (item) => {
    if(item.id) {
        lookup.forEach(m => {
            if(m.id === item.id)
                m = item;
        })
    } else {
        var id = 1;
        lookup.forEach(m => {
            if(m.id && (m.id >= id))
                id = m.id + 1;
        });
        lookup.push({"id": id, ...item});
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
                    {categories.map(m => {return <Picker.Item key={m.value} label={m.label} value={m.value} />;})}
                </Picker>
            </View>
            <FlatList style={homeStyles.listView}
                keyExtractor={item => item.id.toString()}
                data={filterList(lookup, searchText, searchItemType)} renderItem={({ item }) =>
                    <TouchableOpacity key={item.id} style={homeStyles.listItem}> onPress={updateElement(item)}
                        <View style={homeStyles.topInfo}>
                            <Image source={require("../../assets/saleCart.jpg")} style={homeStyles.logo} />
                            <Text style={homeStyles.itemName}>{item.name}</Text>
                            <Text style={[{ ...homeStyles.itemType }, { backgroundColor: getCategoryTypeColor(item.type.toLowerCase()) }]}>{item.type.toUpperCase()}</Text>
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

