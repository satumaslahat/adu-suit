import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
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
          <View
            style={{
              position: 'absolute',
              top: 20,
              bottom: 40,
              left: 17,
              right: 17,
              zIndex: 18,
            }}
          >
            <ImageBackground
              style={{
                width: 60,
                height: 60,
                position: 'relative',
                zIndex: 18,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 133,
              }}
              source={require('./assets/images/cdf5ae62-f539-4268-8e7c-de851f79e9aa.png')}
              resizeMode='cover'
            />
            <Text
              style={{
                display: 'flex',
                width: 48,
                height: 65,
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Open Sans',
                fontSize: 48,
                fontWeight: '700',
                lineHeight: 64.688,
                color: '#000000',
                position: 'relative',
                textAlign: 'center',
                zIndex: 4,
                marginTop: 80,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 242,
              }}
              numberOfLines={1}
            >
              ✌️
            </Text>
            <View
              style={{
                width: 120,
                height: 40,
                backgroundColor: '#19e57d',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
                borderBottomLeftRadius: 8,
                position: 'relative',
                zIndex: 2,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 206,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: 66,
                  height: 24,
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontFamily: 'Open Sans',
                  fontSize: 18,
                  fontWeight: '600',
                  lineHeight: 24,
                  color: '#056033',
                  position: 'absolute',
                  top: 8,
                  left: 27,
                  textAlign: 'center',
                  zIndex: 3,
                }}
                numberOfLines={1}
              >
                Robsu!t
              </Text>
            </View>
            <Text
              style={{
                display: 'flex',
                width: 48,
                height: 65,
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Open Sans',
                fontSize: 48,
                fontWeight: '700',
                lineHeight: 64.688,
                color: '#000000',
                position: 'relative',
                textAlign: 'center',
                zIndex: 11,
                marginTop: 205,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 36,
              }}
              numberOfLines={1}
            >
              ✊
            </Text>
            <View
              style={{
                width: 120,
                height: 40,
                backgroundColor: '#19e57d',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
                borderBottomLeftRadius: 8,
                position: 'relative',
                zIndex: 9,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: 40,
                  height: 24,
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontFamily: 'Open Sans',
                  fontSize: 18,
                  fontWeight: '600',
                  lineHeight: 24,
                  color: '#056033',
                  position: 'absolute',
                  top: 8,
                  left: 40,
                  textAlign: 'center',
                  zIndex: 10,
                }}
                numberOfLines={1}
              >
                John
              </Text>
            </View>
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
                zIndex: 12,
                marginTop: 85,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 103,
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
                  zIndex: 13,
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
                    zIndex: 14,
                    transform: [{ translateY: -8 }],
                  }}
                  numberOfLines={1}
                >
                  Play Again
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
                zIndex: 16,
                marginTop: 20,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 119,
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
                  zIndex: 17,
                  transform: [{ translateY: -8 }],
                }}
                numberOfLines={1}
              >
                Quit
              </Text>
            </View>
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
                top: 325,
                left: '50%',
                textAlign: 'center',
                zIndex: 7,
                transform: [{ translateX: -111 }],
              }}
              numberOfLines={1}
            >
              YOU WIN!
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
                top: 327,
                left: '50%',
                textAlign: 'center',
                zIndex: 6,
                transform: [{ translateX: -111 }],
              }}
              numberOfLines={1}
            >
              YOU WIN!
            </Text>
          </View>
          <ImageBackground
            style={{
              width: 144,
              height: 144,
              position: 'absolute',
              top: 497.5,
              left: -216.5,
            }}
            source={require('./assets/images/bf2d8c91-0abc-4a61-9b09-7d6724bac64f.png')}
            resizeMode='cover'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
