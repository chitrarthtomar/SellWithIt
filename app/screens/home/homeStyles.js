import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "moccasin"
    },
    listItem: {
        flex: 1,
        flexDirection: "column",
        padding: "10px",
        borderColor: "cadetblue",
        borderWidth: "1px",
        marginVertical: "2px",
    },
    topInfo: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: "1px",
        paddingBottom: "5px",
        borderColor: "darkcyan",
    },
    bottomInfo: {
        marginTop: "5px",
        flexDirection: "row",
        alignItems: "center",
    },
    priceInfo: {
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: "10px",
        borderRightWidth: "1px",
        borderLeftWidth: "1px",
        borderColor: "darkcyan",
    },
    logo: {
        height: 30,
        width: 30,
        borderRadius: 80,
        resizeMode: "contain",
        marginRight: "10px",
        marginLeft: "5px"
    },
    itemName: {
        fontSize: "20px",
        fontFamily: "monospace",
        fontWeight: "500"
    },
});
