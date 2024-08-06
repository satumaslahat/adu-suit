import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    SafeAreaView,
    ScrollView,
} from 'react-native';

export default function LoginLayout() {
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
                            zIndex: 16,
                            marginTop: 20,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 150,
                        }}
                        source={require('../../../assets/logo-suit.png')}
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
                            zIndex: 10,
                            marginTop: 40,
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
                            width: 247,
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
                            zIndex: 11,
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 22,
                        }}
                        numberOfLines={1}
                    >
                        Please sign in to continue playing this game!
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
                            zIndex: 3,
                            marginTop: 20,
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
                                    left: 17,
                                    right: 16,
                                    textAlign: 'left',
                                    zIndex: 5,
                                    transform: [{ translateY: -8 }],
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
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 1,
                            }}
                        >
                            <Text
                                style={{
                                    display: 'flex',
                                    height: 17,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontFamily: 'Open Sans',
                                    fontSize: 12,
                                    fontWeight: '700',
                                    lineHeight: 16.172,
                                    color: '#ffffff',
                                    position: 'absolute',
                                    top: '50%',
                                    left: 17,
                                    right: 16,
                                    textAlign: 'center',
                                    zIndex: 2,
                                    transform: [{ translateY: -8 }],
                                }}
                                numberOfLines={1}
                            >
                                Login
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            width: 130,
                            height: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            position: 'relative',
                            zIndex: 14,
                            marginTop: 14,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 115,
                        }}
                    >
                        <View
                            style={{
                                width: 50,
                                height: 5,
                                flexShrink: 0,
                                backgroundColor: '#056033',
                                position: 'relative',
                                zIndex: 12,
                            }}
                        />
                        <View
                            style={{
                                width: 50,
                                height: 5,
                                flexShrink: 0,
                                backgroundColor: '#cccccc',
                                position: 'relative',
                                zIndex: 14,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            width: 119,
                            height: 16,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            position: 'relative',
                            zIndex: 15,
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 124,
                        }}
                    >
                        <Text
                            style={{
                                display: 'flex',
                                width: 31,
                                height: 16,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexShrink: 0,
                                fontFamily: 'Open Sans',
                                fontSize: 12,
                                fontWeight: '400',
                                lineHeight: 16,
                                color: '#056033',
                                position: 'relative',
                                textAlign: 'center',
                                zIndex: 13,
                            }}
                            numberOfLines={1}
                        >
                            Login
                        </Text>
                        <Text
                            style={{
                                display: 'flex',
                                width: 46,
                                height: 16,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexShrink: 0,
                                fontFamily: 'Open Sans',
                                fontSize: 12,
                                fontWeight: '400',
                                lineHeight: 16,
                                color: '#cccccc',
                                position: 'relative',
                                textAlign: 'center',
                                zIndex: 15,
                            }}
                            numberOfLines={1}
                        >
                            Register
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}