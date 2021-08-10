import { StatusBar } from 'expo-status-bar';
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Provider } from "react-redux"
import "react-native-gesture-handler"

import { store } from "./component/store/store"
import Home from "./component/Home"
import Form from "./component/Form"
import Users from "./component/Users"
import Api from "./component/Api"

const Stack = createStackNavigator()

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{title: "Home"}}
            />
            <Stack.Screen
              name="Form"
              options={{title: "Contact"}}
              component={Form}
            />
            <Stack.Screen
              name="Users"
              component={Users}
              options={{title: "Users"}}
            />
            <Stack.Screen
              name="Api"
              component={Api}
              options={{title: "Cloud"}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </React.Fragment>
  )
}
 
 export default App