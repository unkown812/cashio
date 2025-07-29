import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { IconSymbol } from '../components/ui/IconSymbol';
import { initDatabase, insertTransaction } from '../utils/database';

export default function AddTransaction() {
  const router = useRouter();
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    initDatabase();
  }, []);

  const onAdd = async () => {
    if (!amount) {
      Alert.alert('Validation Error', 'Please enter an amount');
      return;
    }
    const amountNumber = parseFloat(amount);
    if (isNaN(amountNumber)) {
      Alert.alert('Validation Error', 'Amount must be a valid number');
      return;
    }
    const date = new Date().toISOString();
    try {
      await insertTransaction(amountNumber, description, date);
      Alert.alert('Success', 'Transaction added successfully');
      setAmount('');
      setDescription('');
      // Optionally navigate back or to another screen
    } catch (error) {
      Alert.alert('Error', 'Failed to add transaction');
      console.error('Insert transaction error:', error);
    }
  };

  const onBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.innerContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <TouchableOpacity onPress={onBack} style={styles.backButton} activeOpacity={0.7}>
          <IconSymbol name="chevron.left" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Add{'\n'}Transaction</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Amount"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="Enter Description"
          placeholderTextColor="#999"
          value={description}
          onChangeText={setDescription}
        />
        <TouchableOpacity style={styles.addButton} onPress={onAdd} activeOpacity={0.8}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <IconSymbol name="house.fill" size={24} color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <IconSymbol name="chart.bar.fill" size={24} color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <IconSymbol name="plus.app.fill" size={28} color="#F7A8FF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <IconSymbol name="bubble.left.and.bubble.right.fill" size={24} color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <IconSymbol name="person.crop.circle.fill" size={24} color="#ccc" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 24,
    padding: 8,
  },
  title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    fontFamily: 'ClashDisplay',
    lineHeight: 42,
  },
  input: {
    width: '100%',
    height: 56,
    backgroundColor: '#F7A8FF',
    borderRadius: 12,
    paddingHorizontal: 16,
    color: '#000',
    fontFamily: 'ClashDisplay',
    fontSize: 16,
    marginBottom: 16,
  },
  descriptionInput: {
    height: 72,
  },
  addButton: {
    width: '100%',
    height: 48,
    backgroundColor: '#F7A8FF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  addButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'ClashDisplay',
  },
  tabBar: {
    height: 64,
    backgroundColor: '#222',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
});

