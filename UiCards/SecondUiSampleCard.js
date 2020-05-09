import React from 'react';
import { StyleSheet, View, Text, Dimensions, Button, Alert, TouchableHighlight, Image, TextComponent } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { render } from 'react-dom';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function renderImage(imagePath, imageStyle) {
    return (
        <View style={venkyStyles.image}>
            <Image
                style={imageStyle}
                source={{
                    uri: imagePath,
                }}
            />
        </View>
    )
}

function renderPostDetails(iconName,clicksCount,countDetailsOfPost) {
    return (
        <View style={venkyStyles.postDetailsContainer}>
            <View style={venkyStyles.postCountContainer}>
                <Icon style={venkyStyles.iconStyles} name={iconName} size={25}></Icon>
                <Text style={venkyStyles.countText}>{clicksCount}</Text>
            </View>
            <Text style={venkyStyles.countDetail}>{countDetailsOfPost}</Text>
        </View>
    )
}

export default function SecondUiSampleCard() {
    return (
        <View style={venkyStyles.container}>
            <View style={venkyStyles.mainContainer}>
                <View style={venkyStyles.mainContainerFirstLayer}>
                    <View style={venkyStyles.mainContainerFirstLayerTextView}>
                        <Text style={venkyStyles.textStyle}>Ink.to.ipad</Text>
                    </View>
                    <View style={venkyStyles.mainContainerFirstLayerIconView}>
                        <Icon style={venkyStyles.iconStyles} name="gitlab" size={25}></Icon>
                    </View>
                </View>
                <View style={venkyStyles.mainContainerSecondLayer}>
                    {renderImage('https://banknotecoinstamp.com/bncs-content/uploads/2019/10/94-2.jpg', venkyStyles.tinyLogo)}
                    {renderImage('https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png', venkyStyles.tinyLogo)}
                    {renderImage('https://en.numista.com/catalogue/photos/inde/3205-original.jpg', venkyStyles.tinyLogo)}

                </View>
                <View style={venkyStyles.mainContainerThirdLayer}>
                    <Text style={venkyStyles.mainContainerThirdLayerTextStyle}>  One Ruppe         India         Two Ruppe</Text>
                </View>
                <View style={{ flexDirection: 'row', overflow: "hidden", position: "absolute", top: 245, zIndex: 1 }}>
                    <View style={venkyStyles.dot} />
                    <View style={venkyStyles.dot} />
                    <View style={venkyStyles.dot} />
                    <View style={venkyStyles.dot} />
                    <View style={venkyStyles.dot} />
                    <View style={venkyStyles.dot} />
                    <View style={venkyStyles.dot} />
                    <View style={venkyStyles.dot} />
                    <View style={venkyStyles.dot} />
                    <View style={venkyStyles.dot} />
                    <View style={venkyStyles.dot} />
                    <View style={venkyStyles.dot} />
                    <View style={venkyStyles.dot} />
                    <View style={venkyStyles.dot} />
                    <View style={venkyStyles.dot} />
                    <View style={venkyStyles.dot} />
                    <View style={venkyStyles.dot} />
                    <View style={venkyStyles.dot} />
                    <View style={venkyStyles.dot} />
                    <View style={venkyStyles.dot} />
                    <View style={venkyStyles.dot} />
                    <View style={venkyStyles.dot} />
                    <View style={venkyStyles.dot} />
                </View>
                <View style={venkyStyles.mainContainerFourthLayer}>
                        { renderPostDetails('mouse-pointer',83,'Clicks')}
                        { renderPostDetails('share','2.3k','Shares')}
                        { renderPostDetails('commenting-o',4,'Comments')}
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
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.3,
        //  backgroundColor: 'red'
    },
    mainContainerSecondLayer: {
        flexDirection: 'row',
        flex: 1,
        // backgroundColor: 'blue'
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        // backgroundColor: 'red'
    },
    mainContainerThirdLayer: {
        flex: 1,
        //marginTop: -10
        // backgroundColor: 'red'
    },
    mainContainerThirdLayerTextStyle: {
        fontSize: 21
    },
    mainContainerFourthLayer: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'beige'
    },
    tinyLogo: {
        height: 100,
        width: 100,
        borderRadius: 100
    },
    postCountContainer: {
        flexDirection: 'row',
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    postDetailsContainer: {
        marginTop: 20,
        flex: 1,
        alignItems: 'center',
        //backgroundColor:'lightblue'
    },
    countText: {
        marginLeft: 10,
        fontStyle: 'italic',
        fontSize: 30
    },
    countDetail: {

        color: 'gray',
        fontStyle: 'italic',
        fontSize: 20
    },
    iconStyles: {
        color: 'black'
    },
    dot: {
        marginLeft: 5,
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: 'peachpuff'
    }
})