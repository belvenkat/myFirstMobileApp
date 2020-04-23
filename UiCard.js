import React from 'react';
import { StyleSheet, View, Text, Dimensions, Button, Alert, TextComponent, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function UiCard() {
    return (
        <View style={venkyStyles.box}>
            <View style={venkyStyles.container}>
                <View style={venkyStyles.detailsContainer}>
                    <View style={venkyStyles.firstView}>
                        <View style={venkyStyles.imageView}>
                            <Image
                                style={venkyStyles.tinyLogo}
                                source={{
                                    uri: 'https://d1kkg0o175tdyf.cloudfront.net/widget/p_f211c8aaf3db-2020-01-15-20-42-05-000473.jpg',
                                }}
                            />
                        </View>
                        <View style={venkyStyles.threeDotMenu}></View>
                    </View>


                    <View style={venkyStyles.secondView}>
                        <Text style={venkyStyles.name}>Venkatesh Belday</Text>
                        <Text style={venkyStyles.place}>Hyderabad</Text>
                    </View>


                    <View style={venkyStyles.thirdView}>
                        <View style={venkyStyles.thirdViewLeftSide}>
                            <Text style={venkyStyles.noOfFollowrs}>250</Text>
                            <Text style={venkyStyles.Followrs}>Followrs</Text>
                        </View>
                        <View style={venkyStyles.thirdViewRightSide}>
                            <Text style={venkyStyles.noOfFollowrs}>150</Text>
                            <Text style={venkyStyles.Followrs}>Following</Text>
                        </View>
                    </View>


                    <View style={venkyStyles.fourthView}>
                        <Button
                            title="FOLLOW"
                            onPress={() => Alert.alert('Thank you for following...')}
                        />
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
        height: 500,
        width: 350,
        backgroundColor: 'tan'
    },
    tinyLogo: {
        height:200,
        width: 200,
        borderRadius:100
    },
    box: {
        height: windowHeight,
        backgroundColor: 'coral',
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailsContainer: {
        height: 470,
        width: 320,
        borderRadius: 20,
        backgroundColor: 'peachpuff'
    },
    firstView: {
        flexDirection: "row",
        flex: 4,
       // backgroundColor: 'black'
    },
    secondView: {
        flex: 1,
       // backgroundColor: 'red'
    },
    name: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    place: {
        marginTop: 2,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '400'
    },
    thirdView: {
        flexDirection: 'row',
        flex: 1,
       // backgroundColor: 'yellow'
    },
    noOfFollowrs: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500'
    },
    Followrs: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500',
        color: 'gray'
    },
    fourthView: {
        flex: 1,
        //backgroundColor: 'violet'
    },
    imageView: {
        justifyContent:'center',
        alignItems:'center',
        flex: 5,
       // backgroundColor: 'yellow'
    },
    threeDotMenu: {
        flex: 1,
        //backgroundColor: 'violet'
    },
    thirdViewLeftSide: {
        flex: 1,
       // backgroundColor: 'blue'
    },
    thirdViewRightSide: {
        flex: 1,
        //backgroundColor: 'lightyellow'
    }





})