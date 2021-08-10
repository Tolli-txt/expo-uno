import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from "react-native"
import { useSelector } from "react-redux"

const Users = () => {
    var [name, setName] = useState()
    var [localUser, DisplayLocalUser] = useState()
    
    const data = useSelector(state => state.data)
    const dataValue = []

    const handleSubmit = () => {
        for (const [key, value] of Object.entries(data)) {
            dataValue.push(value)
        }
        const value = dataValue.find((item) => item.name === name)
        if (typeof value === "undefined") {
            return(
                DisplayLocalUser("User does not exist, please try again.")
            )
        }
        else if (name === value.name) {
            DisplayLocalUser(
                `${value.name} is ${value.age} years old, and their id is ${value.id}.`
            )
        }
    }

    return (
        <React.Fragment>
            <View style={{...styles.listContainer}}>
                <Text style={{...styles.labelTitle}}>
                    Local User Output
                </Text>
                    <SafeAreaView style={{...styles.itemContainer}}>
                        <Text style={{...styles.localTitle}}>
                            {localUser}
                        </Text>
                    </SafeAreaView>
                <ScrollView>
                    <View>
                        <Text style={{...styles.labelTitle}}>
                            Searchbar
                        </Text>
                        <TextInput 
                            style={{...styles.input}}
                            placeholder="Enter a name here, only valid ones will show up."
                            placeholderTextColor="gray"
                            onChangeText={setName}
                            value={name}
                        />
                        <TouchableOpacity 
                            style={{...styles.button}}
                            onPress={handleSubmit}
                        >
                        <Text style={{...styles.buttonText}}>
                            SEARCH
                        </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        borderRadius: 10,
        backgroundColor: "white",
        padding: 10,
        marginBottom: 30
    },
    listContainer: {
        backgroundColor: "rgb(200, 100, 100)",
        padding: 10,
        paddingTop: 20,
        paddingBottom: 100,
    },  
    localTitle: {
        padding: 10,
        fontSize: 20,
        fontWeight: "500"
    },
    input: {
        fontSize: 15,
        padding: 15,
        borderRadius: 10,
        backgroundColor: "white",
    },
    button: {
        marginTop: 30,
        borderRadius: 10,
        borderWidth: 2,
        padding: 10,
        backgroundColor: "rgb(250, 150, 150)",
        marginLeft: "25%",
        marginRight: "25%"
    },
    buttonText: {
        textAlign: "center",
        color: "black",
        fontWeight: "700",
        fontSize: 30,
        letterSpacing: 1
    },
    labelTitle: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "700",
        color: "black",
        paddingBottom: 5,
    }
})

export default Users