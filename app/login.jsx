import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
  // after successful login
  router.replace('/(user)/home');
};


  return (

    
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>User Login</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Input Fields */}
      <View style={styles.form}>
        {/* Email / Phone */}
<Text style={styles.label}>Email or Phone Number</Text>
<TextInput
  style={styles.input}
  placeholder="Enter your email or phone"
/>

{/* Password */}
<Text style={styles.label}>Password</Text>
<View style={styles.passwordBox}>
  <TextInput
    style={styles.passwordInput}
    placeholder="Enter your password"
    secureTextEntry
  />
  <Ionicons name="eye-outline" size={20} color="#999" />
</View>

       
        {/* Remember + Forgot */}
        <View style={styles.row}>
          <View style={styles.rememberBox}>
            <View style={styles.checkbox} />
            <Text style={styles.rememberText}>Remember me</Text>
          </View>

          <Text style={styles.forgot}>Forgot Password?</Text>
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
  <Text style={styles.loginText}>Login</Text>
</TouchableOpacity>



        {/* OR Divider */}
        <View style={styles.orRow}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        {/* Social Buttons */}
        <TouchableOpacity style={styles.socialBtn}>
          <Ionicons name="mail-outline" size={18} />
          <Text style={styles.socialText}>Continue with Email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialBtn}>
          <Ionicons name="logo-google" size={18} />
          <Text style={styles.socialText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialBtn}>
          <Ionicons name="logo-apple" size={18} />
          <Text style={styles.socialText}>Continue with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialBtn}>
          <Ionicons name="logo-facebook" size={18} />
          <Text style={styles.socialText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },

  /* Form */
  form: {
    flex: 1,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
  },

  passwordBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 14,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  rememberBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#999',
    marginRight: 8,
    borderRadius: 4,
  },
  rememberText: {
    fontSize: 13,
    color: '#555',
  },
  forgot: {
    fontSize: 13,
    color: '#4CAF50',
  },

  loginBtn: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 25,
    marginBottom: 25,
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },

  /* OR */
  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  orText: {
    marginHorizontal: 10,
    color: '#777',
    fontSize: 13,
  },

  /* Social */
  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 14,
    borderRadius: 25,
    marginBottom: 12,
  },
  socialText: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '500',
  },
});
