
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const roles = [
  {
    id: 'user',
    title: 'User',
    description: 'Order personalized, healthy meals',
    icon: 'person-outline',
    route: '/signup/user',
  },
  {
    id: 'homecook',
    title: 'Home Cook',
    description: 'Share your culinary skills and earn',
    icon: 'restaurant-outline',
    route: '/signup/home-cook',
  },
  {
    id: 'delivery',
    title: 'Delivery Partner',
    description: 'Deliver health to doorsteps',
    icon: 'bicycle-outline',
    route: '/signup/delivery',
  },
];

export default function RoleSelection() {
  const router = useRouter();

  const onSelectRole = (roleId) => {
  if (roleId === 'user') {
    router.push('/signup/user');        // User signup page
  } else if (roleId === 'homecook') {
    router.push('/signup/home-cook');   // Home Cook signup page
  } else if (roleId === 'delivery') {
    router.push('/signup/delivery');    // Delivery Partner signup page
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>
        Choose your role to get started{'\n'}
        <Text style={styles.subtitleSmall}>
          Select how you'd like to experience NutriPlate.
        </Text>
      </Text>

      <View style={styles.cardsContainer}>
        {roles.map(({ id, title, description, icon }) => (
          <TouchableOpacity
            key={id}
            style={styles.card}
            activeOpacity={0.7}
            onPress={() => onSelectRole(id)}
          >
            <Ionicons name={icon} size={32} color="#22b573" style={styles.icon} />
            <View>
              <Text style={styles.cardTitle}>{title}</Text>
              <Text style={styles.cardDesc}>{description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center', // vertical centering
    alignItems: 'center',     // horizontal centering
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
    fontFamily: 'System', // default font
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
    fontFamily: 'System',
  },
  subtitleSmall: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666',
    fontFamily: 'System',
  },
  cardsContainer: {
    width: '100%',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f7f9f9',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  icon: {
    marginRight: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    fontFamily: 'System',
  },
  cardDesc: {
    fontSize: 14,
    color: '#666',
    fontWeight: '400',
    fontFamily: 'System',
  },
});
