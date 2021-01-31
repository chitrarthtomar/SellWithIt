import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EEF0F3",
        paddingTop: 10,
    },
    listItem: {
        flex: 1,
        flexDirection: "column",
        padding: 10,
        borderColor: "#D8DDE1",
        borderWidth: 1,
        marginVertical: 2,
        backgroundColor: "white",
        borderRadius: 10,
        marginHorizontal: 10
    },
    listView: {
        // paddingBottom: 10,
    },
    topInfo: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        paddingBottom: 5,
        borderColor: "#D8DDE1",
    },
    bottomInfo: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
        display: "flex",
        justifyContent: "space-evenly",
    },
    priceInfo: {
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    leftBorder: {
        borderLeftWidth: 1,
        borderColor: "#D8DDE1",
    },
    logo: {
        height: 30,
        width: 30,
        borderRadius: 80,
        resizeMode: "contain",
        marginRight: 10,
        marginLeft: 5
    },
    itemName: {
        fontSize: 20,
        fontFamily: "monospace",
        fontWeight: "500",
        color: "#585D61",
        flex: 1,
        flexWrap: 'wrap'
    },
    searchArea : {
        flexDirection: "row",
    },
    searchBar: {
        fontSize: 24,
        margin: 10,
        width: '70%',
        height: 50,
        borderRadius: 50,
        backgroundColor: 'white',
        paddingLeft: 10,
    },
    itemTypePicker: { 
        height: 50, 
        width: 20,
        marginLeft: 5,
    },
    infoText: {
        color: "#585D61",
    },
    scrollView: {
        height: "90%",
        width: "90%",
    },
    itemType: {
        borderWidth: 1,
        margin: 10,
        padding: 5,
        borderRadius: 15,
        fontSize: 10,
    },
    addButton: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        position: 'absolute',
        bottom: 12,
        right: 12,
        height: 60,
        backgroundColor: 'red',
        borderRadius: 70,
    },
    plusSign: {
        fontSize: 42,
        color: "white",
    },
});
