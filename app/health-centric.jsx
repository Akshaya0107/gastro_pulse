import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity,
  ScrollView, StyleSheet
} from "react-native";
import { useRouter } from "expo-router";

export default function HealthInput() {
  const router = useRouter();
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [notes, setNotes] = useState("");
  const [allergyDetail, setAllergyDetail] = useState("");
  const [otherCondition, setOtherCondition] = useState("");
  const [conditions, setConditions] = useState([]);

  const toggleCondition = (item) => {
    setConditions((prev) =>
      prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item]
    );
  };

  const handleSubmit = () => {
    router.push({
      pathname: "/health-suggestions",
      params: {
        age,
        weight,
        notes,
        allergyDetail,
        otherCondition,
        conditions: JSON.stringify(conditions),
      },
    });
  };

  const conditionList = [
    "Diabetes","High BP","Heart Disease","Kidney Issues",
    "Thyroid Disorder","Digestive Issues","Anemia",
    "Cholesterol","PCOS","Food Allergies","Other"
  ];

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <View style={styles.card}>
        <Text style={styles.header}>Basic Patient Details</Text>

        <TextInput style={styles.input} placeholder="Age" keyboardType="numeric" onChangeText={setAge} />
        <TextInput style={styles.input} placeholder="Weight (kg)" keyboardType="numeric" onChangeText={setWeight} />

        <Text style={styles.header}>Health Conditions</Text>

        <View style={styles.grid}>
          {conditionList.map((item) => (
            <TouchableOpacity key={item} style={styles.row} onPress={() => toggleCondition(item)}>
              <View style={[styles.box, conditions.includes(item) && styles.active]} />
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {conditions.includes("Food Allergies") && (
          <TextInput
            style={styles.input}
            placeholder="Specify allergy (nuts, dairy, gluten...)"
            onChangeText={setAllergyDetail}
          />
        )}

        {conditions.includes("Other") && (
          <TextInput
            style={styles.input}
            placeholder="Specify other condition"
            onChangeText={setOtherCondition}
          />
        )}

        <Text style={styles.label}>Doctor Notes (optional)</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          multiline
          placeholder="Low sodium, high fiber, avoid oil..."
          onChangeText={setNotes}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.btnText}>Get Condition-Based Meals</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: { flexGrow: 1, justifyContent: "center", padding: 16, backgroundColor: "#f4f6f8" },
  card: { backgroundColor: "#fff", padding: 18, borderRadius: 16, elevation: 5 },
  header: { fontSize: 18, fontWeight: "700", marginVertical: 8 },
  input: { borderWidth: 1, borderColor: "#ddd", borderRadius: 10, padding: 12, marginTop: 8 },
  label: { marginTop: 10, fontWeight: "600" },
  grid: { flexDirection: "row", flexWrap: "wrap" },
  row: { width: "50%", flexDirection: "row", alignItems: "center", marginVertical: 6 },
  box: { width: 18, height: 18, borderWidth: 1, marginRight: 6 },
  active: { backgroundColor: "#14b8a6" },
  button: { backgroundColor: "#14b8a6", padding: 14, borderRadius: 12, alignItems: "center", marginTop: 15 },
  btnText: { color: "#fff", fontWeight: "700" },
});
