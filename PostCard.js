import React from 'react';
import { Text, View, RFValue, IonIcons, StyleSheet } from 'react-native';
import { Component } from 'react/cjs/react.production.min';

export default class CreatePostCard extends Component{
    render(){
        return(
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.authorContainer}>
                    <Image
                    source={require('../assest/profile_img.png')}
                    style={styles.profileImage}
                    ></Image>
                </View>
                <View style={styles.authorNameContainer}>
                    <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                </View>
            </View>
            <Image source={require("../assets/post.jpeg")} style={styles.postImage}/>
            <View style={styles.captionContainer}>
                <Text style={styles.captionText}>
                    {this.props.post.caption}
                    </Text>
            </View>
            <View style={styles.actionContainer}>
                <View style={styles.likeButton}>
                    <IonIcons name={"heart"} size={RFValue(30)} color={"white"}/>
                <Text style={styles.likeText}>12k</Text>
                </View>
            </View>
        </View>
            )
    }
}