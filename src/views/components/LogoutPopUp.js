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
                            zIndex: 21,
                            marginTop: 20,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 150,
                        }}
                        source={require('./assets/images/56ea6d36-9b46-4818-afd2-f5bdf32b8b76.png')}
                        resizeMode='cover'
                    />
                    <View
                        style={{
                            width: 111,
                            height: 61,
                            position: 'relative',
                            marginTop: 40,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 124,
                        }}
                    >
                        <View
                            style={{
                                width: 24,
                                height: 24,
                                position: 'relative',
                                overflow: 'hidden',
                                zIndex: 1,
                                marginTop: 0,
                                marginRight: 0,
                                marginBottom: 0,
                                marginLeft: 44,
                            }}
                        >
                            <ImageBackground
                                style={{
                                    width: 22,
                                    height: 22,
                                    position: 'relative',
                                    zIndex: 2,
                                    marginTop: 1,
                                    marginRight: 0,
                                    marginBottom: 0,
                                    marginLeft: 1,
                                }}
                                source={require('./assets/images/cb1ec3d5-2a23-4afc-8c60-3bbc363aade1.png')}
                            />
                        </View>
                        <Text
                            style={{
                                height: 19,
                                fontFamily: 'Bangers',
                                fontSize: 18,
                                fontWeight: '400',
                                lineHeight: 19,
                                color: '#056033',
                                position: 'relative',
                                textAlign: 'left',
                                zIndex: 3,
                                marginTop: 7,
                                marginRight: 0,
                                marginBottom: 0,
                                marginLeft: 16,
                            }}
                            numberOfLines={1}
                        >
                            Hi, John Doe!
                        </Text>
                    </View>
                    <View
                        style={{
                            width: 120,
                            height: 40,
                            position: 'relative',
                            zIndex: 8,
                            marginTop: 380,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 120,
                        }}
                    >
                        <View
                            style={{
                                width: '100%',
                                height: '100%',
                                fontSize: 0,
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 5,
                                borderBottomRightRadius: 5,
                                borderBottomLeftRadius: 5,
                                borderWidth: 2,
                                borderColor: '#056033',
                                borderStyle: 'solid',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 9,
                            }}
                        >
                            <Text
                                style={{
                                    display: 'flex',
                                    width: 87,
                                    height: 17,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontFamily: 'Open Sans',
                                    fontSize: 12,
                                    fontWeight: '400',
                                    lineHeight: 16.342,
                                    color: '#056033',
                                    position: 'relative',
                                    textAlign: 'center',
                                    zIndex: 11,
                                    marginTop: 12,
                                    marginRight: 0,
                                    marginBottom: 0,
                                    marginLeft: 17,
                                }}
                                numberOfLines={1}
                            >
                                Sign Out
                            </Text>
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
                                    zIndex: 10,
                                }}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            width: 360,
                            height: 800,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 23,
                        }}
                    />
                    <View
                        style={{
                            width: 320,
                            height: 80,
                            fontSize: 0,
                            position: 'absolute',
                            top: 181,
                            left: 20,
                            zIndex: 12,
                        }}
                    >
                        <Text
                            style={{
                                display: 'flex',
                                width: 109,
                                height: 24,
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontFamily: 'Open Sans',
                                fontSize: 18,
                                fontWeight: '600',
                                lineHeight: 24,
                                color: '#056033',
                                position: 'relative',
                                textAlign: 'center',
                                zIndex: 20,
                                marginTop: 2,
                                marginRight: 0,
                                marginBottom: 0,
                                marginLeft: 106,
                            }}
                            numberOfLines={1}
                        >
                            Your History
                        </Text>
                        <View
                            style={{
                                width: '100%',
                                height: '100%',
                                backgroundColor: '#ffffff',
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                borderBottomRightRadius: 10,
                                borderBottomLeftRadius: 10,
                                borderWidth: 2,
                                borderColor: '#056033',
                                borderStyle: 'solid',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 13,
                            }}
                        />
                        <View
                            style={{
                                width: 80,
                                height: 40,
                                fontSize: 0,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                borderBottomRightRadius: 10,
                                borderBottomLeftRadius: 10,
                                position: 'absolute',
                                top: 30,
                                left: 20,
                                zIndex: 14,
                            }}
                        >
                            <Text
                                style={{
                                    display: 'flex',
                                    width: 69.333,
                                    height: 24,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontFamily: 'Open Sans',
                                    fontSize: 18,
                                    fontWeight: '400',
                                    lineHeight: 24,
                                    color: '#056033',
                                    position: 'relative',
                                    textAlign: 'center',
                                    zIndex: 16,
                                    marginTop: 8.066,
                                    marginRight: 0,
                                    marginBottom: 0,
                                    marginLeft: 5.956,
                                }}
                                numberOfLines={1}
                            >
                                Win: 0
                            </Text>
                            <ImageBackground
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    zIndex: 15,
                                }}
                                source={require('./assets/images/11f25345-6d2a-4f87-9c02-7783824d7b0e.png')}
                            />
                        </View>
                        <View
                            style={{
                                width: 80,
                                height: 40,
                                fontSize: 0,