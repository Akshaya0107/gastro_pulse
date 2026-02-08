import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function Suggestions() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Meal Suggestions</Text>

      {['Grilled Salmon', 'Quinoa Salad', 'Chicken Breast'].map((meal) => (
        <View key={meal} style={styles.card}>
          <Text style={styles.title}>{meal}</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  card: {
    backgroundColor: '#f7f9f9',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  title: { fontSize: 16, fontWeight: '600' },
  btn: {
    marginTop: 8,
    backgroundColor: '#22b573',
    padding: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  btnText: { color: '#fff' },
});
