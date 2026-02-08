import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";

export default function HealthDetails() {
  const router = useRouter();

  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("1.2");

  const calculateCalories = async () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    const act = parseFloat(activity);

    let bmr =
      gender === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

    const totalCalories = Math.round(bmr * act);

    await SecureStore.setItemAsync("dailyCalories", totalCalories.toString());
    router.back(); // go back to home
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Your Health Details</Text>

      <TextInput placeholder="Age" keyboardType="numeric" style={styles.input} value={age} onChangeText={setAge}/>
      <TextInput placeholder="Weight (kg)" keyboardType="numeric" style={styles.input} value={weight} onChangeText={setWeight}/>
      <TextInput placeholder="Height (cm)" keyboardType="numeric" style={styles.input} value={height} onChangeText={setHeight}/>

      <Text style={styles.label}>Gender</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setGender("male")} style={[styles.btn, gender==="male" && styles.active]}><Text>Male</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setGender("female")} style={[styles.btn, gender==="female" && styles.active]}><Text>Female</Text></TouchableOpacity>
      </View>

      <Text style={styles.label}>Activity Level</Text>
      <View style={styles.rowWrap}>
        {[
          {label:"Sedentary", val:"1.2"},
          {label:"Light", val:"1.375"},
          {label:"Moderate", val:"1.55"},
          {label:"Active", val:"1.725"},
        ].map(item=>(
          <TouchableOpacity key={item.val} onPress={()=>setActivity(item.val)}
            style={[styles.btnSmall, activity===item.val && styles.active]}>
            <Text>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.saveBtn} onPress={calculateCalories}>
        <Text style={{color:"#fff", fontWeight:"700"}}>Save Details</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:20,backgroundColor:"#fff"},
  title:{fontSize:22,fontWeight:"700",marginBottom:20},
  input:{borderWidth:1,borderColor:"#ddd",padding:12,borderRadius:10,marginBottom:12},
  label:{marginTop:10,fontWeight:"600"},
  row:{flexDirection:"row",gap:10,marginTop:8},
  rowWrap:{flexDirection:"row",flexWrap:"wrap",gap:10,marginTop:8},
  btn:{padding:10,borderWidth:1,borderRadius:10},
  btnSmall:{padding:8,borderWidth:1,borderRadius:10},
  active:{backgroundColor:"#22b573",borderColor:"#22b573"},
  saveBtn:{marginTop:30,backgroundColor:"#22b573",padding:14,borderRadius:12,alignItems:"center"}
});
