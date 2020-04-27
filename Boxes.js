import React from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView,ActivityIndicator} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;












export default function Boxes() {
    return (
        <View>
            <View style={venkyStyles.firstLayer}>
                <View style={venkyStyles.topLeftContainer}>
                    <View style={venkyStyles.topLeftContainerRightBox}>
                        <View></View>
                        <View></View>
                    </View>

                    <View></View>
                    <View></View>
                </View>


                <View style={venkyStyles.topRightContainer}>
                    <View></View>
                    <View></View>
                    <View></View>
                    <View></View>
                    <View></View>
                </View>
            </View>



            <View style={venkyStyles.secondLayer}>
                <View></View>
                <View></View>
                <View></View>
                <View></View>
                <View></View>

            </View>


            <View style={venkyStyles.thirdLayer}>
                <View style={venkyStyles.bottomLeftContainer}>
                    <View></View>
                    <View></View>
                    <View></View>
                    <View></View>
                    <View></View>
                </View>
                <View style={venkyStyles.bottomRightContainer}>
                    <View></View>
                    <View></View>
                    <View></View>
                    <View></View>
                    <View></View>
                </View>
            </View>


        </View>




    );
}

var venkyStyles = StyleSheet.create({
    firstLayer: {
        flexDirection: 'row'
    },
    topLeftContainer: {
        backgroundColor: 'tan',
        height: windowHeight / 3,
        width: windowWidth / 2
    },
    topLeftContainerRightBox: {
        alignItems: 'flex-start'
        // justifyContent: ''
    },
    topLeftContainerLeftBox: {},

    topRightContainer: {
        backgroundColor: 'peachpuff',
        height: windowHeight / 3,
        width: windowWidth / 2
    },
    secondLayer: {
        backgroundColor: 'coral',
        height: windowHeight / 3,
    },
    thirdLayer: {
        flexDirection: 'row'
    },
    bottomLeftContainer: {
        backgroundColor: 'peachpuff',
        height: windowHeight / 3,
        width: windowWidth / 2
    },
    bottomRightContainer: {
        backgroundColor: 'tan',
        height: windowHeight / 3,
        width: windowWidth / 2
    },
    box: {
        height: 50,
        width: 50,
        backgroundColor: 'black'
    },


})