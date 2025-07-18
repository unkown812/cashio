import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter,Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function WelcomeScreen() {
  const router = useRouter();

  const onGetStarted = () => {
    router.replace('/onboarding2');
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={styles.maintitle}>Cashio</Text>
      <Image
        source={require('../assets/images/splash-money.gif')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.subtitle}>
        Organise your finance and transaction in modern way
      </Text>
      <TouchableOpacity style={styles.button} onPress={onGetStarted} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Let&apos;s get started</Text>
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
    fontFamily: "ClashDisplay",
  },
  maintitle: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 40,
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
    fontFamily: "ClashDisplay",
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
