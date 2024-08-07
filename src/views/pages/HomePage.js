import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';

export default function HomePage() {
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
              width: 70,
              height: 70,
              position: 'relative',
              zIndex: 19,
              marginTop: 16,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 145,
            }}
            source={require('../../../assets/Logo.png')}
            resizeMode='cover'
          />
          <View
            style={{
              width: 24,
              height: 24,
              position: 'relative',
              overflow: 'hidden',
              zIndex: 1,
              marginTop: 34,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 168,
            }}
          >
            <ImageBackground
              style={{
                width: 20.025,
                height: 19,
                position: 'relative',
                zIndex: 2,
                marginTop: 2,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 2,
              }}
              source={require('../../../assets/bintang.png')}
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
              marginLeft: 140,
            }}
            numberOfLines={1}
          >
            Hi, John Doe!
          </Text>
          <View
            style={{
              width: 320,
              height: 80,
              fontSize: 0,
              backgroundColor: '#ffffff',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderWidth: 2,
              borderColor: '#056033',
              borderStyle: 'solid',
              position: 'relative',
              zIndex: 5,
              marginTop: 11,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 20,
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
                zIndex: 12,
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
                display: 'flex',
                width: 280,
                height: 40,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                zIndex: 10,
                marginTop: 4,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 20,
              }}
            >
              <ImageBackground
                style={{
                  width: 80,
                  height: 40,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 7,
                }}
                source={require('../../../assets/kotak-hijau-bener.png')}
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
                    position: 'absolute',
                    top: 8.066,
                    left: 5.956,
                    textAlign: 'center',
                    zIndex: 8,
                  }}
                  numberOfLines={1}
                >
                  Win: 0
                </Text>
              </ImageBackground>
              <ImageBackground
                style={{
                  width: 80,
                  height: 40,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 10,
                }}
                source={require('../../../assets/kotak-hijau-bener.png')}
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
                    position: 'absolute',
                    top: 8,
                    left: 11,
                    textAlign: 'center',
                    zIndex: 11,
                  }}
                  numberOfLines={1}
                >
                  Lose: 0
                </Text>
              </ImageBackground>
            </View>
          </View>
          <ImageBackground
            style={{
              width: 168,
              height: 168,
              position: 'relative',
              zIndex: 20,
              marginTop: 41,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 97,
            }}
            source={require('../../../assets/animasi-start-game.png')}
            resizeMode='cover'
          />
          <View
            style={{
              width: 120,
              height: 40,
              backgroundColor: '#056033',
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              borderBottomLeftRadius: 5,
              position: 'relative',
              zIndex: 13,
              marginTop: 31,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 120,
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
                zIndex: 14,
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
                  lineHeight: 16.342,
                  color: '#ffffff',
                  position: 'absolute',
                  top: '50%',
                  left: 17,
                  right: 16,
                  textAlign: 'center',
                  zIndex: 15,
                  transform: [{ translateY: -8 }],
                }}
                numberOfLines={1}
              >
                Start Game
              </Text>
            </View>
          </View>
          <View
            style={{
              width: 88,
              height: 40,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              borderBottomLeftRadius: 5,
              position: 'relative',
              zIndex: 17,
              marginTop: 20,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 136,
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
                lineHeight: 16.342,
                color: '#056033',
                position: 'absolute',
                top: '50%',
                left: 17,
                right: 16,
                textAlign: 'center',
                zIndex: 18,
                transform: [{ translateY: -8 }],
              }}
              numberOfLines={1}
            >
              Log Out
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}