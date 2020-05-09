import React from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function BoxCenter() {
  return (
    <View>
      <View style={venkyStyles.topContainer}>
        <View style={venkyStyles.topLeft}>
          <View style={venkyStyles.box}></View>
        </View>
        <View style={venkyStyles.topRight}>
          <View style={venkyStyles.box}></View>
        </View>
      </View>

      <View style={venkyStyles.middleContainer}>
        <View style={venkyStyles.box}></View>
      </View>

      <View style={venkyStyles.bottomContainer}>
        <View style={venkyStyles.bottomLeft}>
          <View style={venkyStyles.box}></View>
        </View>
        <View style={venkyStyles.bottomRight}>
          <View style={venkyStyles.box}></View>
        </View>
      </View>
    </View>




  );
}

var venkyStyles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    backgroundColor: 'orange',
    height: windowHeight / 3
  },
  topLeft: {
    flex: 1,
    backgroundColor: 'tan'
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: 'black'
  },
  topRight: {
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: 'peachpuff'
  },
  middleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'coral',
    height: windowHeight / 3
  },
  bottomContainer: {
    flexDirection: "row",
    backgroundColor: 'peachpuff',
    height: windowHeight / 3
  },
  bottomLeft: {
    justifyContent: 'flex-end',
    flex: 1,
    backgroundColor: 'tan'
  },
  bottomRight: {
    justifyContent:'flex-end',
    alignItems:'flex-end',
    flex: 1,
    backgroundColor: 'lightblue'
  },

})