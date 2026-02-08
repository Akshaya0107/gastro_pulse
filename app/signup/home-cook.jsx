import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as DocumentPicker from 'expo-document-picker';
import { useState } from 'react';


export default function HomeCookSignup() {
  const router = useRouter();

  const [foodType, setFoodType] = useState('Italian');
  const [showDropdown, setShowDropdown] = useState(false);
  const [idFile, setIdFile] = useState(null);
  const handleSubmit = () => {
  // after successful registration
  router.replace('/(homecook)/dashboard');
};



  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home Cook Registration</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Full Name */}
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} placeholder="Enter your full name" />

        {/* Email */}
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="your@example.com" />

        {/* Phone */}
        <Text style={styles.label}>Phone Number</Text>
        <TextInput style={styles.input} placeholder="+1 555 123 4567" />

        {/* Address */}
        <Text style={styles.label}>Kitchen Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Street, City, State, Zip Code"
        />

        <Text style={styles.label}>Food Type Specialization</Text>

<TouchableOpacity
  style={styles.dropdown}
  onPress={() => setShowDropdown(!showDropdown)}
>
  <Text style={styles.dropdownText}>{foodType}</Text>
  <Ionicons name="chevron-down" size={18} color="#777" />
</TouchableOpacity>

{showDropdown && (
  <View style={styles.dropdownList}>
    {['Italian', 'Indian', 'Chinese', 'Mexican', 'Vegan'].map(item => (
      <TouchableOpacity
        key={item}
        style={styles.dropdownItem}
        onPress={() => {
          setFoodType(item);
          setShowDropdown(false);
        }}
      >
        <Text style={styles.dropdownItemText}>{item}</Text>
      </TouchableOpacity>
    ))}
  </View>
)}



        {/* ID Proof Upload */}
        <View style={styles.uploadCard}>
          <Text style={styles.uploadTitle}>ID Proof Upload</Text>
          <Text style={styles.uploadDesc}>
            Please upload a valid government-issued ID (e.g., Driver's License,
            Passport). This is required for verification.
          </Text>

          <TouchableOpacity
  style={styles.uploadBtn}
  onPress={async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ['image/*', 'application/pdf'],
      copyToCacheDirectory: true,
    });

    if (!result.canceled) {
      setIdFile(result.assets[0]);
    }
  }}
>

            <Ionicons name="cloud-upload-outline" size={20} color="#22b573" />
            <Text style={styles.uploadText}>Upload ID File</Text>
          </TouchableOpacity>
        </View>

        {/* Bank Details */}
        <Text style={styles.label}>Bank Account Name</Text>
        <TextInput style={styles.input} placeholder="John Doe" />

        <Text style={styles.label}>Bank Account Number</Text>
        <TextInput style={styles.input} placeholder="1234567890" />

        <Text style={styles.label}>Bank Name</Text>
        <TextInput style={styles.input} placeholder="Example Bank" />

        <Text style={styles.label}>IFSC Code</Text>
        <TextInput style={styles.input} placeholder="EXMPL0000001" />

        {/* Info */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Your personal and banking information is securely encrypted and used
            solely for payment processing and verification purposes, never
            shared with third parties.
          </Text>
        </View>
      </ScrollView>

      {/* Submit */}
      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
  <Text style={styles.submitText}>Submit & Login</Text>
</TouchableOpacity>

    </View>
  );
}

/* ---------------- Styles ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 45,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },

  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
    marginTop: 14,
  },

  input: {
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 12,
    padding: 14,
    fontSize: 14,
    backgroundColor: '#fafafa',
  },

  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 12,
    padding: 14,
    backgroundColor: '#fafafa',
  },
  dropdownText: {
    fontSize: 14,
    color: '#555',
  },

  uploadCard: {
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
    backgroundColor: '#fff',
  },
  uploadTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 6,
  },
  uploadDesc: {
    fontSize: 13,
    color: '#777',
    marginBottom: 16,
  },
  uploadBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#22b573',
    borderRadius: 12,
    paddingVertical: 12,
  },
  uploadText: {
    marginLeft: 8,
    color: '#22b573',
    fontWeight: '600',
  },

  infoBox: {
    backgroundColor: '#f3f3f3',
    padding: 14,
    borderRadius: 12,
    marginTop: 20,
  },
  infoText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
  },

  submitBtn: {
    backgroundColor: '#22b573',
    padding: 16,
    borderRadius: 14,
    marginVertical: 16,
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },

  dropdownList: {
  borderWidth: 1,
  borderColor: '#e5e5e5',
  borderRadius: 12,
  marginTop: 6,
  backgroundColor: '#fff',
},

dropdownItem: {
  padding: 14,
  borderBottomWidth: 1,
  borderBottomColor: '#eee',
},

dropdownItemText: {
  fontSize: 14,
},
dropdownList: {
  marginBottom: 10,
}

});
