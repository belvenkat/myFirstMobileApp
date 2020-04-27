import React from 'react';
import { StyleSheet, View, Text, Dimensions, Button, Alert, TouchableHighlight, Image, TextComponent } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function SecondUiSampleCard() {
    return (
        <View style={venkyStyles.container}>
            <View style={venkyStyles.mainContainer}>
                <View style={venkyStyles.mainContainerFirstLayer}>
                    <View style={venkyStyles.mainContainerFirstLayerTextView}>
                        <Text style={venkyStyles.textStyle}>    Ink.to.ipad</Text>
                    </View>
                    <View style={venkyStyles.mainContainerFirstLayerIconView}>
                        <Icon style={venkyStyles.iconStyles} name="gitlab" size={25}></Icon>
                    </View>
                </View>
                <View style={venkyStyles.mainContainerSecondLayer}>
                    <View style={venkyStyles.firstImage}>
                        <Image
                            style={venkyStyles.tinyLogo}
                            source={{
                                uri: 'https://en.numista.com/catalogue/photos/inde/3180-original.jpg',
                            }}
                        />
                    </View>
                    <View style={venkyStyles.secondImage}>
                        <Image
                            style={venkyStyles.tinyLogo}
                            source={{
                                uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png',
                            }}
                        />
                    </View>
                    <View style={venkyStyles.thirdImage}>
                        <Image
                            style={venkyStyles.tinyLogo}
                            source={{
                                uri: 'https://en.numista.com/catalogue/photos/inde/3205-original.jpg',
                            }}
                        />
                    </View>
                </View>
                <View style={venkyStyles.mainContainerThirdLayer}>
                    <Text style={venkyStyles.mainContainerThirdLayerTextStyle}>  One Ruppe         India         Two Ruppe</Text>
                </View>
                <View style={venkyStyles.mainContainerFourthLayer}>
                    <View style={venkyStyles.fourthLayerFirstContainer}>
                        <Icon style={venkyStyles.iconStyles} name="mouse-pointer" size={25}></Icon>
                        <Text style={venkyStyles.numberOfClicks}>   83</Text>
                        <Text style={venkyStyles.textStyle}>   Clicks</Text>
                    </View>
                    <View style={venkyStyles.fourthLayerSecondContainer}>
                        <Icon style={venkyStyles.iconStyles} name="share" size={25}></Icon>
                        <Text style={venkyStyles.numberOfClicks}>   2.3K</Text>
                        <Text style={venkyStyles.textStyle}>   Shares</Text>
                    </View>
                    <View style={venkyStyles.fourthLayerThirdContainer}>
                        <Icon style={venkyStyles.iconStyles} name="commenting-o" size={25}></Icon>
                        <Text style={venkyStyles.numberOfClicks}>       4</Text>
                        <Text style={venkyStyles.textStyle}>   Comments</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}


var venkyStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'coral',
        height: windowHeight,
        width: windowWidth
    },
    mainContainer: {
        height: 350,
        width: 350,
       backgroundColor: 'peachpuff'
    },
    mainContainerFirstLayer: {
        flexDirection: 'row',
        flex: 0.5,
       // backgroundColor: 'red'
    },
    mainContainerFirstLayerTextView: {
        flex: 1,
      //backgroundColor: 'yellow'
    },
    mainContainerFirstLayerIconView: {
        alignItems:'center',
        justifyContent:'center',
        flex: 0.3,
      //  backgroundColor: 'red'
    },
    mainContainerSecondLayer: {
        flexDirection: 'row',
        flex: 1,
       // backgroundColor: 'blue'
    },
    firstImage: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
       // backgroundColor: 'red'
    },
    secondImage: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
       // backgroundColor: 'tan'
    },
    thirdImage: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        //backgroundColor: 'lightblue'
    },
    mainContainerThirdLayer: {
        flex: 1,
       // backgroundColor: 'peachpuff'
    },
    mainContainerThirdLayerTextStyle: {
        fontSize: 21
    },
    mainContainerFourthLayer: {
        flexDirection: 'row',
        flex: 1,
      //  backgroundColor: 'yellow'
    },
    tinyLogo: {
        height: 100,
        width: 100,
        borderRadius: 100
    },
    fourthLayerFirstContainer: {
        flex: 1,
       // backgroundColor: 'red'
    },
    numberOfClicks: {
        fontStyle: 'italic',
        fontSize: 35
    },
    textStyle: {
        color:'gray',
        fontStyle: 'italic',
        fontSize: 20
    },
    iconStyles: {
        color: 'white'
    },
    fourthLayerSecondContainer: {
        flex: 1,
       // backgroundColor: 'blue'
    },
    fourthLayerThirdContainer: {
        flex: 1,
       // backgroundColor: 'tan'
    }
})