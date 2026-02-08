import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function NewDish() {
  return (
    <View style={styles.container}>

      {/* Header */}
<View style={styles.header}>
  <TouchableOpacity
    onPress={() => router.back()}
    style={styles.backBtn}
  >
    <Ionicons name="arrow-back" size={22} />
  </TouchableOpacity>

  <Text style={styles.headerTitle}>New Dish</Text>

  {/* Spacer to keep title centered */}
  <View style={{ width: 22 }} />
</View>


      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        {/* Basic Info */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Basic Dish Information</Text>

          <Text style={styles.label}>Dish Name</Text>
          <TextInput
            style={styles.input}
            value="Spicy Chicken Stir-fry"
          />

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            multiline
            value="A flavorful and healthy stir-fry with tender chicken, crisp vegetables, and a spicy sauce, perfect for a quick dinner."
          />

          <Text style={styles.label}>Price (₹)</Text>
          <TextInput style={styles.input} value="14.99" />
        </View>

        {/* Dish Photos */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Dish Photos</Text>

          <View style={styles.uploadBox}>
            <Ionicons name="cloud-upload-outline" size={28} color="#999" />
            <Text style={styles.uploadText}>
              Drag & drop or click to upload dish photos
            </Text>
          </View>

          <View style={styles.imageRow}>
            {[1, 2].map((_, i) => (
              <View key={i} style={styles.imageWrapper}>
                <Image
                  source={{ uri: "https://via.placeholder.com/120" }}
                  style={styles.image}
                />
                <View style={styles.removeIcon}>
                  <Ionicons name="close" size={14} color="#fff" />
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Ingredients */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Ingredients</Text>

          {[
            "Chicken breast",
            "Bell peppers (red, yellow)",
            "Broccoli",
            "Soy sauce",
            "Ginger",
            "Garlic",
            "Chili flakes",
          ].map((item, index) => (
            <View key={index} style={styles.listRow}>
              <TextInput style={styles.listInput} value={item} />
              <Ionicons name="trash-outline" size={18} color="#d9534f" />
            </View>
          ))}

          <TouchableOpacity style={styles.addRow}>
            <Ionicons name="add" size={16} color="#aaa" />
            <Text style={styles.addText}>Add ingredient</Text>
          </TouchableOpacity>
        </View>

        {/* Nutrition Facts */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Nutrition Facts</Text>

          {[
            "Calories: 450 kcal",
            "Protein: 35g",
            "Carbs: 20g",
            "Fat: 25g",
          ].map((item, index) => (
            <View key={index} style={styles.listRow}>
              <TextInput style={styles.listInput} value={item} />
              <Ionicons name="trash-outline" size={18} color="#d9534f" />
            </View>
          ))}

          <TouchableOpacity style={styles.addRow}>
            <Ionicons name="add" size={16} color="#aaa" />
            <Text style={styles.addText}>Add nutrition fact</Text>
          </TouchableOpacity>
        </View>

        {/* Portion Sizes */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Portion Sizes</Text>
          <Text style={styles.subText}>
            Select available portion sizes
          </Text>

          <View style={styles.pillRow}>
            <View style={styles.pillActive}>
              <Text style={styles.pillTextActive}>
                Standard (1 serving)
              </Text>
            </View>
            <View style={styles.pillActive}>
              <Text style={styles.pillTextActive}>
                Large (1.5 servings)
              </Text>
            </View>
            <View style={styles.pillInactive}>
              <Text style={styles.pillTextInactive}>
                Family (3 servings)
              </Text>
            </View>
          </View>
        </View>

        {/* Availability */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Availability Schedule</Text>
          <Text style={styles.subText}>
            Select when this dish is available
          </Text>

          <View style={styles.pillRow}>
            {["Breakfast", "Lunch", "Dinner"].map((item, i) => (
              <View key={i} style={styles.pillActive}>
                <Text style={styles.pillTextActive}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Submit */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.submit}>
          <Text style={styles.submitText}>Submit Dish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  headerTitle: { fontSize: 18, fontWeight: "600", marginLeft: 10 },

  card: {
    margin: 16,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 12,
    padding: 16,
  },

  header: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 16,
  borderBottomWidth: 1,
  borderColor: "#eee",
},

headerTitle: {
  fontSize: 18,
  fontWeight: "600",
  textAlign: "center",
  flex: 1,
},

backBtn: {
  width: 22,
},

  cardTitle: { fontWeight: "600", marginBottom: 10 },
  label: { color: "#666", marginBottom: 4 },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  textArea: { height: 90, textAlignVertical: "top" },

  uploadBox: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#ccc",
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
  },
  uploadText: { color: "#999", marginTop: 6, textAlign: "center" },

  imageRow: { flexDirection: "row", marginTop: 12 },
  imageWrapper: { marginRight: 10 },
  image: { width: 120, height: 80, borderRadius: 8 },
  removeIcon: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: "#d9534f",
    borderRadius: 10,
    padding: 2,
  },

  listRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  listInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginRight: 8,
  },

  addRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#ddd",
    borderRadius: 8,
    marginTop: 6,
  },
  addText: { color: "#aaa", marginLeft: 6 },

  subText: { color: "#777", marginBottom: 8 },

  pillRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },

  pillActive: {
    backgroundColor: "#a97c64",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  pillTextActive: { color: "#fff", fontSize: 12 },

  pillInactive: {
    backgroundColor: "#eee",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  pillTextInactive: { color: "#777", fontSize: 12 },

  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
  },
  submit: {
    backgroundColor: "#a97c64",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  submitText: { color: "#fff", fontWeight: "600" },
});
