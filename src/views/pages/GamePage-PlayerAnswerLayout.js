import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';

export default function GamePagePlayerAnswerLayout() {
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
            backgroundColor: '#cefde5',
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
              zIndex: 11,
              marginTop: 20,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 150,
            }}
            source={require('../../../assets/LogoAduSuit.png')}
            resizeMode='cover'
          />
          <View
            style={{
              width: 221,
              height: 45,
              position: 'relative',
              zIndex: 10,
              marginTop: 237,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 69,
            }}
          >
            <Text
              style={{
                display: 'flex',
                width: 221,
                height: 43,
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Bangers',
                fontSize: 32,
                fontWeight: '400',
                lineHeight: 43,
                color: '#e5b219',
                position: 'absolute',
                top: 0,
                left: '50%',
                textAlign: 'center',
                zIndex: 10,
                transform: [{ translateX: -110.5 }],
              }}
              numberOfLines={1}
            >
              SHOW YOUR HAND
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 221,
                height: 43,
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Bangers',
                fontSize: 32,
                fontWeight: '400',
                lineHeight: 43,
                color: '#f4b73d',
                position: 'absolute',
                top: 2,
                left: '50%',
                textAlign: 'center',
                zIndex: 9,
                transform: [{ translateX: -110.5 }],
              }}
              numberOfLines={1}
            >
              SHOW YOUR HAND
            </Text>
          </View>
          <View
            style={{
              width: 326,
              height: 100,
              position: 'relative',
              zIndex: 7,
              marginTop: 20,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 17,
            }}
          >
            <ImageBackground
              style={{
                width: '30.67%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 6,
              }}
              source={require('../../../assets/Batu.png')}
            />
            <ImageBackground
              style={{
                width: '30.67%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: '34.66%',
                zIndex: 1,
              }}
              source={require('../../../assets/Kertas.png')}
            />
            <ImageBackground
              style={{
                width: '30.67%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: '69.33%',
                zIndex: 3,
              }}
              source={require('../../../assets/Gunting.png')}
            />
            <Text
              style={{
                display: 'flex',
                width: '11.04%',
                height: '49%',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Open Sans',
                fontSize: 36,
                fontWeight: '700',
                lineHeight: 48.516,
                color: '#000000',
                position: 'absolute',
                top: '26%',
                left: '9.82%',
                textAlign: 'center',
                zIndex: 7,
              }}
              numberOfLines={1}
            >
              ✊
            </Text>
            <Text
              style={{
                display: 'flex',
                width: '11.04%',
                height: '49%',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Open Sans',
                fontSize: 36,
                fontWeight: '700',
                lineHeight: 48.516,
                color: '#000000',
                position: 'absolute',
                top: '26%',
                left: '79.14%',
                textAlign: 'center',
                zIndex: 4,
              }}
              numberOfLines={1}
            >
              ✌️
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
