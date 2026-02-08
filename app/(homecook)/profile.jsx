import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Profile() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Profile</Text>

        {/* spacer for centering */}
        <View style={{ width: 22 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          {/* Profile Picture */}
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
            }}
            style={styles.avatar}
          />

          {/* Logo */}
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_placeholder.svg/120px-Logo_placeholder.svg.png",
            }}
            style={styles.logo}
          />

          <Text style={styles.name}>Chef Emily R.</Text>
          <Text style={styles.role}>Home Cook</Text>

          <Text style={styles.bio}>
            Passionate home chef specializing in Mediterranean cuisine. Known for
            healthy, flavorful meals crafted with fresh ingredients.
          </Text>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsCard}>
          <View style={styles.stat}>
            <Ionicons name="receipt-outline" size={20} color="#a97c64" />
            <Text style={styles.statValue}>2,345</Text>
            <Text style={styles.statLabel}>Orders</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.stat}>
            <Ionicons name="wallet-outline" size={20} color="#a97c64" />
            <Text style={styles.statValue}>₹12,890</Text>
            <Text style={styles.statLabel}>Earnings</Text>
          </View>
        </View>

        {/* Add New Item */}
        <TouchableOpacity
          style={styles.addCard}
          onPress={() => router.push("/(homecook)/new-dish")}
        >
          <Ionicons name="add-circle-outline" size={22} color="#a97c64" />
          <Text style={styles.addText}>Add new item</Text>
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity
          style={styles.logout}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Tabs (visual match only) */}
      <View style={styles.bottomTabs}>
        <Ionicons name="person" size={22} color="#a97c64" />
        <Ionicons name="restaurant-outline" size={22} color="#999" />
        <Ionicons name="wallet-outline" size={22} color="#999" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  /* Profile */
  profileSection: {
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 8,
  },
  logo: {
    width: 36,
    height: 36,
    marginBottom: 6,
    resizeMode: "contain",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  role: {
    color: "#a97c64",
    marginBottom: 10,
  },
  bio: {
    textAlign: "center",
    color: "#666",
    lineHeight: 20,
    marginTop: 6,
  },

  /* Stats */
  statsCard: {
    marginHorizontal: 16,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 12,
    flexDirection: "row",
    paddingVertical: 16,
  },
  stat: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    fontWeight: "600",
    marginTop: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#777",
  },
  divider: {
    width: 1,
    backgroundColor: "#eee",
  },

  /* Add Item */
  addCard: {
    margin: 16,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  addText: {
    fontWeight: "500",
  },

  /* Logout */
  logout: {
    marginHorizontal: 16,
    backgroundColor: "#a97c64",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontWeight: "600",
  },

  /* Bottom Tabs */
  bottomTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
});
