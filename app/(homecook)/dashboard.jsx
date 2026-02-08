import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // ✅ ADDED

export default function HomeCookDashboard() {
  const router = useRouter(); // ✅ ADDED

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons name="shield-checkmark" size={22} color="#22b573" />
          <Text style={styles.headerTitle}>Cook Dashboard</Text>
        </View>

        <View style={styles.headerRight}>
          <Ionicons name="add" size={22} />

          {/* ✅ PROFILE NAVIGATION */}
          <TouchableOpacity onPress={() => router.push('/(homecook)/profile')}>
            <Ionicons name="person-circle-outline" size={26} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Dashboard Overview */}
        <Text style={styles.sectionTitle}>Dashboard Overview</Text>

        <View style={styles.statsRow}>
          <StatCard
            value="254"
            label="Total Orders"
            icon="receipt-outline"
            bg="#dff5ec"
          />
          <StatCard
            value="12"
            label="Pending Items"
            icon="time-outline"
            bg="#e6f1ff"
          />
        </View>

        <View style={styles.statsRow}>
          <StatCard
            value="₹1,240"   
            label="Total Earnings"
            icon="wallet-outline"
            bg="#fff4e5"
          />
          <StatCard
            value="4.8"
            label="Ratings"
            icon="star-outline"
            bg="#f3e8ff"
          />
        </View>

        

        
        {/* Recent Orders */}
        <Text style={styles.sectionTitle}>Recent Orders</Text>

        <ActionItem
  icon="restaurant-outline"
  title="Manage Menu"
  subtitle="View and update your meal offerings"
  onPress={() => router.push('/(homecook)/manage-menu')}
/>

<ActionItem
  icon="list-outline"
  title="Orders List"
  subtitle="Track and manage all customer orders"
  onPress={() => router.push('/(homecook)/order-details')}
/>

<ActionItem
  icon="bar-chart-outline"
  title="Earnings Report"
  subtitle="Review your monthly and weekly earnings"
  onPress={() => router.push('/(homecook)/earnings')}
/>

<ActionItem
  icon="person-outline"
  title="Profile & Logout"
  subtitle="Update personal details or sign out"
  onPress={() => router.push('/(homecook)/profile')}
/>

{/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        
        <OrderCard
          id="NP-2023001"
          items="2x Chicken Salad, 1x Veggie Wrap"
          price="₹28.50"  
          status="Preparing"
        />

        <OrderCard
          id="NP-2023002"
          items="1x Quinoa Bowl, 1x Fruit Smoothie"
          price="₹21.00"   
          status="Accepted"
          buttons={['Prepare', 'Ready']}
        />

        <OrderCard
          id="NP-2023003"
          items="3x Protein Meal Prep"
          price="₹45.00"   
          status="Pending"
          buttons={['Accept', 'Prepare', 'Ready']}
        />
      </ScrollView>

      {/* Bottom Tabs */}
      <View style={styles.bottomNav}>
        <Ionicons name="home" size={22} color="#22b573" />
        <Ionicons name="list-outline" size={22} />

        {/* ✅ PROFILE TAB NAVIGATION */}
        <TouchableOpacity onPress={() => router.push('/(homecook)/profile')}>
          <Ionicons name="person-outline" size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* ---------- Components ---------- */

function StatCard({ value, label, icon, bg }) {
  return (
    <View style={[styles.statCard, { backgroundColor: bg }]}>
      <Ionicons name={icon} size={20} color="#333" />
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function ActionItem({ icon, title, subtitle, onPress }) {
  return (
    <TouchableOpacity style={styles.actionItem} onPress={onPress}>
      <Ionicons name={icon} size={22} color="#22b573" />
      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={styles.actionTitle}>{title}</Text>
        <Text style={styles.actionSubtitle}>{subtitle}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#999" />
    </TouchableOpacity>
  );
}


function OrderCard({ id, items, price, status, buttons = [] }) {
  return (
    <View style={styles.orderCard}>
      <View style={styles.orderHeader}>
        <Text style={styles.orderId}>Order ID: {id}</Text>
        <Text style={styles.orderStatus}>{status}</Text>
      </View>

      <Text style={styles.orderItems}>{items}</Text>
      <Text style={styles.orderPrice}>{price}</Text>

      {buttons.length > 0 && (
        <View style={styles.orderActions}>
          {buttons.map(btn => (
            <TouchableOpacity
              key={btn}
              style={[
                styles.orderBtn,
                btn === 'Accept' && styles.acceptBtn,
              ]}
            >
              <Text
                style={[
                  styles.orderBtnText,
                  btn === 'Accept' && { color: '#fff' },
                ]}
              >
                {btn}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
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
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 12,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 12,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  statCard: {
    width: '48%',
    borderRadius: 14,
    padding: 14,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 6,
  },
  statLabel: {
    fontSize: 12,
    color: '#555',
  },

  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  actionSubtitle: {
    fontSize: 12,
    color: '#777',
  },

  orderCard: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderId: {
    fontSize: 12,
    color: '#666',
  },
  orderStatus: {
    fontSize: 12,
    backgroundColor: '#eee',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  orderItems: {
    marginTop: 6,
    fontSize: 13,
  },
  orderPrice: {
    marginTop: 6,
    fontWeight: '600',
  },
  orderActions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
  },
  orderBtn: {
    borderWidth: 1,
    borderColor: '#22b573',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  acceptBtn: {
    backgroundColor: '#22b573',
  },
  orderBtnText: {
    fontSize: 12,
    color: '#22b573',
    fontWeight: '600',
  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
});
