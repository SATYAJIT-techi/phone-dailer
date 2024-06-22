import {
  Image,
  StyleSheet,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

import {HelloWave} from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import React, {useState} from 'react';

export default function HomeScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const HandleCall = () => {
    RNImmediatePhoneCall.immediatePhoneCall(phoneNumber);
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{light: '#A1CEDC'}}
      headerImage={
        // eslint-disable-next-line react/react-in-jsx-scope
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ScrollView keyboardShouldPersistTaps="always">
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderRadius: 30,
            padding: 20,
          }}>
          <View style={styles.titleContainer}>
            <HelloWave />
            <ThemedText variant="h1" style={{color: '#000'}}>
              Welcome to React Native
            </ThemedText>
          </View>
          <TextInput
            placeholder="Enter phone number"
            value={phoneNumber}
            inputMode="numeric"
            onChangeText={text => setPhoneNumber(text)}
            maxLength={10}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              borderWidth: 1,
              padding: 8,
              marginBottom: 8,
              color: 'black',
              borderRadius: 8,
              paddingHorizontal: 16,
              letterSpacing: 2,
              marginVertical: 8,
            }}
          />

          <Button title="Call" onPress={HandleCall} />
        </View>
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'white',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
