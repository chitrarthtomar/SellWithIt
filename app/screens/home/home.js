import React from 'react'
import { ScrollView, View, Text, Image, FlatList } from 'react-native'
import { homeStyles } from './homeStyles';

const lookup = [{ "id": 1, "name": "test1", "type": "paint", "costPrice": "12.34", "cartage": 4, "sellingPrice": 20 }, { "id": 23, "name": "nails", "type": "hardware", "costPrice": "12.34", "cartage": "4", "sellingPrice": "70" }, { "id": 3, "name": "fsfds", "type": "sanitory", "costPrice": "16.34", "cartage": "4", "sellingPrice": "50" }, { "id": 4, "name": "commode seat ", "type": "sanitory", "costPrice": "14.34", "cartage": "4", "sellingPrice": "40" }, { "id": 6, "name": "asian paint", "type": "paint", "costPrice": "230.34", "cartage": "21", "sellingPrice": "250" }, { "id": 7, "name": "nerolac", "type": "paint", "costPrice": "332", "cartage": "22", "sellingPrice": "500" }, { "id": 24, "name": "polymer", "type": "paint", "costPrice": "12.34", "cartage": "22", "sellingPrice": "15" }];

const colDisplay = (labelText, value) => {
    return(
        <View style={homeStyles.priceInfo}>
            <Text>{labelText}</Text>
            <Text>{value}</Text>
        </View>
    );
}


const Home = () => {
    return (

        <View style={homeStyles.container}>
            <FlatList data={lookup} renderItem= {({item})=> 
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
        </View>
    );
}

export default Home

