import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function OrderDetails() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order Details</Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Customer Details */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Customer Details</Text>

          <View style={styles.infoRow}>
            <Ionicons name="person-outline" size={16} />
            <Text style={styles.infoText}>Sarah Johnson</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={16} />
            <Text style={styles.infoText}>
              456 Oak Avenue, Springfield, IL 62704
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="call-outline" size={16} />
            <Text style={styles.infoText}>+1 (217) 555-1234</Text>
          </View>
        </View>

        {/* Order Items */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Order Items</Text>

          <View style={styles.itemRow}>
            <View style={styles.itemImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.itemName}>Grilled Salmon Salad</Text>
              <Text style={styles.itemDesc}>
                • No dressing, extra lemon wedges.
              </Text>
            </View>
            <Text style={styles.itemQty}>x1</Text>
          </View>

          <View style={styles.itemRow}>
            <View style={styles.itemImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.itemName}>
                Quinoa Bowl with Roasted Vegetables
              </Text>
              <Text style={styles.itemDesc}>
                + Add avocado, light on the pesto.
              </Text>
            </View>
            <Text style={styles.itemQty}>x2</Text>
          </View>
        </View>

        {/* Order Status */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Order Status</Text>

          <View style={styles.statusRow}>
            <View style={styles.statusLeft}>
              <Ionicons name="ellipse-outline" size={16} />
              <Text style={styles.statusText}>Status</Text>
            </View>
            <Text style={styles.statusBadge}>Accepted</Text>
          </View>

          <View style={styles.statusRow}>
            <View style={styles.statusLeft}>
              <Ionicons name="time-outline" size={16} />
              <Text style={styles.statusText}>Estimated Prep Time</Text>
            </View>
            <Text style={styles.statusTime}>25 mins</Text>
          </View>
        </View>

        {/* Buttons */}
        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryText}>Accept Order</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryBtn}>
          <Text style={styles.secondaryText}>Decline Order</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ghostBtn}>
          <Text style={styles.ghostText}>Update Status</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Tabs */}
      <View style={styles.bottomNav}>
        <View style={styles.tab}>
          <Ionicons name="person-outline" size={22} />
          <Text style={styles.tabText}>Profile</Text>
        </View>

        <View style={styles.tabActive}>
          <Ionicons name="list" size={22} color="#22b573" />
          <Text style={styles.tabTextActive}>Orders</Text>
        </View>

        <View style={styles.tab}>
          <Ionicons name="wallet-outline" size={22} />
          <Text style={styles.tabText}>Earnings</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },

  header: {
    marginTop: 45,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
  },

  infoRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 13,
    color: '#555',
    flex: 1,
  },

  itemRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 12,
  },
  itemImage: {
    width: 42,
    height: 42,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  itemName: {
    fontSize: 13,
    fontWeight: '600',
  },
  itemDesc: {
    fontSize: 12,
    color: '#777',
  },
  itemQty: {
    fontSize: 13,
    fontWeight: '600',
  },

  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  statusLeft: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 13,
    color: '#555',
  },
  statusBadge: {
    backgroundColor: '#dff5ec',
    color: '#22b573',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: '600',
  },
  statusTime: {
    fontSize: 13,
    fontWeight: '500',
  },

  primaryBtn: {
    backgroundColor: '#a9795a',
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  primaryText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },

  secondaryBtn: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  secondaryText: {
    textAlign: 'center',
    fontWeight: '600',
  },

  ghostBtn: {
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
    marginBottom: 20,
  },
  ghostText: {
    textAlign: 'center',
    color: '#555',
    fontWeight: '600',
  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  tab: {
    alignItems: 'center',
  },
  tabActive: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 11,
    color: '#777',
  },
  tabTextActive: {
    fontSize: 11,
    color: '#22b573',
    fontWeight: '600',
  },
});
