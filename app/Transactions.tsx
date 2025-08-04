import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { initDatabase, fetchTransactions } from '../utils/database';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabaseSync('../assets/data/userdata.db');


export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    initDatabase();
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      const data = await fetchTransactions();
      setTransactions(data);
    } catch (error) {
      console.error('Failed to fetch transactions:', error);
    }
  };

  const renderTransaction = ({ item }: { item: any }) => (
    <View style={styles.transactionItem}>
      <Text style={styles.transactionDescription}>{item.description || 'No description'}</Text>
      <Text style={styles.transactionAmount}>${item.amount.toFixed(2)}</Text>
      <Text style={styles.transactionDate}>{new Date(item.date).toLocaleDateString()}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      {/* Manage Transactions */}
      <Text style={styles.sectionTitle}>Manage Transactions</Text>
      <View style={styles.manageContainer}>
        {/* Income and Expenses cards can be updated later */}
      </View>

      {/* Analytics */}
      <Text style={styles.sectionTitle}>Analytics</Text>
      <View style={styles.analyticsContainer}>
        {/* Bar chart and other analytics can be updated later */}
      </View>

      {/* Transactions */}
      <Text style={styles.sectionTitle}>Transactions</Text>
      <View style={styles.transactionsContainer}>
        {transactions.length === 0 ? (
          <Text style={styles.noTransactionsText}>No recent Transactions</Text>
        ) : (
          <FlatList
            data={transactions}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderTransaction}
          />
        )}
      </View>

      {/* Budgets */}
      <Text style={styles.sectionTitle}>Budgets</Text>
      <View style={styles.budgetsContainer}>
        {/* Budget items can be updated later */}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={[styles.navItem, { backgroundColor: '#a6d8f7' }]}>
          <Ionicons name="home" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, { backgroundColor: '#f3d1f4' }]}>
          <MaterialCommunityIcons name="chart-bar" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, { backgroundColor: '#a6d8f7' }]}>
          <Ionicons name="add-circle" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, { backgroundColor: '#d6b89c' }]}>
          <FontAwesome5 name="comment-alt" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, { backgroundColor: '#f7a8a8' }]}>
          <Ionicons name="person" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    fontFamily: 'ClashDisplay',
  },
  manageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  analyticsContainer: {
    marginBottom: 24,
  },
  transactionsContainer: {
    alignItems: 'center',
    marginBottom: 24,
    width: '100%',
  },
  transactionItem: {
    backgroundColor: '#222',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  transactionDescription: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'ClashDisplay',
  },
  transactionAmount: {
    color: '#F7A8FF',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'ClashDisplay',
  },
  transactionDate: {
    color: '#999',
    fontSize: 12,
    fontFamily: 'ClashDisplay',
  },
  noTransactionsText: {
    color: '#999',
    fontSize: 14,
    fontFamily: 'ClashDisplay',
  },
  budgetsContainer: {
    marginBottom: 24,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#a6d8f7',
  },
  navItem: {
    borderRadius: 20,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
});
