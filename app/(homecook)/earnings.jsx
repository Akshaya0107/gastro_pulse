import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Earnings() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={22} />
        <Text style={styles.headerTitle}>Earning</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Summary Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Your Earnings Summary</Text>

          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Ionicons name="trending-up-outline" size={18} />
              <Text style={styles.rowLabel}>Total Earnings</Text>
            </View>
            <Text style={styles.totalAmount}>₹12,450.75</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Ionicons name="time-outline" size={18} />
              <Text style={styles.rowLabel}>Pending Payout</Text>
            </View>
            <Text style={styles.pendingAmount}>₹320.00</Text>
          </View>
        </View>

        {/* Request Payout */}
        <TouchableOpacity style={styles.payoutBtn}>
          <Ionicons name="wallet-outline" size={18} color="#fff" />
          <Text style={styles.payoutText}>Request Payout</Text>
        </TouchableOpacity>

        {/* Transaction Header */}
        <View style={styles.transactionHeader}>
          <Text style={styles.sectionTitle}>Transaction History</Text>
          <View style={styles.last30}>
            <Ionicons name="calendar-outline" size={16} />
            <Text style={styles.last30Text}>Last 30 Days</Text>
          </View>
        </View>

        {/* Transactions */}
        {transactions.map((item, index) => (
          <View key={index} style={styles.transaction}>
            <Text style={styles.date}>{item.date}</Text>

            <View style={styles.transactionRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.desc}>{item.desc}</Text>
                <View
                  style={[
                    styles.status,
                    item.status === "Completed"
                      ? styles.completed
                      : styles.pending,
                  ]}
                >
                  <Text style={styles.statusText}>{item.status}</Text>
                </View>
              </View>

              <Text
                style={[
                  styles.amount,
                  item.amount.startsWith("-")
                    ? styles.debit
                    : styles.credit,
                ]}
              >
                {item.amount}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Tabs (visual only) */}
      <View style={styles.bottomTabs}>
        <Ionicons name="person-outline" size={22} color="#999" />
        <Ionicons name="restaurant-outline" size={22} color="#999" />
        <Ionicons name="wallet" size={22} color="#a97c64" />
      </View>
    </View>
  );
}

const transactions = [
  {
    date: "Aug 10, 2024",
    desc: "Meal Order #7890 (Pasta Carbonara)",
    amount: "+₹45.99",
    status: "Completed",
  },
  {
    date: "Aug 07, 2024",
    desc: "Weekly Payout",
    amount: "-₹200.00",
    status: "Completed",
  },
  {
    date: "Aug 05, 2024",
    desc: "Ingredient Reimbursement (Tomatoes)",
    amount: "+₹12.50",
    status: "Pending",
  },
  {
    date: "Jul 30, 2024",
    desc: "Meal Order #7889 (Chicken Salad)",
    amount: "+₹32.00",
    status: "Completed",
  },
  {
    date: "Jul 28, 2024",
    desc: "Meal Order #7888 (Vegan Burger)",
    amount: "+₹28.50",
    status: "Completed",
  },
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  headerTitle: { fontSize: 18, fontWeight: "600", marginLeft: 10 },

  card: {
    margin: 16,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 12,
    padding: 16,
  },
  cardTitle: { fontWeight: "600", marginBottom: 12 },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowLeft: { flexDirection: "row", alignItems: "center", gap: 8 },
  rowLabel: { color: "#666" },

  totalAmount: {
    fontSize: 22,
    fontWeight: "700",
    color: "#a97c64",
  },
  pendingAmount: { fontSize: 16, fontWeight: "600" },

  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 12,
  },

  payoutBtn: {
    marginHorizontal: 16,
    backgroundColor: "#a97c64",
    padding: 14,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  payoutText: { color: "#fff", fontWeight: "600" },

  transactionHeader: {
    marginTop: 20,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: { fontWeight: "600", fontSize: 16 },
  last30: { flexDirection: "row", alignItems: "center", gap: 6 },
  last30Text: { color: "#666", fontSize: 12 },

  transaction: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  date: { color: "#888", fontSize: 12, marginBottom: 6 },

  transactionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  desc: { fontWeight: "500", marginBottom: 6 },

  status: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  completed: { backgroundColor: "#9dd3c7" },
  pending: { backgroundColor: "#e25c5c" },
  statusText: { fontSize: 12, color: "#fff" },

  amount: { fontWeight: "600" },
  credit: { color: "#000" },
  debit: { color: "#000" },

  bottomTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
});
