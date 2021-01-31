import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EEF0F3",
        paddingTop: 10,
        marginBottom: 40,
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
        paddingBottom: 10,
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
        // borderRightWidth: 1,
        // borderLeftWidth: 1,
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
    },
    searchBar: {
        fontSize: 24,
        margin: 10,
        width: '80%',
        height: 50,
        borderRadius: 50,
        backgroundColor: 'white',
        paddingLeft: 10,
    },
    infoText: {
        color: "#585D61",
    },
    scrollView: {
        height: "90%",
        width: "90%",
    },
});
