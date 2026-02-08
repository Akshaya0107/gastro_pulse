import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function UserSignup() {
  const router = useRouter();
  const role = 'User';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    Alert.alert('Success', `Signed up as ${role}`);
    router.push('/login');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#fff' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.roleText}>Signing up as: <Text style={styles.roleName}>{role}</Text></Text>

        <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
        <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/login')}>
          <Text style={styles.loginText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, justifyContent: 'center', flexGrow: 1 },
  title: { fontSize: 28, fontWeight: '700', textAlign: 'center', marginBottom: 12, fontFamily: 'System' },
  roleText: { fontSize: 16, textAlign: 'center', marginBottom: 24, fontFamily: 'System', color: '#555' },
  roleName: { fontWeight: '600', color: '#22b573' },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 12, padding: 16, marginBottom: 16, fontFamily: 'System' },
  button: { backgroundColor: '#22b573', paddingVertical: 16, borderRadius: 12, marginBottom: 16 },
  buttonText: { color: '#fff', fontSize: 16, textAlign: 'center', fontWeight: '600', fontFamily: 'System' },
  loginText: { color: '#22b573', fontSize: 14, textAlign: 'center', fontFamily: 'System' },
});
