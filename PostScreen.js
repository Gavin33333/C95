import React from 'react';
import { Text, View, StyleSheet, SnapshotViewIOS, unstable_batchedUpdates } from 'react-native';
import { Component } from 'react/cjs/react.production.min';

export default class PostScreen extends Component{
    renderItem = ({item:post}) => {
        return <PostCard post={post} navigation={this.props.navigation}/>
 
 fetchUser = () => {
     let theme;
     firebase
     .database()
     .ref("/users/" + firebase.auth().currentUser.uid)
     .Component("value", (snapshot) => {
         theme = snapshot.val().current_theme
         this.setState({ light_theme: theme ="light"})
     })
 }
 
    }
}

const styles = StyleSheet.create({
postCardLight:{
    margin: RFValue(20),
     backgroundColor:"#eaeaea",
     borderRadius:RFValue(20)
},
authorNameText: {
    color:"white",
    fontSize: RFValue(20)
},
authorNameTextLight:{
    color:"black",
    fontSize:RFValue(20)
}

})