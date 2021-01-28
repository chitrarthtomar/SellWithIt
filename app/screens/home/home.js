import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'

const lookup = [{ "id": 1, "name": "test1", "type": "paint", "costPrice": "12.34", "cartage": 4, "sellingPrice": 20 }, { "id": 23, "name": "nails", "type": "hardware", "costPrice": "12.34", "cartage": "4", "sellingPrice": "70" }, { "id": 3, "name": "fsfds", "type": "sanitory", "costPrice": "16.34", "cartage": "4", "sellingPrice": "50" }, { "id": 4, "name": "commode seat ", "type": "sanitory", "costPrice": "14.34", "cartage": "4", "sellingPrice": "40" }, { "id": 6, "name": "asian paint", "type": "paint", "costPrice": "230.34", "cartage": "21", "sellingPrice": "250" }, { "id": 7, "name": "nerolac", "type": "paint", "costPrice": "332", "cartage": "22", "sellingPrice": "500" }, { "id": 24, "name": "polymer", "type": "paint", "costPrice": "12.34", "cartage": "22", "sellingPrice": "15" }];


const Home = () => {
    return (
        <ScrollView>
            <ol>
                {lookup.map(element => {
                    return (<li key={element.id}>{element.name}</li>);
                })}
            </ol>
        </ScrollView>
    );
}

export default Home