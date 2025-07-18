import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function TransactionsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.header}>Manage Transactions</Text>
      <View style={styles.manageContainer}>
        <TouchableOpacity style={[styles.card, styles.incomeCard]}>
          <Text style={styles.cardTitle}>Income</Text>
          <Text style={styles.cardAmount}>+ $25,800</Text>
          <Text style={styles.cardLink}>View details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, styles.expensesCard]}>
          <Text style={styles.cardTitle}>Expenses</Text>
          <Text style={styles.cardAmount}>- $5,800</Text>
          <Text style={styles.cardLink}>View details</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.header}>Analytics</Text>
      <View style={styles.analyticsContainer}>
        {/* Placeholder for chart - replace with actual chart component */}
        <View style={styles.chartPlaceholder}>
          <Text style={styles.chartText}>[Chart goes here]</Text>
        </View>
      </View>

      <Text style={styles.header}>Transactions</Text>
      <View style={styles.transactionsContainer}>
        {/* <Image
          source={require('../../assets/images/transactions-illustration.png')} // Placeholder image
          style={styles.transactionsImage}
          resizeMode="contain"
        /> */}
        <Text style={styles.noTransactionsText}>No recent Transactions</Text>
      </View>

      <Text style={styles.header}>Budgets</Text>
      <View style={styles.budgetsContainer}>
        <TouchableOpacity style={[styles.budgetItem, styles.budgetShopping]}>
          <Text style={styles.budgetText}>Shopping</Text>
          <Text style={styles.budgetAmount}>$1950</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.budgetItem, styles.budgetKids]}>
          <Text style={styles.budgetText}>Kids</Text>
          <Text style={styles.budgetAmount}>$1950</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.budgetItem, styles.budgetFood]}>
          <Text style={styles.budgetText}>Food</Text>
          <Text style={styles.budgetAmount}>$1950</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.budgetItem, styles.budgetBills]}>
          <Text style={styles.budgetText}>Bills</Text>
          <Text style={styles.budgetAmount}>$100</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.budgetItem, styles.budgetAdd]}>
          <Text style={styles.budgetText}>Add Budget</Text>
          <Text style={styles.budgetAmount}>$0</Text>
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
  contentContainer: {
    padding: 20,
  },
  header: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  manageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  card: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 8,
  },
  incomeCard: {
    backgroundColor: '#A6F4C5',
  },
  expensesCard: {
    backgroundColor: '#F4A6A6',
  },
  cardTitle: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 8,
  },
  cardAmount: {
    fontWeight: '700',
    fontSize: 22,
    marginBottom: 8,
  },
  cardLink: {
    fontWeight: '600',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  analyticsContainer: {
    marginBottom: 24,
  },
  chartPlaceholder: {
    height: 200,
    backgroundColor: '#222',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartText: {
    color: '#888',
    fontSize: 16,
  },
  transactionsContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  transactionsImage: {
    width: 200,
    height: 150,
    marginBottom: 12,
  },
  noTransactionsText: {
    color: '#888',
    fontSize: 14,
  },
  budgetsContainer: {
    marginBottom: 24,
  },
  budgetItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  budgetShopping: {
    backgroundColor: '#F7A8FF',
  },
  budgetKids: {
    backgroundColor: '#A6F4F4',
  },
  budgetFood: {
    backgroundColor: '#D9B38C',
  },
  budgetBills: {
    backgroundColor: '#F4A6A6',
  },
  budgetAdd: {
    backgroundColor: '#EEE',
  },
  budgetText: {
    fontWeight: '700',
    fontSize: 18,
  },
  budgetAmount: {
    fontWeight: '700',
    fontSize: 18,
  },
});
