import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import axios from "axios"

const Api = () => {
    var [pageNav, setPageNav] = useState(1)
    var [pageTitle, setPageTitle] = useState("PAGE 1")
    var [apiItem, setApiItem] = useState([])

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users`)
        .then((item) => {
            var data = item.data
            var offset = 0
            if ( pageNav > 1 ) {
                offset = pageNav * 5 -5
            }
            setApiItem(
                [
                    {
                        firstName: data[0 + offset].name.split(` `)[0],
                        lastName: data[0 + offset].name.split(` `)[1],
                        id: data[0 + offset].id
                    },
                    {
                        firstName: data[1 + offset].name.split(` `)[0],
                        lastName: data[1 + offset].name.split(` `)[1],
                        id: data[1 + offset].id
                    },
                    {
                        firstName: data[2 + offset].name.split(` `)[0],
                        lastName: data[2 + offset].name.split(` `)[1],
                        id: data[2 + offset].id
                    },
                    {
                        firstName: data[3 + offset].name.split(` `)[0],
                        lastName: data[3 + offset].name.split(` `)[1],
                        id: data[3 + offset].id
                    },
                    {
                        firstName: data[4 + offset].name.split(` `)[0],
                        lastName: data[4 + offset].name.split(` `)[1],
                        id: data[4 + offset].id
                    },
                ]
            )
        }).catch((err) => {
            console.log(err);
        })
    }, [pageNav])

    const cloudFirstName = apiItem.map(item => {
        return(
            <Text key={item.id} style={{...styles.apiTextFirstName}}>
                {item.firstName}
            </Text>
        )
    })
    const cloudLastName = apiItem.map(item => {
        return(
            <Text key={item.id} style={{...styles.apiTextLastName}}>
                {item.lastName}
            </Text>
        )
    })

    const handlePageNext = (e) => {
        setPageNav(2)
        setPageTitle("PAGE 2")
    }
    const handlePageBack = () => {
        setPageNav(1)
        setPageTitle("PAGE 1")
    }

    return(
        <React.Fragment>
            <View style={{...styles.mainContainer}}>
                    <Text style={{...styles.titleText}}>Users from the CLOUD</Text>
                <View style={{...styles.apiContainerTitle}}>
                    <Text style={{...styles.apiTitleName}}>First Name ||| Last Name</Text>
                </View>
                <View style={{...styles.apiMainUserContainer}}>
                    <View style={{...styles.apiUserContainer}}>
                        {cloudFirstName} 
                    </View>
                    <View style={{...styles.apiUserContainer}}>
                        {cloudLastName}
                    </View>
                </View>
            </View>
            <View style={{...styles.buttonContainer}}>
                <View style={{...styles.navContainerTitle}}>
                    <Text style={{...styles.navTitle}}>{pageTitle}</Text>
                </View>
                <View style={{...styles.buttonNavContainer}}>
                    <TouchableOpacity onPress={handlePageBack} style={{...styles.buttonNav}}>
                        <Text style={{...styles.buttonNavText}}>
                            BACK
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlePageNext} style={{...styles.buttonNav}}>
                        <Text style={{...styles.buttonNavText}}>
                            NEXT
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "rgb(200, 100, 100)",
        justifyContent: "center",
    },
    buttonContainer: {
        backgroundColor: "rgb(200, 100, 100)",
        padding: 10,
        paddingLeft: 80,
        paddingRight: 80,
        paddingBottom: 200
    },
    buttonNav: {
        backgroundColor: "rgb(250, 150, 150)",
        borderWidth: 2,
        borderRadius: 15,
        padding: 5,
        margin: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
    },
    buttonNavContainer: {
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 15,
        marginTop: 20,
    },
    buttonNavText: {
        borderRadius: 10,
        fontSize: 25,
        fontWeight: "700",
    },
    navContainerTitle: {
        borderWidth: 0,
        paddingTop: 10,
    },
    navTitle: {
        backgroundColor: "whitesmoke",
        fontSize: 30,
        textAlign: "center",
        borderWidth: 2,
        borderRadius: 5,
        marginLeft: "15%",
        marginRight: "15%"
    },
    titleText: {
        textAlign: "center",
        padding: 10,
        margin: 10,
        fontSize: 30,
        color: "black",
        fontWeight: "700"
    },
    apiContainerTitle: {
        alignSelf: "center",
        flexDirection: "row",
    },
    apiMainUserContainer: {
        alignSelf: "center",
        flexDirection: "row",
    },
    apiUserContainer: {
        flexDirection: "column",
    },
    apiTitleName: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 25,
        color: "rgba(300, 300, 300, 1)",
        marginRight: 5,
        fontWeight: "700"
    },
    apiTextFirstName: {
        textAlign: "center",
        backgroundColor: "whitesmoke",
        color: "black",
        padding: 10,
        paddingRight: 20,
        paddingLeft: 20,
        margin: 5,
        marginBottom: 2,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 5,
        fontSize: 20,
        fontWeight: "700"
    },
    apiTextLastName: {
        textAlign: "center",
        backgroundColor: "whitesmoke",
        color: "black",
        padding: 10,
        paddingRight: 30,
        paddingLeft: 30,
        margin: 5,
        marginBottom: 2,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 5,
        fontSize: 20,
        fontWeight: "700"
    },
})

export default Api