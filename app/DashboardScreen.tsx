
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { initDatabase, fetchCards, insertCard, deleteCard } from '../utils/database';

const gradients = [
  ['#00c6ff', '#0072ff'],
  ['#f7971e', '#ffd200'],
  ['#00b09b', '#96c93d'],
  ['#ff512f', '#dd2476'],
  ['#1f4037', '#99f2c8'],
];

function Card({ card, onRemove }: { card: any; onRemove: (id: number) => void }) {
  return (
    <LinearGradient
      colors={[card.gradientStart, card.gradientEnd]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <Text style={styles.bankName}>{card.bankName}</Text>
      <Text style={styles.cardNumber}>{card.cardNumber}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.cardHolder}>{card.cardHolder}</Text>
        <Text style={styles.expiryDate}>{card.expiryDate}</Text>
        <TouchableOpacity onPress={() => onRemove(card.id)} style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

export default function DashboardScreen() {
  const { balance } = useLocalSearchParams();
  const router = useRouter();

  const [cards, setCards] = useState<any[]>([]);

  const [bankNameInput, setBankNameInput] = useState('');
  const [cardNumberInput, setCardNumberInput] = useState('');
  const [cardHolderInput, setCardHolderInput] = useState('');
  const [expiryDateInput, setExpiryDateInput] = useState('');

  const [showAddCard, setShowAddCard] = useState(false);

  useEffect(() => {
    initDatabase();
    loadCards();
  }, []);

  const loadCards = async () => {
    try {
      const data = await fetchCards();
      setCards(data);
    } catch (error) {
      console.error('Failed to fetch cards:', error);
    }
  };

  const addCard = async () => {
    if (!bankNameInput || !cardNumberInput || !cardHolderInput || !expiryDateInput) {
      Alert.alert('Error', 'Please fill in all card details.');
      return;
    }

    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

    try {
      await insertCard(bankNameInput, cardNumberInput, cardHolderInput, expiryDateInput, randomGradient[0], randomGradient[1]);
      setBankNameInput('');
      setCardNumberInput('');
      setCardHolderInput('');
      setExpiryDateInput('');
      setShowAddCard(false);
      loadCards();
    } catch (error) {
      Alert.alert('Error', 'Failed to add card');
      console.error('Insert card error:', error);
    }
  };

  const removeCard = (id: number) => {
    Alert.alert(
      'Remove Card',
      'Are you sure you want to remove this card?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteCard(id);
              loadCards();
            } catch (error) {
              Alert.alert('Error', 'Failed to remove card');
              console.error('Delete card error:', error);
            }
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#fff" style={{marginLeft:10}}/>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#fff"
          style={styles.searchInput}
        />
      </View>

      {/* Available Balance */}
      <Text style={styles.sectionTitle}>Available balance</Text>
      <Text style={styles.balanceTitle}>{balance ? `$${balance}` : 'Enter Balance'}</Text>

      {/* Toggle Add Card Module Button */}
      <TouchableOpacity
        style={[styles.addButton, { marginBottom: 10 }]}
        onPress={() => setShowAddCard(!showAddCard)}
      >
        <Text style={styles.addButtonText}>
          {showAddCard ? 'Hide' : 'Add Card'}
        </Text>
      </TouchableOpacity>

      {/* Input fields for new card details */}
      {showAddCard && (
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Bank Name"
            placeholderTextColor="#999"
            style={styles.input}
            value={bankNameInput}
            onChangeText={setBankNameInput}
          />
          <TextInput
            placeholder="Card Number"
            placeholderTextColor="#999"
            style={styles.input}
            value={cardNumberInput}
            onChangeText={setCardNumberInput}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Card Holder"
            placeholderTextColor="#999"
            style={styles.input}
            value={cardHolderInput}
            onChangeText={setCardHolderInput}
          />
          <TextInput
            placeholder="Expiry Date (MM/YY)"
            placeholderTextColor="#999"
            style={styles.input}
            value={expiryDateInput}
            onChangeText={setExpiryDateInput}
          />
        </View>
      )}

      {/* Add Card Button */}
      {showAddCard && (
        <TouchableOpacity style={styles.addButton} onPress={addCard}>
          <Text style={styles.addButtonText}>Add Card</Text>
        </TouchableOpacity>
      )}

      {/* Cards List */}
      {cards.map(card => (
        <Card key={card.id} card={card} onRemove={removeCard}  />
      ))}

      {/* Pay and Receive */}
      <Text style={styles.sectionTitle}>Pay and Receive</Text>
      <View style={styles.payReceiveContainer}>
        <TouchableOpacity style={styles.IncomeButton} onPress={() => router.push('/AddTransaction')}>
          {/* <Ionicons name="caret-up-outline" size={30} color="#000" /> */}
          <Text style={styles.IncomeText}>Income</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ExpenseButton} onPress={() => router.push('/AddTransaction')}>
          {/* <Ionicons name="caret-down-outline" size={30} color="#000" /> */}
          <Text style={styles.ExpenseText}>Expense</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Activity */}
      <Text style={styles.sectionTitle}>Recent Activity</Text>
      <View style={styles.recentActivity}>
        <Image
          source={require('../assets/images/hands-holding-cc.png')}
          style={styles.recentImage}
          resizeMode="contain"
        />
        <Text style={styles.recentText}>Keep track of your transactions</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#737373',
    borderRadius: 10,
    alignContent: "center",
    alignItems: "center",
    marginBottom: 20,
    height: 40,
    fontFamily: "ClashDisplay",
  },
  searchInput: {
    flex: 1,
    color: '#ffffff',
    fontFamily: "ClashDisplay",
    fontSize: 16,
    alignContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
  },
  sectionTitle: {
    color: '#999',
    fontSize: 14,
    fontFamily: "ClashDisplay",
    marginBottom: 4,
    marginTop: 20,
  },
  balanceTitle: {
    color: '#fff',
    fontFamily: "ClashDisplay",
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontFamily: "ClashDisplay",
    fontSize: 16,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#0072ff',
    fontFamily: "ClashDisplay",
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontFamily: "ClashDisplay",
    fontSize: 16,
  },
  card: {
    borderRadius: 20,
    fontFamily: "ClashDisplay",
    padding: 20,
    marginBottom: 20,
  },
  bankName: {
    color: '#fff',
    fontFamily: "ClashDisplay",
    fontSize: 16,
    marginBottom: 20,
  },
  cardNumber: {
    color: '#fff',
    fontSize: 20,
    fontFamily: "ClashDisplay",
    letterSpacing: 3,
    marginBottom: 20,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: "ClashDisplay",
  },
  cardHolder: {
    color: '#fff',
    fontSize: 14,
  },
  expiryDate: {
    color: '#fff',
    fontSize: 14,
  },
  cardLogo: {
    width: 50,
    height: 30,
  },
  removeButton: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  payReceiveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 10,
  },
  IncomeButton: {
    backgroundColor: '#B8FFC7',
    color: "#2E4032",
    borderRadius: 15,
    width: 170,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  ExpenseButton: {
    backgroundColor: '#FFB8B8',
    color: "",
    borderRadius: 15,
    width: 170,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  IncomeText: {
    textAlignVertical: "center",
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: "ClashDisplay",
  },
  ExpenseText: {
    textAlignVertical: "center",
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: "ClashDisplay",
  },
  recentActivity: {
    marginTop: 20,
    alignItems: 'center',
  },
  recentImage: {
    width: 200,
    height: 150,
    marginBottom: 10,
  },
  recentText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: "ClashDisplay",
  },
});
