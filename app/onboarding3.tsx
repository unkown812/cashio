
import React, { useState } from 'react';
import { Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { insertUser } from '../utils/database';
import * as SQLite from 'expo-sqlite';

export default function Onboarding3Screen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [balance, setBalance] = useState('');



  const onGetStarted = async () => {
    if (!name || !balance) {
      Alert.alert('Error', 'Please enter both name and balance.');
      return;
    }
    const parsedBalance = parseFloat(balance);
    if (isNaN(parsedBalance) || parsedBalance <= 0) {
      Alert.alert('Error', 'Please enter a valid positive balance.');
      return;
    }
    try {
      await insertUser(name, parsedBalance);
      router.replace(`/DashboardScreen?balance=${parsedBalance}`);
    } catch (error) {
      Alert.alert('Database Error', 'Failed to save user data.');
    }
    router.replace("/DashboardScreen");
  };


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Some{'\n'}necessary{'\n'}Information</Text>
      <Text style={styles.subtitle}>By what name should we infer you ?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Balance"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={balance}
        onChangeText={setBalance}
      />
      <Image
        source={require('../assets/images/info-page.png')} 
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.footerText}>Now, let&apos;s start with your journey</Text>
      <TouchableOpacity style={styles.button} onPress={onGetStarted} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 20,
    alignSelf: 'flex-start',
    lineHeight: 48,
    fontFamily: "ClashDisplay",
  },
  subtitle: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 24,
    alignSelf: 'flex-start',
    fontFamily: "ClashDisplay",
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#222',
    borderRadius: 12,
    paddingHorizontal: 16,
    color: '#fff',
    marginBottom: 16,
    fontFamily: "ClashDisplay",
  },
  image: {
    width: 230,
    height: 180,
    marginVertical: 24,
  },
  footerText: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 24,
    fontFamily: "ClashDisplay",
  },
  button: {
    backgroundColor: '#F7A8FF',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontFamily: "ClashDisplay",
    fontWeight: '600',
  },
});
