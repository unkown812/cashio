import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export default function Transactions() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      {/* Manage Transactions */}
      <Text style={styles.sectionTitle}>Manage Transactions</Text>
      <View style={styles.manageContainer}>
        <View style={[styles.card, styles.incomeCard]}>
          <Text style={styles.cardTitle}>Income</Text>
          <Text style={styles.incomeAmount}>+ $25,800</Text>
          <Text style={styles.cardDetails}>View details</Text>
        </View>
        <View style={[styles.card, styles.expensesCard]}>
          <Text style={styles.cardTitle}>Expenses</Text>
          <Text style={styles.expensesAmount}>- $5,800</Text>
          <Text style={styles.cardDetails}>View details</Text>
        </View>
      </View>

      {/* Analytics */}
      <Text style={styles.sectionTitle}>Analytics</Text>
      <View style={styles.analyticsContainer}>
        {/* Bar chart */}
        <View style={styles.barChart}>
          <View style={[styles.bar, { height: 60, backgroundColor: '#00bcd4' }]} />
          <View style={[styles.bar, { height: 120, backgroundColor: '#8bc34a' }]} />
          <View style={[styles.bar, { height: 180, backgroundColor: '#ffc107' }]} />
          <View style={[styles.bar, { height: 240, backgroundColor: '#e91e63' }]} />
        </View>
        {/* Line graph overlay */}
        <View style={styles.lineGraph}>
          <View style={styles.linePoint} />
          <View style={[styles.linePoint, { left: 60 }]} />
          <View style={[styles.linePoint, { left: 120 }]} />
          <View style={[styles.linePoint, { left: 180 }]} />
          <View style={[styles.linePoint, { left: 240 }]} />
          <View style={styles.line} />
        </View>
        {/* Legend */}
        <View style={styles.legend}>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#00bcd4' }]} />
            <Text style={styles.legendText}>10%</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#8bc34a' }]} />
            <Text style={styles.legendText}>40%</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#ffc107' }]} />
            <Text style={styles.legendText}>60%</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#e91e63' }]} />
            <Text style={styles.legendText}>100%</Text>
          </View>
        </View>
      </View>

      {/* Transactions */}
      <Text style={styles.sectionTitle}>Transactions</Text>
      <View style={styles.transactionsContainer}>
        {/* <Image
          source={require('../assets/images/hands-holding-cc.png')}
          style={styles.transactionImage}
          resizeMode="contain"
        /> */}
        <Text style={styles.noTransactionsText}>No recent Transactions</Text>
      </View>

      {/* Budgets */}
      <Text style={styles.sectionTitle}>Budgets</Text>
      <View style={styles.budgetsContainer}>
        <View style={[styles.budgetItem, { backgroundColor: '#f3d1f4' }]}>
          <Text style={styles.budgetText}>Shopping</Text>
          <Text style={styles.budgetAmount}>$1950</Text>
        </View>
        <View style={[styles.budgetItem, { backgroundColor: '#a6d8f7' }]}>
          <Text style={styles.budgetText}>Kids</Text>
          <Text style={styles.budgetAmount}>$1950</Text>
        </View>
        <View style={[styles.budgetItem, { backgroundColor: '#d6b89c' }]}>
          <Text style={styles.budgetText}>Food</Text>
          <Text style={styles.budgetAmount}>$1950</Text>
        </View>
        <View style={[styles.budgetItem, { backgroundColor: '#f7a8a8' }]}>
          <Text style={styles.budgetText}>Bills</Text>
          <Text style={styles.budgetAmount}>$100</Text>
        </View>
        <View style={[styles.budgetItem, { backgroundColor: '#fff' }]}>
          <Text style={[styles.budgetText, { color: '#999' }]}>Add Budget</Text>
          <Text style={[styles.budgetAmount, { color: '#999' }]}>$0</Text>
        </View>
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
  card: {
    flex: 1,
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 5,
  },
  incomeCard: {
    backgroundColor: '#b9fbc0',
  },
  expensesCard: {
    backgroundColor: '#fbc0c0',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#000',
    fontFamily: 'ClashDisplay',
  },
  incomeAmount: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginBottom: 8,
    fontFamily: 'ClashDisplay',
  },
  expensesAmount: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginBottom: 8,
    fontFamily: 'ClashDisplay',
  },
  cardDetails: {
    fontSize: 12,
    color: '#555',
    fontFamily: 'ClashDisplay',
  },
  analyticsContainer: {
    marginBottom: 24,
  },
  barChart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 240,
    marginBottom: 12,
  },
  bar: {
    width: 40,
    borderRadius: 10,
    marginHorizontal: 8,
  },
  lineGraph: {
    position: 'absolute',
    top: 0,
    left: 20,
    right: 20,
    height: 240,
    justifyContent: 'space-between',
  },
  linePoint: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#fff',
    top: 20,
    left: 0,
  },
  line: {
    position: 'absolute',
    top: 26,
    left: 6,
    right: 6,
    height: 2,
    backgroundColor: '#fff',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  legendText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'ClashDisplay',
  },
  transactionsContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  transactionImage: {
    width: 150,
    height: 150,
    marginBottom: 12,
  },
  noTransactionsText: {
    color: '#999',
    fontSize: 14,
    fontFamily: 'ClashDisplay',
  },
  budgetsContainer: {
    marginBottom: 24,
  },
  budgetItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  budgetText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'ClashDisplay',
  },
  budgetAmount: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'ClashDisplay',
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
