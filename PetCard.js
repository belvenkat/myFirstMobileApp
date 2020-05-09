import React from "react"
import { Text, View, StyleSheet, Image, Dimensions, ImageBackground, Button, alert, Alert, TouchableHighlight, TouchableOpacity } from "react-native"
import pedData from './data.json'
const windowWidth = 414
const windowHeight = 736

function PetCard() {
    return (
        <View>

            <ImageBackground
                style={styles.appBackGroundImage}
                source={{
                    uri: pedData.backGroundPhotoUrl,
                }}
            >
                <View style={styles.petCardBackGroundLayer}>
                    <View style={styles.petCardFitstayer}>
                        <View>
                            <Image style={styles.petImage}
                                source={{
                                    uri: pedData.petPhotoUrl
                                }}>
                            </Image>
                        </View>
                        <View style={styles.petNameStyles}>
                            <Text style={styles.boldTextStyles}>Name :- {pedData.Name}</Text>
                        </View>
                        <Image
                            style={styles.boneImageStyles}
                            source={{
                                uri: pedData.bone
                            }}>
                        </Image>
                    </View>
                    <View style={styles.petCardSecondLayer}>
                        <View style={styles.petDetailsStyle}>
                            <Text style={styles.boldTextStyles}> Breed:{pedData.Breed}</Text>
                            <Text style={styles.boldTextStyles}> Age: {pedData.age}</Text>
                            <Text style={styles.boldTextStyles}> LifeSpan:{pedData.lifeSpan}</Text>
                            <Text style={styles.boldTextStyles}> Gender: {pedData.gender}</Text>
                            <Text style={styles.boldTextStyles}> Favorite Food: {pedData.favoriteFood}</Text>
                        </View>
                    </View>
                    <View style={styles.petCardThirdLayer}>
                        <View style={styles.buttonStyle}>
                            <Text style={styles.thirdLayerTextstyle}>Click here for Vaccination Details</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}


export default PetCard

var styles = StyleSheet.create({
    appBackGroundImage: {
        height: 736,
        width: 414
    },
    petCardBackGroundLayer: {
        marginTop: 15,
        marginLeft: 15,
        height: 300,
        width: windowWidth - 30,
        backgroundColor: '#FFBC7D'
    },
    petCardFitstayer: {
        flexDirection: 'row',
        flex: 1,
    },
    petNameStyles: {
        marginLeft: 100,
        marginTop: 10
    },
    boldTextStyles:{
        fontWeight:'bold'
    },
    boneImageStyles: {
        position: 'absolute',
        height: 90,
        width: 90,
        left: 195,
        top: 15
    },
    petCardSecondLayer: {
        borderTopWidth: 1,
        flex: 1,
    },
    petDetailsStyle:{
        marginTop:5
    },
    petCardThirdLayer: {
        alignItems:'center',
        justifyContent:"center",
        borderTopWidth:1,
        flex: 1,
    },
    buttonStyle:{
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:250,
        borderRadius:25,
        borderWidth:2
    },
    petImage: {
        marginTop: 5,
        marginLeft: 5,
        height: 90,
        width: 90,
        borderRadius: 45
    }
})