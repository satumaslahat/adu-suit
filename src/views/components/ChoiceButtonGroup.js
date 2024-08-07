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
            width: 326,
            height: 100,
            position: 'relative',
            marginTop: 0,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
          }}
        >
          <ImageBackground
            style={{
              width: '30.67%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: '34.66%',
            }}
            source={require('./assets/images/ed7cc9c6-8390-4e5a-b967-e9b14506a899.png')}
          />
          <ImageBackground
            style={{
              width: '30.67%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: '69.33%',
              zIndex: 2,
            }}
            source={require('./assets/images/6d591aee-d3a0-49af-979f-cf147a7d2797.png')}
          />
          <ImageBackground
            style={{
              width: '30.67%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 5,
            }}
            source={require('./assets/images/70b6e72e-f3cf-4281-ac1b-1e20f9e7dee8.png')}
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
              left: '79.14%',
              textAlign: 'center',
              zIndex: 3,
            }}
            numberOfLines={1}
          >
            ✌️
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
              left: '9.82%',
              textAlign: 'center',
              zIndex: 6,
            }}
            numberOfLines={1}
          >
            ✊
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
