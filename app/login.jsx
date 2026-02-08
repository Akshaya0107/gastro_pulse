import * as SecureStore from "expo-secure-store";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");

  const handleLogin = async () => {
    const savedEmail = await SecureStore.getItemAsync("userEmail");
    const savedPass = await SecureStore.getItemAsync("userPassword");

    if (!savedEmail) return Alert.alert("No Account", "Please register first.");

    if (email.trim().toLowerCase() === savedEmail && password === savedPass) {

      // 🔥 ROLE BASED NAVIGATION
      if (role === "User") {
        router.replace("/tabs/home");
      } 
      else if (role === "Home-cook") {
        router.replace("/cook");
      } 
      else if (role === "Delivery-partner") {
        router.replace("/partner");
      }

    } else {
      Alert.alert("Login Failed", "Wrong email or password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />

      <Text style={styles.roleLabel}>Select Role</Text>
      <View style={styles.roleRow}>
        {["User", "Home-cook", "Delivery-partner"].map((r) => (
          <TouchableOpacity
            key={r}
            style={[styles.roleBtn, role === r && styles.roleActive]}
            onPress={() => setRole(r)}
          >
            <Text style={[styles.roleText, role === r && { color: "#fff" }]}>{r}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "700", textAlign: "center", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ddd", padding: 14, borderRadius: 10, marginBottom: 15 },
  roleLabel: { marginTop: 10, marginBottom: 6, fontWeight: "600" },
  roleRow: { flexDirection: "row", gap: 10, marginBottom: 15, flexWrap: "wrap" },
  roleBtn: { borderWidth: 1, borderColor: "#22b573", paddingVertical: 10, paddingHorizontal: 14, borderRadius: 20 },
  roleActive: { backgroundColor: "#22b573" },
  roleText: { color: "#22b573", fontWeight: "600" },
  button: { backgroundColor: "#22b573", padding: 15, borderRadius: 12 },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "600" }
});
