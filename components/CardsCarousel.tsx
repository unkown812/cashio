import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;
const CARD_HEIGHT = 180;

const cardsData = [
  {
    id: '1',
    bankName: 'ADRBank',
    cardNumber: '8763 2736 9873 0329',
    cardHolder: 'HILLERY NEVELIN',
    expiry: '12/28',
    colors: ['#FAD961', '#F76B1C'], // gradient colors
  },
  {
    id: '2',
    bankName: 'XYZ Bank',
    cardNumber: '1234 5678 9012 3456',
    cardHolder: 'JANE DOE',
    expiry: '11/25',
    colors: ['#00C6FF', '#0072FF'],
  },
  // Add more cards as needed
];

export default function CardsCarousel() {
import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, ListRenderItem } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;
const CARD_HEIGHT = 180;

type Card = {
  id: string;
  bankName: string;
  cardNumber: string;
  cardHolder: string;
  expiry: string;
  colors: string[];
};

const cardsData: Card[] = [
  {
    id: '1',
    bankName: 'ADRBank',
    cardNumber: '8763 2736 9873 0329',
    cardHolder: 'HILLERY NEVELIN',
    expiry: '12/28',
    colors: ['#FAD961', '#F76B1C'], // gradient colors
  },
  {
    id: '2',
    bankName: 'XYZ Bank',
    cardNumber: '1234 5678 9012 3456',
    cardHolder: 'JANE DOE',
    expiry: '11/25',
    colors: ['#00C6FF', '#0072FF'],
  },
  // Add more cards as needed
];

const renderCard: ListRenderItem<Card> = ({ item }) => (
  <LinearGradient colors={item.colors} style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.bankName}>{item.bankName}</Text>
      <Text style={styles.refreshIcon}>⟳</Text>
    </View>
    <Text style={styles.cardNumber}>{item.cardNumber}</Text>
    <View style={styles.cardFooter}>
      <View>
        <Text style={styles.cardLabel}>Card Holder Name</Text>
        <Text style={styles.cardValue}>{item.cardHolder}</Text>
      </View>
      <View>
        <Text style={styles.cardLabel}>Expired Date</Text>
        <Text style={styles.cardValue}>{item.expiry}</Text>
      </View>
      <View style={styles.mastercardLogo}>
        <View style={styles.circleRed} />
        <View style={styles.circleYellow} />
      </View>
    </View>
  </LinearGradient>
);

export default function CardsCarousel() {
  return (
    <FlatList
      data={cardsData}
      renderItem={renderCard}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH + 20}
      decelerationRate="fast"
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 20,
    padding: 20,
    marginRight: 20,
    justifyContent: 'space-between',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bankName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  refreshIcon: {
    color: '#fff',
    fontSize: 20,
  },
  cardNumber: {
    color: '#fff',
    fontSize: 22,
    letterSpacing: 3,
    marginVertical: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLabel: {
    color: '#ddd',
    fontSize: 12,
  },
  cardValue: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  mastercardLogo: {
    flexDirection: 'row',
    width: 40,
    justifyContent: 'space-between',
  },
  circleRed: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#EB001B',
  },
  circleYellow: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#F79E1B',
    marginLeft: -10,
  },
});
    <LinearGradient colors={item.colors} style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.bankName}>{item.bankName}</Text>
        <Text style={styles.refreshIcon}>⟳</Text>
      </View>
      <Text style={styles.cardNumber}>{item.cardNumber}</Text>
      <View style={styles.cardFooter}>
        <View>
          <Text style={styles.cardLabel}>Card Holder Name</Text>
          <Text style={styles.cardValue}>{item.cardHolder}</Text>
        </View>
        <View>
          <Text style={styles.cardLabel}>Expired Date</Text>
          <Text style={styles.cardValue}>{item.expiry}</Text>
        </View>
        <View style={styles.mastercardLogo}>
          <View style={styles.circleRed} />
          <View style={styles.circleYellow} />
        </View>
      </View>
    </LinearGradient>
  );

  return (
    <FlatList
      data={cardsData}
      renderItem={renderCard}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH + 20}
      decelerationRate="fast"
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 20,
    padding: 20,
    marginRight: 20,
    justifyContent: 'space-between',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bankName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  refreshIcon: {
    color: '#fff',
    fontSize: 20,
  },
  cardNumber: {
    color: '#fff',
    fontSize: 22,
    letterSpacing: 3,
    marginVertical: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLabel: {
    color: '#ddd',
    fontSize: 12,
  },
  cardValue: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  mastercardLogo: {
    flexDirection: 'row',
    width: 40,
    justifyContent: 'space-between',
  },
  circleRed: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#EB001B',
  },
  circleYellow: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#F79E1B',
    marginLeft: -10,
  },
});
