import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu-outline" size={24} />
        <Text style={styles.headerTitle}>User Home Page</Text>
        <Ionicons name="person-circle-outline" size={26} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Daily Health Progress */}
        <View style={styles.healthCard}>
          <Text style={styles.cardTitle}>Daily Health Progress</Text>
          <Text style={styles.calories}>1200 / 1800 kcal</Text>
          <TouchableOpacity>
            <Text style={styles.viewDetails}>View Details</Text>
          </TouchableOpacity>
        </View>

        {/* Suggested Meals */}
        <Text style={styles.sectionTitle}>Suggested Meals</Text>

        <MealCard title="Mediterranean Quinoa Bowl" calories="420 kcal" />
        <MealCard title="Grilled Chicken Salad" calories="380 kcal" />

        {/* Active Order */}
        <Text style={styles.sectionTitle}>Your Active Order</Text>

        <View style={styles.orderCard}>
          <Text style={styles.orderId}>Order #NP1023</Text>
          <Text style={styles.orderStatus}>Estimated Delivery: 30 mins</Text>
          <TouchableOpacity style={styles.trackBtn}>
            <Text style={styles.trackText}>Track Order</Text>
          </TouchableOpacity>
        </View>

        {/* Explore Meals */}
        <Text style={styles.sectionTitle}>Explore Meals</Text>

        <ExploreCard title="Casual Cravings" />
        <ExploreCard title="Nutritional Meals" />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home" size={22} color="#22b573" />
        <Ionicons name="cart-outline" size={22} />
        <Ionicons name="person-outline" size={22} />
      </View>
    </View>
  );
}

/* ---------- Components ---------- */

function MealCard({ title, calories }) {
  return (
    <View style={styles.mealCard}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
        }}
        style={styles.mealImage}
      />
      <View style={styles.mealInfo}>
        <Text style={styles.mealTitle}>{title}</Text>
        <Text style={styles.mealCalories}>{calories}</Text>
      </View>
      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

function ExploreCard({ title }) {
  return (
    <View style={styles.exploreCard}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
        }}
        style={styles.exploreImage}
      />
      <Text style={styles.exploreTitle}>{title}</Text>
    </View>
  );
}

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },

  header: {
    marginTop: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  healthCard: {
    backgroundColor: '#dff5ec',
    borderRadius: 14,
    padding: 16,
    marginVertical: 20,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  calories: {
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 6,
  },
  viewDetails: {
    color: '#22b573',
    fontSize: 13,
    fontWeight: '500',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },

  mealCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
  },
  mealImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  mealInfo: {
    flex: 1,
    marginLeft: 10,
  },
  mealTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  mealCalories: {
    fontSize: 12,
    color: '#777',
  },
  addBtn: {
    backgroundColor: '#22b573',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  addText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },

  orderCard: {
    backgroundColor: '#eaf7f1',
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
  },
  orderId: {
    fontSize: 14,
    fontWeight: '600',
  },
  orderStatus: {
    fontSize: 12,
    marginVertical: 6,
  },
  trackBtn: {
    alignSelf: 'flex-start',
    backgroundColor: '#22b573',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  trackText: {
    color: '#fff',
    fontSize: 12,
  },

  exploreCard: {
    marginBottom: 16,
  },
  exploreImage: {
    width: '100%',
    height: 140,
    borderRadius: 14,
  },
  exploreTitle: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
});
