import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EEF0F3",
    },
    listItem: {
        flex: 1,
        flexDirection: "column",
        padding: "10px",
        borderColor: "D8DDE1",
        borderWidth: "1px",
        marginVertical: "2px",
        backgroundColor: "white",
    },
    listView: {
    },
    topInfo: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: "1px",
        paddingBottom: "5px",
        borderColor: "D8DDE1",
    },
    bottomInfo: {
        marginTop: "5px",
        flexDirection: "row",
        alignItems: "center",
        display: "flex",
        justifyContent: "space-evenly",
    },
    priceInfo: {
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: "10px",
        // borderRightWidth: "1px",
        // borderLeftWidth: "1px",
        borderColor: "D8DDE1",
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
        fontWeight: "500",
        color: "#585D61",
    },
    searchBar: {
        fontSize: 24,
        margin: 10,
        width: '80%',
        height: 50,
        borderRadius: "50px",
        backgroundColor: 'white',
        paddingLeft: "10px",
      },
      infoText: {
        color: "#585D61",
      },
      scrollView: {
          height: "90%",
          width: "90%",
      },
});
