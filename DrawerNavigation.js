import React from 'react'
import { createDrawerNavigator} from "@react-navigation/drawer"
import TabNavigator from './TabNavigator'
import ProfileScreen from "../screens/Profile"
import { render } from 'react-dom';
import { Alert } from 'react-native';

const drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  
  componentDidMount(){
      let theme
firebase
.database()
.ref("/users/" + firebase.auth().currentUser.uid)
.component("value", function (snapshot){
})   
    this.setState({ light_theme: theme ==="light" ? true : false})

}
  
render(){
    let props = this.props;
    return(
        <Drawer.Navigator
drawerContentOptions={{
    activeTintColor:"e91e63"
    inactiveTintColor:this.setState.light_theme ? "black" : "white".light_theme,
    itemStyle: {marginVertical: 5}
}}
      drawerContent={props => <CustomSidebarMenu {...props} />}
    >
        <Drawer.Screen
        name="Home"
        component={StackNavigator}
        options={{ unmountOnBlur : true }}
        />
        <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{unmountOnBlur: true}}
        />
        <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{ unmountOnBlur:true }}
        />
    </Drawer.Navigator>

   async addPost(){
       if(
           this.state.caption
       ) {
           let postData = {
               preview_image: this.state.preview_image,
               caption: this.state.caption,
               author: firebase.auth().currentUser.dispalyName,
               created_on: new Date(),
               author_uid:firebase.auth().currentUser.uid,
               profile_image:this.state.profile_image,
               likes:0
           };
           await firebase
           .database()
           .ref(
               "/posts/" + 
               Math.random()
               .toString(36)
               .slice(2)
           )
           .set(postData)
           .then(function (snapshot) { })
           this.props.setUpdateToTrue()
           this.props.navigation.navigate("Feed")
       } else {
           Alert.alert(
               "Error",
             "All fields are required!",
             [{ text: "OK", onPress: () => console.log("OK Pressed") }],
             {cancelable:false}
           )
       }
   }
      )
}
export default DrawerNavigator