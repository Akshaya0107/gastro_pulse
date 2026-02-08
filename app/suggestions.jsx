import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function MealSuggestions() {
  const { workout, activity, prefs } = useLocalSearchParams();
  const preferences = prefs ? JSON.parse(prefs) : [];

  const getMeals = () => {
    let meals = [];

    if (workout === "high" || activity === "very-active") {
      meals.push({ name: "Grilled Chicken Power Plate", img: require("../assets/health.jpg") });
      meals.push({ name: "Salmon Quinoa Fuel Bowl", img: require("../assets/salmon.jpg") });
    }

    if (preferences.includes("Vegetarian") || preferences.includes("Vegan")) {
      meals.push({ name: "Lentil Protein Bowl", img: require("../assets/nutrition.jpg") });
      meals.push({ name: "Tofu Veggie Stir Fry", img: require("../assets/quinoa.jpg") });
    }

    if (preferences.includes("Keto") || preferences.includes("Low-carb")) {
      meals.push({ name: "Avocado Egg Keto Salad", img: require("../assets/health.jpg") });
    }

    if (meals.length === 0) {
      meals = [
        { name: "Balanced Veggie Bowl", img: require("../assets/nutrition.jpg") },
        { name: "Grilled Fish Plate", img: require("../assets/salmon.jpg") },
      ];
    }

    return meals;
  };

  const meals = getMeals();

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <Text style={styles.title}>Your Personalized Meals</Text>

      {meals.map((meal, i) => (
        <View key={i} style={styles.card}>
          <Image source={meal.img} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.name}>{meal.name}</Text>
            <TouchableOpacity style={styles.addBtn}>
              <Text style={styles.addText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: { padding: 16, backgroundColor: "#f4f6f8" },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 16, textAlign: "center" },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 18,
    overflow: "hidden",
    elevation: 5,
  },
  image: { width: "100%", height: 160 },
  info: { padding: 14 },
  name: { fontSize: 16, fontWeight: "700", marginBottom: 10 },
  addBtn: {
    backgroundColor: "#14b8a6",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  addText: { color: "#fff", fontWeight: "700" },
});
