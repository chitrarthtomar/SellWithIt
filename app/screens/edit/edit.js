import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, Picker } from 'react-native'
import { editStyles } from './editStyle';
import { categories, getCategoryTypeColor } from "../../static-data/category";


const InputWithTitle = (props) => {
    const {labelText, intialKey, initialValue, funToUpdate} = props;
    return (
        <View style={editStyles.inputDetail}>
            <Text style={editStyles.inputTitle} >{labelText}</Text>
            <TextInput placeholder="Enter value... "
                    defaultValue= {initialValue}
                    onChangeText={(value) => {
                        var temp = {};
                        temp[intialKey] = value;
                        funToUpdate(pre => {return { ...pre, ...temp}});
                    }}
                    style={editStyles.inputValue}></TextInput>
        </View>
    );
};

const DropDownInputWithTitle = (props) => {
    const {labelText, intialKey, initialValue, possibleValues, funToUpdate} = props
    return (
        <View style={editStyles.inputDetail}>
            <Text style={editStyles.inputTitle}>{labelText}</Text>
            <Picker
                    selectedValue={initialValue}
                    mode="dropdown"
                    prompt="Type"
                    style={editStyles.itemTypePicker}
                    onValueChange={(itemValue, itemIndex) => {
                        var temp = {};
                        temp[intialKey] = itemValue;
                        funToUpdate(pre => {return { ...pre, ...temp}});
                    }
                }>
                    {possibleValues.map(m => (<Picker.Item key={m.value} label={m.label} value={m.value} />))}
                </Picker>
        </View>
    );
};

const updateAndGoHome = (item, updateToMainList) => {
    if(item&&updateToMainList){
        updateToMainList(item);
    }
    //goHome();
    console.log(item, "from here");
};

const Edit = ({item, updateToMainList}) => {
    const [newItem, setNewItem] = useState({
        name: "commode seat ",
        type: "paint",
        costPrice: "14.34",
        cartage: "4",
        sellingPrice: "40",
    });

    return (
        <View style={editStyles.container}>
            <Text style={editStyles.titleLabel}>{(newItem.id?"Update":"Add")+ " details for the product"}</Text>
            <InputWithTitle labelText="Name" intialKey="name" initialValue={newItem.name} funToUpdate={setNewItem} />
            <DropDownInputWithTitle labelText="Type" intialKey="type" initialValue={newItem.type} possibleValues = {categories} funToUpdate={setNewItem} />
            <InputWithTitle labelText="Cost Price" intialKey="costPrice" initialValue={newItem.costPrice} funToUpdate={setNewItem} />
            <InputWithTitle labelText="Cartage" intialKey="cartage" initialValue={newItem.cartage} funToUpdate={setNewItem} />
            <InputWithTitle labelText="Selling Price" intialKey="sellingPrice" initialValue={newItem.sellingPrice} funToUpdate={setNewItem} />
            <View style={editStyles.buttonArea}>
                <TouchableOpacity style={editStyles.addButton} onPress={() => updateAndGoHome(newItem, updateToMainList)}>{<Text style={editStyles.buttonText}>{newItem.id?"Update":"Add"}</Text>}</TouchableOpacity>
                <TouchableOpacity style={editStyles.cancelButton} onPress={() => updateAndGoHome()}><Text style={editStyles.buttonText}>Cancel</Text></TouchableOpacity>
            </View>
        </View>
    );
}

export default Edit