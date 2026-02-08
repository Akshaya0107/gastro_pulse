import * as SecureStore from "expo-secure-store";
import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  ScrollView, KeyboardAvoidingView, Platform, Alert,
} from "react-native";
import { useRouter } from "expo-router";

export default function UserRegistration() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "", email: "", phone: "", age: "", height: "", weight: "",
    password: "", confirmPassword: ""
  });

  const validateForm = () => {
    if (!form.name.trim()) return "Enter name";
    if (!form.email.trim()) return "Enter email";
    if (!form.phone.trim()) return "Enter phone number";
    if (!form.age.trim()) return "Enter age";
    if (!form.height.trim()) return "Enter height";
    if (!form.weight.trim()) return "Enter weight";
    if (!form.password) return "Enter password";
    if (form.password.length < 4) return "Password must be 4+ characters";
    if (form.password !== form.confirmPassword) return "Passwords do not match";
    return null;
  };

  const handleRegister = async () => {
    const error = validateForm();
    if (error) return Alert.alert("Error", error);

    // ✅ CLEAN DATA
    await SecureStore.setItemAsync("username", form.name.trim());
    await SecureStore.setItemAsync("userEmail", form.email.trim().toLowerCase());
    await SecureStore.setItemAsync("userPassword", form.password);

    Alert.alert("Success", "Registered! Please login.");
    router.replace("/login");
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.header}>Create Account</Text>

        <Input label="Full Name" value={form.name} onChangeText={(v) => setForm({ ...form, name: v })} />
        <Input label="Email" keyboardType="email-address" value={form.email} onChangeText={(v) => setForm({ ...form, email: v })} />
        <Input label="Phone Number" keyboardType="phone-pad" value={form.phone} onChangeText={(v) => setForm({ ...form, phone: v })} />
        <Input label="Age" keyboardType="numeric" value={form.age} onChangeText={(v) => setForm({ ...form, age: v })} />
        <Input label="Height (cm)" keyboardType="numeric" value={form.height} onChangeText={(v) => setForm({ ...form, height: v })} />
        <Input label="Weight (kg)" keyboardType="numeric" value={form.weight} onChangeText={(v) => setForm({ ...form, weight: v })} />

        <Input label="Password" secureTextEntry value={form.password} onChangeText={(v) => setForm({ ...form, password: v })} />
        <Input label="Confirm Password" secureTextEntry value={form.confirmPassword} onChangeText={(v) => setForm({ ...form, confirmPassword: v })} />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const Input = ({ label, ...props }) => (
  <View style={{ marginBottom: 14 }}>
    <Text style={styles.label}>{label}</Text>
    <TextInput {...props} style={styles.input} />
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "700", textAlign: "center", marginBottom: 20 },
  label: { fontSize: 14, marginBottom: 6, color: "#444" },
  input: { borderWidth: 1, borderColor: "#ddd", borderRadius: 10, padding: 14 },
  button: { backgroundColor: "#22b573", padding: 16, borderRadius: 12, marginTop: 20 },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "600", fontSize: 16 },
});
