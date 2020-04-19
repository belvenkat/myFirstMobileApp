import React from 'react';
import { StyleSheet,View, Text,Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function BoxCenter() {
    return (
      <View style={venkyStyles.container}>
          <View style={venkyStyles.centerBox}>

          </View>
      </View>
    );
  }

  var venkyStyles = StyleSheet.create({
    container:{
        justifyContent:'center',
        //alignItems:"center",
        height:windowHeight,
        width:windowWidth,
        backgroundColor:'orange'
    },
    centerBox:{
        backgroundColor:'green',
        width:windowWidth/2,
        height:50
    }
  })