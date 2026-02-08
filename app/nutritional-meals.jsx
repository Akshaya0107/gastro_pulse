import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";

export default function NutritionalMeals() {
  const router = useRouter();
  const [workout, setWorkout] = useState("");
  const [activity, setActivity] = useState("");
  const [prefs, setPrefs] = useState([]);

  const togglePref = (item) => {
    setPrefs((prev) =>
      prev.includes(item) ? prev.filter((p) => p !== item) : [...prev, item]
    );
  };

  const handleSubmit = () => {
    if (!workout || !activity)
      return Alert.alert("Required", "Select workout & activity level");

    router.push({
      pathname: "/suggestions",
      params: { workout, activity, prefs: JSON.stringify(prefs) },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <View style={styles.card}>
        <Text style={styles.header}>Nutritional Meals</Text>
        <Text style={styles.desc}>Get personalized healthy meals</Text>

        <Text style={styles.label}>Today's workout</Text>
        <View style={styles.pickerBox}>
          <Picker selectedValue={workout} onValueChange={setWorkout}>
            <Picker.Item label="Select workout intensity" value="" />
            <Picker.Item label="Low" value="low" />
            <Picker.Item label="Moderate" value="moderate" />
            <Picker.Item label="High" value="high" />
          </Picker>
        </View>

        <Text style={styles.label}>Activity level</Text>
        <View style={styles.pickerBox}>
          <Picker selectedValue={activity} onValueChange={setActivity}>
            <Picker.Item label="Select activity level" value="" />
            <Picker.Item label="Sedentary" value="sedentary" />
            <Picker.Item label="Active" value="active" />
            <Picker.Item label="Very Active" value="very-active" />
          </Picker>
        </View>

        <Text style={styles.label}>Food preferences</Text>
        <View style={styles.prefGrid}>
          {[
            "Vegetarian","Vegan","Gluten-free","Dairy-free",
            "Keto","Paleo","Low-carb","High-protein",
          ].map((item) => (
            <TouchableOpacity key={item} style={styles.prefItem} onPress={() => togglePref(item)}>
              <View style={[styles.box, prefs.includes(item) && styles.boxActive]} />
              <Text style={styles.prefText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.btnText}>Show Suggestions</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f4f6f8",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  header: { fontSize: 22, fontWeight: "700", textAlign: "center" },
  desc: { fontSize: 13, color: "#777", textAlign: "center", marginBottom: 15 },
  label: { marginTop: 12, fontWeight: "600" },
  pickerBox: { borderWidth: 1, borderColor: "#ddd", borderRadius: 10, marginTop: 5 },
  prefGrid: { flexDirection: "row", flexWrap: "wrap", marginVertical: 10 },
  prefItem: { flexDirection: "row", alignItems: "center", width: "50%", marginBottom: 10 },
  box: { width: 18, height: 18, borderWidth: 1, marginRight: 6, borderRadius: 4 },
  boxActive: { backgroundColor: "#14b8a6" },
  prefText: { fontSize: 14 },
  button: {
    backgroundColor: "#14b8a6",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  btnText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
