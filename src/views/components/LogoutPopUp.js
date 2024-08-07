/**
 * Codia React Native App
 * https://codia.ai
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    SafeAreaView,
    ScrollView,
} from 'react-native';

export default function LogoutPopUp() {
    return (
        <SafeAreaView>
            <ScrollView
                scrollEnabled={true}
                contentInsetAdjustmentBehavior='automatic'
            >
                <View
                    style={{
                        width: 265,
                        height: 334,
                        position: 'relative',
                        overflow: 'hidden',
                        marginTop: 0,
                        marginRight: 'auto',
                        marginBottom: 0,
                        marginLeft: 'auto',
                    }}
                >
                    <View
                        style={{
                            width: 265,
                            height: 334,
                            backgroundColor: '#ffffff',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            borderBottomRightRadius: 20,
                            borderBottomLeftRadius: 20,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 1,
                        }}
                    >
                        <ImageBackground
                            style={{
                                width: 150,
                                height: 122,
                                position: 'relative',
                                zIndex: 9,
                                marginTop: 44,
                                marginRight: 0,
                                marginBottom: 0,
                                marginLeft: 57,
                            }}
                            source={require('../../../assets/pintu-logout.png')}
                            resizeMode='cover'
                        />
                        <Text
                            style={{
                                display: 'flex',
                                width: 149,
                                height: 38,
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontFamily: 'Open Sans',
                                fontSize: 14,
                                fontWeight: '400',
                                lineHeight: 18.867,
                                color: '#000000',
                                position: 'relative',
                                textAlign: 'center',
                                overflow: 'hidden',
                                zIndex: 8,
                                marginTop: 11,
                                marginRight: 0,
                                marginBottom: 0,
                                marginLeft: 58,
                            }}
                        >
                            Oh no! You’re leaving...{'\n'}Are you sure?
                        </Text>
                        <View
                            style={{
                                display: 'flex',
                                width: 225,
                                height: 40,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                position: 'relative',
                                zIndex: 5,
                                marginTop: 53,
                                marginRight: 0,
                                marginBottom: 0,
                                marginLeft: 25,
                            }}
                        >
                            <View
                                style={{
                                    width: 88,
                                    height: 40,
                                    flexShrink: 0,
                                    backgroundColor: '#056033',
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    borderBottomRightRadius: 5,
                                    borderBottomLeftRadius: 5,
                                    position: 'relative',
                                    zIndex: 5,
                                }}
                            >
                                <View
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderTopLeftRadius: 5,
                                        borderTopRightRadius: 5,
                                        borderBottomRightRadius: 5,
                                        borderBottomLeftRadius: 5,
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        zIndex: 6,
                                    }}
                                >
                                    <Text
                                        style={{
                                            display: 'flex',
                                            height: 20,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            fontFamily: 'Open Sans',
                                            fontSize: 14,
                                            fontWeight: '700',
                                            lineHeight: 19.065,
                                            color: '#ffffff',
                                            position: 'absolute',
                                            top: '50%',
                                            left: 17,
                                            right: 16,
                                            textAlign: 'center',
                                            zIndex: 7,
                                            transform: [{ translateY: -10 }],
                                        }}
                                        numberOfLines={1}
                                    >
                                        No
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    width: 88,
                                    height: 40,
                                    flexShrink: 0,
                                    backgroundColor: '#ffffff',
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    borderBottomRightRadius: 5,
                                    borderBottomLeftRadius: 5,
                                    borderWidth: 2,
                                    borderColor: '#056033',
                                    borderStyle: 'solid',
                                    position: 'relative',
                                    zIndex: 2,
                                }}
                            >
                                <View
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderTopLeftRadius: 5,
                                        borderTopRightRadius: 5,
                                        borderBottomRightRadius: 5,
                                        borderBottomLeftRadius: 5,
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        zIndex: 3,
                                    }}
                                >
                                    <Text
                                        style={{
                                            display: 'flex',
                                            height: 20,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            fontFamily: 'Open Sans',
                                            fontSize: 14,
                                            fontWeight: '400',
                                            lineHeight: 19.065,
                                            color: '#056033',
                                            position: 'absolute',
                                            top: '50%',
                                            left: 17,
                                            right: 16,
                                            textAlign: 'center',
                                            zIndex: 4,
                                            transform: [{ translateY: -10 }],
                                        }}
                                        numberOfLines={1}
                                    >
                                        Yes
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
