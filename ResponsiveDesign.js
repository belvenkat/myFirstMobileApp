import React from "react"
import { Text, View, StyleSheet, Image, Dimensions, ImageBackground, Button, alert, Alert, TouchableHighlight, TouchableOpacity } from "react-native"
import pedData from './data.json'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

function ResponsiveDesign() {
    return (
        <View style={venkyStyles.mainContainer}>
           <Text style={venkyStyles.text}>Width: {windowWidth}</Text>
           <Text style={venkyStyles.text}>Height: {windowHeight}</Text>
        </View>
    )
}


export default ResponsiveDesign

var venkyStyles

var mobileStyles = StyleSheet.create({
    mainContainer :{
        height: 100,
        width: windowWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'coral'
    },
    text :{
        color: 'green'
    }
})

var tabletStyles =  StyleSheet.create({
    mainContainer :{
        //height: 736,
        //width: 414,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'violet'
    },
    text :{
        color: 'red'
    }
})

if(windowWidth > 1000){
    venkyStyles = tabletStyles
}else if(windowWidth < 1000 && windowWidth >500 ){
    venkyStyles = mobileStyles
}else if(windowWidth <500){
    venkyStyles = mobileStyles
}