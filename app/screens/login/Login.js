import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require("../../assets/saleCart.jpg")} style={styles.logo} />
                <Text style={styles.logoText}>SellWithIt</Text>
            </View>
            <View style={styles.socialBar}>
                <Text onPress={() => { console.log("facebook login") }} style={[styles.socialText, { backgroundColor: "#1A559D", color: "white" }]}>Login With Facebook</Text>
                <Text onPress={() => { console.log("google login") }} style={[styles.socialText, { backgroundColor: "red", color: "white" }]}>Login With Google</Text>
                <Text onPress={() => { console.log("mail login") }} style={[styles.socialText]}>Login With Email</Text>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightseagreen"
    },
    logoContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        height: 60,
        width: 60,
        borderRadius: 80,
        resizeMode: "contain"
    },
    logoText: {
        fontSize: 30,
        fontFamily: "normal",

    },
    socialBar: {
        backgroundColor: "white",
        width: "100%",
        alignItems: "center"
    },
    socialText: {
        width: "100%",
        height: 35,
        textAlign: "center",
        textAlignVertical: "center",
        borderWidth: 1,
    }
})
