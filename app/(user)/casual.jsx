import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const meals = [
  { id: '1', name: 'Grilled Salmon', price: '$18.00' },
  { id: '2', name: 'Veg Lentil Soup', price: '$10.00' },
  { id: '3', name: 'Chicken Ramen', price: '$14.50' },
];

export default function CasualMeals() {
  return (
    <FlatList
      data={meals}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.name}</Text>
          <Text>{item.price}</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  title: { fontSize: 16, fontWeight: '600' },
  btn: {
    marginTop: 10,
    backgroundColor: '#22b573',
    padding: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  btnText: { color: '#fff' },
});
