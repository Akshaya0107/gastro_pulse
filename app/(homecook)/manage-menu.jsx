import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ManageMenu() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Manage Menu</Text>
        <TouchableOpacity onPress={() => router.push('/(homecook)/new-dish')}>
          <Ionicons name="add" size={24} color="#22b573" />
        </TouchableOpacity>
      </View>

      {/* Chef Details */}
<View style={styles.chefCard}>

  <View style={styles.chefAvatar}>
  <Image
    source={{
      uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    }}
    style={styles.chefImage}
  />
</View>


  <View style={{ flex: 1 }}>
    <Text style={styles.chefName}>Chef Ananya</Text>
    <Text style={styles.chefCuisine}>
      Food Type Specialization: South Indian, Healthy Meals
    </Text>

    <View style={styles.chefMetaRow}>
      <Text style={styles.chefMeta}>⭐ 4.8 Rating</Text>
      <Text style={styles.chefMeta}>• 5+ Years Experience</Text>
    </View>

    <Text style={styles.chefLocation}>
      📍 Chennai, Tamil Nadu
    </Text>
  </View>
</View>


      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Quick Stats */}
        <View style={styles.statsRow}>
          <StatBox value="2,345" label="Total Orders" />
          <StatBox value="₹32,890" label="Total Earnings" />
        </View>

        {/* My Dishes */}
        <Text style={styles.sectionTitle}>My Dishes</Text>


         <View style={styles.container}>

    {/* Menu List */}
    <ScrollView showsVerticalScrollIndicator={false}>

      <DishCard title="Mediterranean Quinoa Bowl" />

      <DishCard title="Spicy Stir Fry" />

      <DishCard title="Grilled Chicken Meal" />

    </ScrollView>

  </View>


        {/* Add New Dish */}
        <TouchableOpacity
          style={styles.addDishBtn}
          onPress={() => router.push('/(homecook)/new-dish')}
        >
          <Ionicons name="add" size={20} color="#fff" />
          <Text style={styles.addDishText}>Add New Dish</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

/* ---------- Components ---------- */

function StatBox({ value, label }) {
  return (
    <View style={styles.statBox}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function DishCard({ title }) {
  return (
    <View style={styles.dishCard}>
      {/* Empty Image Box */}
      <View style={styles.imagePlaceholder} />

      <Text style={styles.dishTitle}>{title}</Text>
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

  imagePlaceholder: {
  width: '100%',
  height: 100,
  backgroundColor: '#eaeaea',
  borderRadius: 12,
  marginBottom: 8,
},

dishCard: {
  backgroundColor: '#fff',
  borderRadius: 16,
  padding: 12,
  marginBottom: 16,
  elevation: 2,
},

chefImage: {
  width: '100%',
  height: '100%',
  borderRadius: 30,
},

dishTitle: {
  fontSize: 14,
  fontWeight: '600',
},


  header: {
    marginTop: 45,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statBox: {
    width: '48%',
    backgroundColor: '#f8f8f8',
    borderRadius: 14,
    padding: 16,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },

  dishGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dishCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#eee',
    overflow: 'hidden',
  },
  dishImage: {
    width: '100%',
    height: 110,
  },
  dishTitle: {
    padding: 10,
    fontSize: 13,
    fontWeight: '600',
  },

  addDishBtn: {
    marginTop: 25,
    backgroundColor: '#9b6b53',
    padding: 14,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 30,
  },
  addDishText: {
    color: '#fff',
    fontWeight: '600',
  },

  chefCard: {
  flexDirection: 'row',
  backgroundColor: '#f9f9f9',
  padding: 14,
  borderRadius: 16,
  marginTop: 16,
  marginBottom: 20,
  alignItems: 'center',
},

chefAvatar: {
  width: 60,
  height: 60,
  borderRadius: 30,
  backgroundColor: '#e0e0e0', // placeholder image box
  marginRight: 12,
},

chefName: {
  fontSize: 16,
  fontWeight: '700',
},

chefCuisine: {
  fontSize: 13,
  color: '#555',
  marginTop: 2,
},

chefMetaRow: {
  flexDirection: 'row',
  marginTop: 6,
},

chefMeta: {
  fontSize: 12,
  color: '#666',
  marginRight: 8,
},

chefLocation: {
  fontSize: 12,
  color: '#777',
  marginTop: 4,
},

});
