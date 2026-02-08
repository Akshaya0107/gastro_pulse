import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function NutritionFilter() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nutritional Meals</Text>

      <Text>Calories Target</Text>
      <Text>Food Preferences</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.push('/(user)/suggestions')}
      >
        <Text style={styles.btnText}>Show Suggestions</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  btn: {
    marginTop: 30,
    backgroundColor: '#22b573',
    padding: 14,
    borderRadius: 12,
  },
  btnText: { color: '#fff', textAlign: 'center', fontWeight: '600' },
});
