import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App(): React.JSX.Element {
    return (
        <SafeAreaView>
            <ScrollView
                scrollEnabled={true}
                contentInsetAdjustmentBehavior='automatic'
            >
                <View
                    style={{
                        width: 360,
                        height: 800,
                        backgroundColor: '#d4f7e5',
                        position: 'relative',
                        overflow: 'hidden',
                        marginTop: 0,
                        marginRight: 'auto',
                        marginBottom: 0,
                        marginLeft: 'auto',
                    }}
                >
                    <ImageBackground
                        style={{
                            width: 60,
                            height: 60,
                            position: 'relative',
                            zIndex: 19,
                            marginTop: 20,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 150,
                        }}
                        source={require('./assets/images/de14853e-093b-4b3a-b990-b1794c993d3f.png')}
                        resizeMode='cover'
                    />
                    <Text
                        style={{
                            display: 'flex',
                            width: 127,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontFamily: 'Bangers',
                            fontSize: 24,
                            fontWeight: '400',
                            lineHeight: 32.344,
                            color: '#056033',
                            position: 'relative',
                            textAlign: 'center',
                            zIndex: 13,
                            marginTop: 44,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 0,
                        }}
                        numberOfLines={1}
                    >
                        Welcome!
                    </Text>
                    <Text
                        style={{
                            display: 'flex',
                            width: 271,
                            height: 16,
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontFamily: 'Open Sans',
                            fontSize: 12,
                            fontWeight: '400',
                            lineHeight: 16,
                            color: '#056033',
                            position: 'relative',
                            textAlign: 'center',
                            zIndex: 14,
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 22,
                        }}
                        numberOfLines={1}
                    >
                        Uh oh! You don’t have an account. Register here!
                    </Text>
                    <View
                        style={{
                            width: 305,
                            height: 44,
                            backgroundColor: '#ffffff',
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10,
                            borderBottomLeftRadius: 10,
                            position: 'relative',
                            zIndex: 6,
                            marginTop: 15,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 22,
                        }}
                    >
                        <View
                            style={{
                                width: '100%',
                                height: '100%',
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                borderBottomRightRadius: 10,
                                borderBottomLeftRadius: 10,
                                borderWidth: 1,
                                borderColor: '#056033',
                                borderStyle: 'solid',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 7,
                            }}
                        >
                            <Text
                                style={{
                                    display: 'flex',
                                    height: 17,
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    fontFamily: 'Open Sans',
                                    fontSize: 12,
                                    fontWeight: '400',
                                    lineHeight: 16.172,
                                    color: '#7f7f7f',
                                    position: 'absolute',
                                    top: '50%',
                                    left: 16,
                                    right: 15,
                                    textAlign: 'left',
                                    zIndex: 8,
                                    transform: [{ translateY: -9 }],
                                }}
                                numberOfLines={1}
                            >
                                Name
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            width: 305,
                            height: 44,
                            backgroundColor: '#ffffff',
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10,
                            borderBottomLeftRadius: 10,
                            position: 'relative',
                            zIndex: 3,
                            marginTop: 17,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 22,
                        }}
                    >
                        <View
                            style={{
                                width: '100%',
                                height: '100%',
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                borderBottomRightRadius: 10,
                                borderBottomLeftRadius: 10,
                                borderWidth: 1,
                                borderColor: '#056033',
                                borderStyle: 'solid',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 4,
                            }}
                        >
                            <Text
                                style={{
                                    display: 'flex',
                                    height: 17,
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    fontFamily: 'Open Sans',
                                    fontSize: 12,
                                    fontWeight: '400',
                                    lineHeight: 16.172,
                                    color: '#7f7f7f',
                                    position: 'absolute',
                                    top: '50%',
                                    left: 16,
                                    right: 15,
                                    textAlign: 'left',
                                    zIndex: 5,
                                    transform: [{ translateY: -9 }],
                                }}
                                numberOfLines={1}
                            >
                                Email
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            width: 305,
                            height: 44,
                            backgroundColor: '#ffffff',
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10,
                            borderBottomLeftRadius: 10,
                            position: 'relative',
                            zIndex: 9,
                            marginTop: 15,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 22,
                        }}
                    >
                        <View
                            style={{
                                width: '100%',
                                height: '100%',
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                borderBottomRightRadius: 10,
                                borderBottomLeftRadius: 10,
                                borderWidth: 1,
                                borderColor: '#056033',
                                borderStyle: 'solid',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 10,
                            }}
                        >
                            <Text
                                style={{
                                    display: 'flex',
                                    height: 17,
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    fontFamily: 'Open Sans',
                                    fontSize: 12,
                                    fontWeight: '400',
                                    lineHeight: 16.172,
                                    color: '#7f7f7f',
                                    position: 'absolute',
                                    top: '50%',
                                    left: 16,
                                    right: 15,
                                    textAlign: 'left',
                                    zIndex: 11,
                                    transform: [{ translateY: -9 }],
                                }}
                                numberOfLines={1}
                            >
                                Password
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            width: 305,
                            height: 44,
                            backgroundColor: '#056033',
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10,
                            borderBottomLeftRadius: 10,
                            position: 'relative',
                            marginTop: 15,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 22,
                        }}
                    >
                        <View
                            style={{
                                width: '100%',
                                height: '100%',
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                borderBottomRightRadius: 10,
                                borderBottomLeftRadius: 10,