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
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                borderBottomRightRadius: 10,
                                borderBottomLeftRadius: 10,
                                position: 'absolute',
                                top: 30,
                                left: 220,
                                zIndex: 17,
                            }}
                        >
                            <Text
                                style={{
                                    display: 'flex',
                                    width: 59,
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
                                    zIndex: 19,
                                    marginTop: 8,
                                    marginRight: 0,
                                    marginBottom: 0,
                                    marginLeft: 11,
                                }}
                                numberOfLines={1}
                            >
                                Lose: 0
                            </Text>
                            <ImageBackground
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    zIndex: 18,
                                }}
                                source={require('./assets/images/78433976-ae91-4844-9759-68fa31838a9e.png')}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            width: 265,
                            height: 334,
                            position: 'absolute',
                            top: 222,
                            left: 56,
                            zIndex: 24,
                        }}
                    >
                        <ImageBackground
                            style={{
                                width: 150,
                                height: 122,
                                position: 'relative',
                                zIndex: 33,
                                marginTop: 44,
                                marginRight: 0,
                                marginBottom: 0,
                                marginLeft: 57,
                            }}
                            source={require('./assets/images/bbd1377c41642084791c10fe0d3fa2729db252f9.png')}
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
                                zIndex: 32,
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
                                zIndex: 25,
                            }}
                        />
                        <View
                            style={{
                                width: 88,
                                height: 40,
                                fontSize: 0,
                                backgroundColor: '#ffffff',
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 5,
                                borderBottomRightRadius: 5,
                                borderBottomLeftRadius: 5,
                                borderWidth: 2,
                                borderColor: '#056033',
                                borderStyle: 'solid',
                                position: 'absolute',
                                top: 268,
                                left: 162,
                                zIndex: 26,
                            }}
                        >
                            <Text
                                style={{
                                    display: 'flex',
                                    width: 55,
                                    height: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontFamily: 'Open Sans',
                                    fontSize: 14,
                                    fontWeight: '400',
                                    lineHeight: 19.065,
                                    color: '#056033',
                                    position: 'relative',
                                    textAlign: 'center',
                                    zIndex: 28,
                                    marginTop: 10,
                                    marginRight: 0,
                                    marginBottom: 0,
                                    marginLeft: 17,
                                }}
                                numberOfLines={1}
                            >
                                Yes
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
                                    zIndex: 27,
                                }}
                            />
                        </View>
                        <View
                            style={{
                                width: 88,
                                height: 40,
                                fontSize: 0,
                                backgroundColor: '#056033',
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 5,
                                borderBottomRightRadius: 5,
                                borderBottomLeftRadius: 5,
                                position: 'absolute',
                                top: 268,
                                left: 25,
                                zIndex: 29,
                            }}
                        >
                            <Text
                                style={{
                                    display: 'flex',
                                    width: 55,
                                    height: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontFamily: 'Open Sans',
                                    fontSize: 14,
                                    fontWeight: '700',
                                    lineHeight: 19.065,
                                    color: '#ffffff',
                                    position: 'relative',
                                    textAlign: 'center',
                                    zIndex: 31,
                                    marginTop: 10,
                                    marginRight: 0,
                                    marginBottom: 0,
                                    marginLeft: 17,
                                }}
                                numberOfLines={1}
                            >
                                No
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
                                    zIndex: 30,
                                }}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            width: 160,
                            height: 160,
                            backgroundColor: '#d9d9d9',
                            position: 'absolute',
                            top: 301,
                            left: 100,
                            zIndex: 22,
                        }}
                    />
                    <View
                        style={{
                            width: 120,
                            height: 40,
                            position: 'absolute',
                            top: 501,
                            left: 120,
                            zIndex: 4,
                        }}
                    >
                        <View
                            style={{
                                width: '100%',
                                height: '100%',
                                fontSize: 0,
                                backgroundColor: '#056033',
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
                                zIndex: 5,
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
                                    fontWeight: '700',
                                    lineHeight: 16.342,
                                    color: '#ffffff',
                                    position: 'relative',
                                    textAlign: 'center',
                                    zIndex: 7,
                                    marginTop: 12,
                                    marginRight: 0,
                                    marginBottom: 0,
                                    marginLeft: 17,
                                }}
                                numberOfLines={1}
                            >
                                Start Game
                            </Text>
                            <View
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    borderBottomRightRadius: 5,
                                    borderBottomLeftRadius: 5,
                                    borderWidth: 1,
                                    borderColor: '#056033',
                                    borderStyle: 'solid',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    zIndex: 6,
                                }}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}