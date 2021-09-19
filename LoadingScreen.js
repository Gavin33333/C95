import React, {Component} from "react";
import { ViewBase, ActivityIndicator } from "react-native";
import firebase from "firebase"
import DashboardScreen from "./DashboardScreen";

export default class LoadingScreen extends Component{
    
    componentDidMount(){
        this.checkIfLoggedIn()
    }

    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate('DashboardScreen')
            } else {
                this.props.navigation.navigate('LoginScreen')
            }
        })
        
    }

    render(){
        return(
            <View
            style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center"
            }}>
                <ActivityIndicator size="large"/>
            </View>
        )
    }
}