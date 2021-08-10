import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const ButtonNav = (props) => {
    return(
        <React.Fragment>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={{...styles.linkTitle}}>
                    {props.link}
                </Text>
            </TouchableOpacity>
        </React.Fragment>
    )
}

const TextContent = (props) => {
    return(
        <Text style={props.style}>
            {props.text}
        </Text>
    )
}

const Home = ({navigation}) => {
    return (
        <React.Fragment>
            <View style={{...styles.container}}>
                <View style={{...styles.boxContainer}}>
                    <TextContent 
                        style={{...styles.textTitle}}
                        text="Welcome to my app!"
                    />
                    <TextContent 
                        style={{...styles.text}}
                        text="Browse the following things:"
                    />
                    <ButtonNav 
                        onPress={() => navigation.navigate("Users")}
                        link="Hardcoded users"
                    />
                    <ButtonNav 
                        onPress={() => navigation.navigate("Api")}
                        link="Users from the cloud"
                    />
                    <TextContent 
                        style={{...styles.text}}
                        text="And you can also..."
                    />
                    <ButtonNav 
                        onPress={() => navigation.navigate("Form")}
                        link="Email me!"
                    />
                    <TextContent 
                        style={{...styles.textTitle}}
                        text="Made by Oskar"
                    />
                </View>
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    boxContainer: {
        width: "100%",
        paddingTop: 50,
        paddingBottom: 300,
        backgroundColor: "rgb(200, 100, 100)"
    },  
    text: {
        fontSize: 25,
        textAlign: "center",
        marginBottom: 10,
    },
    textTitle: {
        fontSize: 35,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 50,
        color: "white"
    },
    linkTitle: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "700",
        color: "black",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 10,
        marginLeft: "10%",
        marginRight: "10%",
        marginBottom: 10,
        backgroundColor: "whitesmoke",
        padding: 5
    }
})

export default Home