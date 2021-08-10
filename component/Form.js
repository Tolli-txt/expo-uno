import React, { useState } from "react"
import { View, Text, TouchableOpacity, TextInput, Alert, ScrollView, StyleSheet } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

const InputSection = (props) => {
    return(
        <View style={{...styles.inputSection}}>
            <Text style={{...styles.label}}>
                {props.labelTitle}
            </Text>
            <TextInput
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder={props.inputTitle}
                type={props.type}
                dataDetectorTypes={props.dataDetectorTypes}
                keyboardType={props.keyboardType}
                placeholderTextColor={props.placeholderTextColor}
                style={{...styles.input}} 
            />
        </View>
    )
}

const TextboxSection = (props) => {
    return(
        <View style={{...styles.inputSection}}>
            <Text style={{...styles.label}}>
                {props.labelTitle}
            </Text>
            <TextInput
                onChangeText={props.onChangeText}
                value={props.value}
                multiline={true}
                numberOfLines={4}
                placeholder={props.inputTitle}
                type={props.type}
                dataDetectorTypes={props.dataDetectorTypes}
                keyboardType={props.keyboardType}
                placeholderTextColor={props.placeholderTextColor}
                style={{...styles.textArea}} 
            />
        </View>
    )
}

const SubmitButton = (props) => {
    return(
        <View style={{...styles.inputSection}}>
            <TouchableOpacity 
                onPress={props.onPress}
                style={{...styles.button}}
            >
                <Text style={{...styles.buttonTitle}}>
                    {props.buttonTitle}
                </Text>
            </TouchableOpacity>    
        </View>
    )
}

const Form = () => {
    var [name, SetName] = useState("")
    var [email, SetEmail] = useState("")
    var [message, SetMessage] = useState("")

    var data = {
        name: name,
        email: email,
        message: message
    } 
    //console.log(data) // for output!
    
    function FailMessage(failMessage) {
        Alert.alert( failMessage )
    }

    function SuccessMessage(successMessage) {
        Alert.alert( successMessage )
    }

    const HandleSubmit = () => {
        CheckIfInputFieldsEmpty()
        if (name.length != 0 && email.length != 0 && message != 0) {
            ClearInputField()
        }
    }

    function CheckIfInputFieldsEmpty() {
        if (name === "") {
            FailMessage("Please input your name.")
        } 
        else if (email === "") {
            FailMessage("Please input a valid email.")
        }
        else if (message === "") {
            FailMessage("Please leave a message.")
        }
        else {
            SaveDataToArray()
        }
    }

    async function SaveDataToArray() {
        try {
            const jsonValue = JSON.stringify(data)
            await AsyncStorage.setItem("user", jsonValue)
            SuccessMessage(`Thank you ${name} for your message! It is appreciated! :)`)
            console.log(jsonValue); // Check output value!
        } catch (e) {
            // console.log("Failed to save data to array!")
        }
    }
    
    const returnData = async () => {
        try {
            const data = await AsyncStorage.getItem("user")
            if (data !== null) {
                console.log(`DATA: ${data}`)
            } 
        } catch (err) {
            console.log("ERROR RETRIEVING DATA")
        }
    }
    
    function ClearInputField() {
        SetName("")
        SetEmail("")
        SetMessage("")
    }

    returnData() // Logs the data from the form, simple as that.

    return (
        <React.Fragment>
            <ScrollView scrollEnabled={true}>
                <View style={{...styles.form}}>
                    <View>
                        <InputSection 
                            labelTitle="Name"
                            inputTitle="Your name"
                            type="name"
                            onChangeText={SetName}
                            value={name}
                            placeholderTextColor="gray"
                        />
                        <InputSection 
                            labelTitle="Email"
                            inputTitle="yourEmail@coolestDomainEver.com"
                            type="email"
                            keyboardType="email-address"
                            onChangeText={SetEmail}
                            value={email}
                            placeholderTextColor="gray"
                        />
                        <TextboxSection 
                            labelTitle="Message"
                            inputTitle="Please write your message here."
                            onChangeText={SetMessage}
                            value={message}
                            placeholderTextColor="gray"
                        />
                        <SubmitButton 
                            onPress={HandleSubmit}
                            buttonTitle="SEND"
                        />
                    </View>
                </View>
            </ScrollView>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    form: {
        paddingBottom: 60,
        backgroundColor: "rgb(200, 100, 100)",
    },
    formTitle: {
        padding: 10,
        fontSize: 40,
        textAlign: "center",
        color: "white",
    },
    label: {
        textAlign: "center",
        marginTop: 5,
        marginBottom: 5,
        fontSize: 30,
        fontWeight: "700",
        color: "black",
    },
    input: {
        padding: 10,
        fontSize: 20,
        borderRadius: 10,
        backgroundColor: "white",
    },
    inputSection: {
        margin: "2%"
    },
    textArea: {
        fontSize: 20,
        borderRadius: 10,
        padding: 20,
        marginBottom: 10,
        backgroundColor: "white",
        textAlign: "center",
    },
    button: {
        borderWidth: 2,
        padding: 5,
        borderRadius: 15,
        backgroundColor: "rgb(250, 150, 150)",
        borderColor: "black",
        marginLeft: "25%",
        marginRight: "25%"
    },
    buttonTitle: {
        textAlign: "center",
        letterSpacing: 3,
        fontSize: 40,
        fontWeight: "700",
        color: "black",
    }
})

export default Form