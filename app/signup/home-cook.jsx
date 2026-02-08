import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function HomeCookSignup() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Cook Signup</Text>
      <TextInput style={styles.input} placeholder="Full Name" onChangeText={setName} />
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Registered", "Home cook profile created")}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: "center", backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ddd", padding: 14, borderRadius: 10, marginBottom: 15 },
  button: { backgroundColor: "#4CAF50", padding: 14, borderRadius: 25 },
  buttonText: { color: "#fff", textAlign: "center" },
});
