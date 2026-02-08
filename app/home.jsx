import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Home() {
  const { name } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.username}>{name || 'User'} 👋</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Daily Health Progress</Text>
        <Text style={styles.calorie}>1200 / 1800 kcal</Text>
        <Text style={styles.link}>View Details →</Text>
      </View>

      <Text style={styles.section}>Suggested Meals</Text>

      <View style={styles.mealCard}>
        <Image source={{ uri: 'https://i.imgur.com/JnG6kZ9.jpg' }} style={styles.mealImg} />
        <View>
          <Text style={styles.mealTitle}>Mediterranean Quinoa Bowl</Text>
          <Text style={styles.mealDesc}>Wholesome quinoa, veggies & feta</Text>
          <Text style={styles.kcal}>450 kcal</Text>
        </View>
      </View>

      <View style={styles.orderCard}>
        <Text style={styles.orderTitle}>Your Active Order</Text>
        <Text style={styles.orderId}>Order #NP10293</Text>
        <Text style={styles.eta}>Estimated Delivery: 30 mins</Text>
        <TouchableOpacity style={styles.trackBtn}>
          <Text style={styles.trackText}>Track Order</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.section}>Explore Meals</Text>

      <View style={styles.exploreCard}>
        <Image source={{ uri: 'https://i.imgur.com/fqR9YlS.jpg' }} style={styles.exploreImg} />
        <Text style={styles.exploreText}>Casual Cravings</Text>
      </View>

      <View style={styles.exploreCard}>
        <Image source={{ uri: 'https://i.imgur.com/MpYq2LX.jpg' }} style={styles.exploreImg} />
        <Text style={styles.exploreText}>Nutritional Meals</Text>
      </View>

      <View style={styles.exploreCard}>
        <Image source={{ uri: 'https://i.imgur.com/MpYq2LX.jpg' }} style={styles.exploreImg} />
        <Text style={styles.exploreText}>Nutritional Meals</Text>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9fc', padding: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  welcome: { fontSize: 14, color: '#888' },
  username: { fontSize: 22, fontWeight: '700', color: '#222' },

  card: { backgroundColor: '#dff7f2', padding: 16, borderRadius: 12, marginBottom: 20 },
  cardTitle: { fontSize: 14, color: '#555' },
  calorie: { fontSize: 22, fontWeight: '700', marginVertical: 6 },
  link: { color: '#22b573', fontWeight: '600' },

  section: { fontSize: 18, fontWeight: '700', marginBottom: 12 },

  mealCard: { flexDirection: 'row', backgroundColor: '#fff', padding: 12, borderRadius: 12, marginBottom: 20 },
  mealImg: { width: 70, height: 70, borderRadius: 10, marginRight: 12 },
  mealTitle: { fontSize: 15, fontWeight: '600' },
  mealDesc: { fontSize: 13, color: '#777' },
  kcal: { fontSize: 13, color: '#22b573', fontWeight: '600' },

  orderCard: { backgroundColor: '#22b573', padding: 16, borderRadius: 12, marginBottom: 20 },
  orderTitle: { color: '#fff', fontSize: 14 },
  orderId: { color: '#fff', fontSize: 18, fontWeight: '700' },
  eta: { color: '#eafff7', marginVertical: 6 },
  trackBtn: { backgroundColor: '#fff', padding: 10, borderRadius: 8, marginTop: 6, alignSelf: 'flex-start' },
  trackText: { color: '#22b573', fontWeight: '700' },

  exploreCard: { backgroundColor: '#fff', borderRadius: 14, marginBottom: 16, overflow: 'hidden' },
  exploreImg: { width: '100%', height: 120 },
  exploreText: { position: 'absolute', bottom: 10, left: 10, color: '#fff', fontSize: 16, fontWeight: '700' },
});
