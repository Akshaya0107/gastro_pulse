import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function HomeCookSignup() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home Cook Signup</Text>

      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Kitchen Name" />
      <TextInput style={styles.input} placeholder="Email Address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Register as Home Cook</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  btn: {
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 25,
    marginTop: 10,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
