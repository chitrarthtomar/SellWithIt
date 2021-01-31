import React, { useState } from 'react'
import { ScrollView, View, Text, Image, FlatList, TextInput } from 'react-native'
import { homeStyles } from './homeStyles';
import { lookup } from './lookup';

const colDisplay = (labelText, value) => {
    return (
        <View style={homeStyles.priceInfo}>
            <Text style={homeStyles.infoText}>{labelText}</Text>
            <Text style={homeStyles.infoText}>{value}</Text>
        </View>
    );
}

const filterList = (data, search) => {
    return data.filter(m => m.name.toLowerCase().indexOf(search) >= 0);
}

const Home = () => {
    const [searchText, setSearchText] = useState("");
    return (
            <View style={homeStyles.container}>
                <TextInput placeholder="Search here..." onChangeText={(search) => setSearchText(search.toLowerCase())} style={homeStyles.searchBar}></TextInput>
                {/* <ScrollView style={homeStyles.scrollView}> */}
                <FlatList style={homeStyles.listView} keyExtractor={item => item.id.toString()} data={filterList(lookup, searchText)} renderItem={({ item }) =>
                    <View key={item.id} style={homeStyles.listItem}>
                        <View style={homeStyles.topInfo}>
                            <Image source={require("../../assets/saleCart.jpg")} style={homeStyles.logo} />
                            <Text style={homeStyles.itemName}>{item.name}</Text>
                        </View>
                        <View style={homeStyles.bottomInfo}>
                            {colDisplay("CostPrice", item.costPrice)}
                            {colDisplay("Cartage", item.cartage)}
                            {colDisplay("TotalCostPrice", +item.costPrice + +item.cartage)}
                            {colDisplay("SellingPrice", item.sellingPrice)}
                        </View>
                    </View>
                } />
                {/* </ScrollView> */}
            </View>
    );
}

export default Home

