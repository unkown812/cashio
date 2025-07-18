import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Onboarding2Screen() {
  const router = useRouter();

  const onNext = () => {
    router.replace('/onboarding3');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transform{'\n'}the way{'\n'}you handle money</Text>
      <Image
        source={require('../assets/images/bitcoin.png')} // Placeholder image, replace with actual asset
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.subtitle}>
        Track your spendings and save for what matters
      </Text>
      <TouchableOpacity style={styles.button} onPress={onNext} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Next</Text>
        <Ionicons name="arrow-forward" size={20} color="#000" style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'left',
    alignSelf: 'flex-start',
    lineHeight: 28,
    fontFamily: "ClashDisplay",
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 40,
  },
  subtitle: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 60,
    fontFamily: "ClashDisplay",
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#F7A8FF',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: "ClashDisplay",
  },
  buttonIcon: {
    marginLeft: 8,
  },
});
