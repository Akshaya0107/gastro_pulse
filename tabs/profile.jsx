import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Image,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useGlobalSearchParams, useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

export default function Profile() {
  const { name } = useGlobalSearchParams();
  const router = useRouter();
  const [notifications, setNotifications] = useState(true);
  const [username, setUsername] = useState('User');

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const storedName = await SecureStore.getItemAsync('username');
    if (storedName) setUsername(storedName);
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync('userToken');
    await SecureStore.deleteItemAsync('username');

    router.replace('/login');
  };

  const Row = ({ icon, label, onPress }) => (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <View style={styles.rowLeft}>
        <Ionicons name={icon} size={18} color="#22b573" />
        <Text style={styles.rowText}>{label}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#aaa" />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="checkmark-circle" size={26} color="#22b573" />
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => Alert.alert('Settings')}>
            <Ionicons name="settings-outline" size={22} color="#444" />
          </TouchableOpacity>
          <Image
            source={{ uri: 'https://i.imgur.com/1X6pK4m.png' }}
            style={styles.avatar}
          />
        </View>
      </View>

      <Text style={styles.title}>Profile & Settings</Text>

      {/* Profile Card */}
      <TouchableOpacity
        style={styles.profileCard}
        onPress={() => Alert.alert('Edit Profile')}
      >
        <Image
                   source={require('../../assets/profile.jpg')}
                   style={styles.avatar}
                 />
        <View style={{ flex: 1 }}>
          <Text style={styles.profileName}>
            {name || username || 'User'}
          </Text>
          <Text style={styles.profileSub}>Health Goal: Maintain Weight</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#aaa" />
      </TouchableOpacity>

      <Row icon="receipt-outline" label="Order History" onPress={() => Alert.alert('Order History')} />
      <Row icon="heart-outline" label="Saved Meals" onPress={() => Alert.alert('Saved Meals')} />

      <Text style={styles.section}>Join NutriPlate Community</Text>

      <Row
        icon="restaurant-outline"
        label="Join as Home Cook"
        onPress={() => router.push('/signup/home-cook')}
      />

      <Row
        icon="bicycle-outline"
        label="Join as Delivery Partner"
        onPress={() => router.push('/signup/delivery')}
      />

      <Row
        icon="cart-outline"
        label="Cart"
        onPress={() => router.push('/tabs/cart')}
      />

      <Row
        icon="chatbox-ellipses-outline"
        label="Feedback"
        onPress={() => Alert.alert('Feedback')}
      />

      <Row
        icon="help-circle-outline"
        label="Help"
        onPress={() => Alert.alert('Help Center')}
      />

      <Text style={styles.section}>App Preferences</Text>

      <View style={styles.row}>
        <View style={styles.rowLeft}>
          <Ionicons name="notifications-outline" size={18} color="#22b573" />
          <Text style={styles.rowText}>Notifications</Text>
        </View>
        <Switch
          value={notifications}
          onValueChange={setNotifications}
          trackColor={{ true: '#22b573' }}
        />
      </View>

      <Row
        icon="lock-closed-outline"
        label="Privacy"
        onPress={() => Alert.alert('Privacy Settings')}
      />

      <Row
        icon="settings-outline"
        label="App Preferences"
        onPress={() => Alert.alert('App Settings')}
      />

      <Row
        icon="log-out-outline"
        label="Logout"
        onPress={() => {
          Alert.alert('Logout', 'Are you sure?', [
            { text: 'Cancel' },
            { text: 'Logout', onPress: logout },
          ]);
        }}
      />

      <View style={{ height: 80 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9fc', padding: 16 },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatar: { width: 36, height: 36, borderRadius: 18 },

  title: {
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 16,
  },

  profileCard: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  profileImg: {
    width: 52,
    height: 52,
    borderRadius: 26,
    marginRight: 12,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '700',
  },
  profileSub: {
    fontSize: 12,
    color: '#777',
  },

  section: {
    marginTop: 18,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '700',
    color: '#888',
  },

  row: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  rowText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
