import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, Picker } from 'react-native'
import { editStyles } from './editStyle';
import { categories, getCategoryTypeColor } from "../../static-data/category";


const InputWithTitle = (labelText, initial, funToUpdate) => {
    return (
        <View>
            <Text style={editStyles.inputTitle}>{labelText}</Text>
            <TextInput placeholder="Enter value... "
                    value = {initial.value}
                    onChangeText={(value) => {
                        var a = {};
                        a[initial.key] = value;
                        funToUpdate({...a});
                    }}
                    style={editStyles.inputValue}></TextInput>
        </View>
    );
};

const DropDownInputWithTitle = (labelText, initial, possibleValues, funToUpdate) => {
    return (
        <View>
            <Text style={editStyles.inputTitle}>{labelText}</Text>
            <Picker
                    selectedValue={initial.value}
                    mode="dropdown"
                    prompt="Type"
                    style={editStyles.itemTypePicker}
                    onValueChange={(itemValue, itemIndex) => {
                        var a = {};
                        a[initial.key] = itemValue.toLowerCase();
                        funToUpdate({...a});
                    }
                }>
                    {possibleValues.map(m => {return <Picker.Item key={m.value} label={m.label} value={m.value} />;})}
                </Picker>
        </View>
    );
};

const updateAndGoHome = (item, updateToMainList) => {
    if(item){
        updateToMainList(item);
    }
    //goHome();
};

const Edit = ({item, updateToMainList}) => {
    const [newItem, setNewItem] = useState({...item});
    return (
        <View style={editStyles.container}>
            <InputWithTitle labelText="Name" initial={{...newItem.name}} funToUpdate={setNewItem} />
            <DropDownInputWithTitle labelText="Type" initial={{...newItem.type}} possibleValues = {categories} funToUpdate={setNewItem} />
            <InputWithTitle labelText="Cost Price" initial={{...newItem.costPrice}} funToUpdate={setNewItem} />
            <InputWithTitle labelText="Cartage" initial={{...newItem.cartage}} funToUpdate={setNewItem} />
            <InputWithTitle labelText="Selling Price" initial={{...newItem.sellingPrice}} funToUpdate={setNewItem} />
            <View>
                <TouchableOpacity onPress={updateAndGoHome()}>Cancel</TouchableOpacity>
                <TouchableOpacity onPress={updateAndGoHome(newItem, updateToMainList)}>{<Text>newItem.id?"Update":"Add"</Text>}</TouchableOpacity>
            </View>
        </View>
    );
}

export default Edit