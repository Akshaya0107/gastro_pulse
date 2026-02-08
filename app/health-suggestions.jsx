import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function HealthSuggestions() {
  const { conditions, allergyDetail } = useLocalSearchParams();
  const cond = conditions ? JSON.parse(conditions) : [];

  let meals = [];

  // 🩺 Diabetes
  if (cond.includes("Diabetes")) {
    meals.push({ name: "Oats + Chia Bowl", info: "Low GI | Fiber rich", img: require("../assets/nutrition.jpg") });
    meals.push({ name: "Grilled Chicken Salad", info: "Low sugar | High protein", img: require("../assets/health.jpg") });
  }

  // ❤️ Heart / BP
  if (cond.includes("High BP") || cond.includes("Heart Disease")) {
    meals.push({ name: "Low-Sodium Lentil Soup", info: "Heart friendly", img: require("../assets/nutrition.jpg") });
    meals.push({ name: "Salmon Omega Plate", info: "Omega-3 fats", img: require("../assets/salmon.jpg") });
  }

  // 🫘 Kidney
  if (cond.includes("Kidney Issues")) {
    meals.push({ name: "Kidney-Friendly Veg Bowl", info: "Low potassium", img: require("../assets/quinoa.jpg") });
  }

  // 🦴 Anemia
  if (cond.includes("Anemia")) {
    meals.push({ name: "Spinach Iron Bowl", info: "Iron rich", img: require("../assets/health.jpg") });
  }

  // 🧠 Thyroid
  if (cond.includes("Thyroid Disorder")) {
    meals.push({ name: "Selenium Nut Mix", info: "Thyroid support", img: require("../assets/nutrition.jpg") });
  }

  // 🥗 Digestive
  if (cond.includes("Digestive Issues")) {
    meals.push({ name: "Steamed Rice & Veggies", info: "Easy digestion", img: require("../assets/nutrition.jpg") });
  }

  // 🥚 PCOS
  if (cond.includes("PCOS")) {
    meals.push({ name: "High Protein Veg Bowl", info: "Hormone balancing", img: require("../assets/quinoa.jpg") });
  }

  // ⚠ Allergy filter
  if (allergyDetail) {
    meals = meals.filter(m => !m.name.toLowerCase().includes(allergyDetail.toLowerCase()));
  }

  if (meals.length === 0) {
    meals = [{ name: "Balanced Healthy Thali", info: "General nutrition", img: require("../assets/health.jpg") }];
  }

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <Text style={styles.title}>Your Condition-Based Meals</Text>

      {meals.map((meal, i) => (
        <View key={i} style={styles.card}>
          <Image source={meal.img} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.name}>{meal.name}</Text>
            <Text style={styles.details}>{meal.info}</Text>
            <TouchableOpacity style={styles.addBtn}>
              <Text style={{ color: "#fff", fontWeight: "600" }}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: { padding: 16, backgroundColor: "#f4f6f8" },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 15, textAlign: "center" },
  card: { backgroundColor: "#fff", borderRadius: 16, marginBottom: 18, overflow: "hidden", elevation: 5 },
  image: { width: "100%", height: 150 },
  info: { padding: 12 },
  name: { fontSize: 16, fontWeight: "700" },
  details: { color: "#777", marginVertical: 5 },
  addBtn: { backgroundColor: "#14b8a6", padding: 10, borderRadius: 10, alignItems: "center", marginTop: 6 },
});
