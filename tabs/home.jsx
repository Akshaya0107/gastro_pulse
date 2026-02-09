import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useFocusEffect } from "expo-router";

export default function Home() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [goalCalories, setGoalCalories] = useState(1800);
  const [consumedCalories, setConsumedCalories] = useState(1200);

  // Reload data every time screen opens
  useFocusEffect(
    React.useCallback(() => {
      const loadData = async () => {
        const storedName = await SecureStore.getItemAsync("username");
        const storedCalories = await SecureStore.getItemAsync("dailyCalories");

        if (storedName) setName(storedName);
        if (storedCalories) setGoalCalories(parseInt(storedCalories));
      };
      loadData();
    }, [])
  );

  const progress = (consumedCalories / goalCalories) * 100;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Ionicons name="checkmark-circle" size={26} color="#22b573" />
        <View style={styles.headerRight}>
          <Ionicons name="notifications-outline" size={22} color="#444" />
          <Image source={require("../../assets/profile.jpg")} style={styles.avatar} />
        </View>
      </View>

      {/* GREETING */}
      <Text style={styles.welcome}>Welcome back</Text>
      <Text style={styles.username}>{name || "User"} 👋</Text>

      {/* HEALTH PROGRESS CARD */}
      <View style={styles.progressCard}>
        <View style={{ flex: 1 }}>
          <Text style={styles.progressTitle}>Daily Health Progress</Text>

          <Text style={styles.calorie}>
            {consumedCalories}{" "}
            <Text style={styles.kcal}>/ {goalCalories} kcal</Text>
          </Text>

          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
          </View>
        </View>r

        <TouchableOpacity onPress={() => router.push("/health-detail")}>
          <Text style={styles.viewDetails}>View Details →</Text>
        </TouchableOpacity>
      </View>

      {/* SUGGESTED MEALS */}
      <Text style={styles.section}>Suggested Meals</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {meals.map((meal, index) => (
          <View key={index} style={styles.mealCard}>
            <Image source={meal.image} style={styles.mealImg} />
            <Text style={styles.mealTitle}>{meal.title}</Text>
            <Text style={styles.mealDesc}>{meal.desc}</Text>

            <View style={styles.rowBetween}>
              <Text style={styles.kcalGreen}>{meal.kcal} kcal</Text>
              <TouchableOpacity style={styles.addBtn}>
                <Text style={styles.addText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* EXPLORE */}
      <Text style={styles.section}>Explore Meals</Text>

      <ExploreCard
        title="Casual Cravings"
        sub="Indulge in your favorites"
        img={require("../../assets/casual.jpg")}
        onPress={() => router.push("/casual-cravings")}
      />
      <ExploreCard
        title="Nutritional Meals"
        sub="Personalized healthy meals"
        img={require("../../assets/nutrition.jpg")}
        onPress={() => router.push("/nutritional-meals")}
      />
      <ExploreCard
        title="Health Centric"
        sub="Condition specific meals"
        img={require("../../assets/health.jpg")}
        onPress={() => router.push("/health-centric")}
      />

      <View style={{ height: 90 }} />
    </ScrollView>
  );
}

/* ---------- Reusable Explore Card ---------- */
const ExploreCard = ({ title, sub, img, onPress }) => (
  <TouchableOpacity style={styles.exploreCard} onPress={onPress}>
    <Image source={img} style={styles.exploreImg} />
    <View style={styles.overlay}>
      <Text style={styles.exploreTitle}>{title}</Text>
      <Text style={styles.exploreSub}>{sub}</Text>
    </View>
  </TouchableOpacity>
);

/* ---------- Meal Data ---------- */
const meals = [
  {
    title: "Mediterranean Quinoa Bowl",
    desc: "Wholesome quinoa & vegetables",
    kcal: 450,
    image: require("../../assets/quinoa.jpg"),
  },
  {
    title: "Baked Salmon",
    desc: "Omega rich & nutritious",
    kcal: 380,
    image: require("../../assets/salmon.jpg"),
  },
];

/* ---------- STYLES ---------- */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f9fc", padding: 16 },

  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  headerRight: { flexDirection: "row", alignItems: "center", gap: 12 },
  avatar: { width: 36, height: 36, borderRadius: 18 },

  welcome: { fontSize: 14, color: "#888", marginTop: 10 },
  username: { fontSize: 22, fontWeight: "700", marginBottom: 12 },

  progressCard: {
    backgroundColor: "#dff7f2",
    padding: 16,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  progressTitle: { fontSize: 14, color: "#444" },
  calorie: { fontSize: 22, fontWeight: "700", marginVertical: 6 },
  kcal: { fontSize: 13, color: "#777" },

  progressBarBg: { height: 6, backgroundColor: "#c7ece3", borderRadius: 10, overflow: "hidden", marginTop: 6 },
  progressBarFill: { height: 6, backgroundColor: "#22b573" },

  viewDetails: { alignSelf: "flex-end", color: "#22b573", fontWeight: "600" },

  section: { fontSize: 18, fontWeight: "700", marginBottom: 12 },

  mealCard: { backgroundColor: "#fff", padding: 12, borderRadius: 14, width: 180, marginRight: 14 },
  mealImg: { width: "100%", height: 90, borderRadius: 12, marginBottom: 6 },
  mealTitle: { fontSize: 14, fontWeight: "700" },
  mealDesc: { fontSize: 12, color: "#777", marginBottom: 6 },

  rowBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  kcalGreen: { color: "#22b573", fontWeight: "700" },

  addBtn: { backgroundColor: "#22b573", paddingHorizontal: 14, paddingVertical: 6, borderRadius: 16 },
  addText: { color: "#fff", fontWeight: "700", fontSize: 12 },

  exploreCard: { borderRadius: 16, overflow: "hidden", marginBottom: 16 },
  exploreImg: { width: "100%", height: 130 },
  overlay: { position: "absolute", bottom: 12, left: 12 },
  exploreTitle: { color: "#fff", fontSize: 16, fontWeight: "700" },
  exploreSub: { color: "#fff", fontSize: 12 },
});
