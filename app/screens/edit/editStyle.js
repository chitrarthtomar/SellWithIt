import { StyleSheet } from 'react-native';

export const editStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: "90%",
        alignItems: "center",
        backgroundColor: "#EEF0F3",
        paddingTop: 20,
        fontFamily: "Roboto",
        flexDirection: "column",
    },
    titleLabel: {
        fontSize: 25,
        fontWeight: "800",
    },
    inputTitle: {
        fontWeight: "600",
        fontSize: 18,
    },
    inputValue: {
        borderWidth: 1,
        padding: 2,
        paddingLeft: 5,
        marginTop: 5,
    },
    itemTypePicker: {
        borderWidth: 1,
        padding: 2,
        paddingLeft: 5,
        marginTop: 5,
        width: "100%"
    },
    buttonArea: {
        flexDirection: "row",
        alignItems:"flex-end",
    },
    cancelButton: {
        borderWidth: 1,
        margin: 20,
        padding: 3,
        backgroundColor: "red",
        color: "white",
    },
    addButton: {
        borderWidth: 1,
        margin: 20,
        padding: 3,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 15,
        
    },
    inputDetail: {
        width: "90%",
        marginTop: 15,
    },
});
