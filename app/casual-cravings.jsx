import React, { useState, useMemo } from "react";

import {
  View, Text, TextInput, TouchableOpacity,
  FlatList, Image, StyleSheet
} from "react-native";

export default function CasualCravings() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [cart, setCart] = useState({});

  const FOOD_DATA = [
    { id:1, name:"Grilled Salmon", price:480, calories:350, rating:4.6, time:"25 mins", veg:false, ai:true, img:require("../assets/salmon.jpg") },
    { id:2, name:"Veg Burger", price:180, calories:430, rating:4.2, time:"15 mins", veg:true, ai:false, img:require("../assets/casual.jpg") },
    { id:3, name:"Paneer Butter Masala", price:260, calories:600, rating:4.5, time:"30 mins", veg:true, ai:true, img:require("../assets/nutrition.jpg") },
    { id:4, name:"Chicken Biryani", price:350, calories:700, rating:4.7, time:"28 mins", veg:false, ai:true, img:require("../assets/health.jpg") },
    { id:5, name:"Caesar Salad", price:220, calories:280, rating:4.1, time:"18 mins", veg:false, ai:false, img:require("../assets/quinoa.jpg") },
  ];

  const foods = useMemo(() => {
    return FOOD_DATA
      .filter(f => f.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a,b)=>{
        if(sort==="price") return a.price-b.price;
        if(sort==="cal-low") return a.calories-b.calories;
        return 0;
      });
  },[search,sort]);

  const addToCart = (item) => {
    setCart(prev => ({
      ...prev,
      [item.id]: prev[item.id] ? { ...prev[item.id], qty: prev[item.id].qty + 1 }
      : { ...item, qty: 1 }
    }));
  };

  const changeQty = (id,type) => {
    setCart(prev=>{
      const u={...prev};
      if(u[id].qty===1 && type==="dec") delete u[id];
      else u[id].qty+= type==="inc"?1:-1;
      return u;
    });
  };

  const total = Object.values(cart).reduce((s,i)=>s+i.price*i.qty,0);

  return (
    <View style={styles.container}>

      <Text style={styles.header}>Casual Cravings 🍔</Text>

      <TextInput
        placeholder="Search for food..."
        style={styles.search}
        value={search}
        onChangeText={setSearch}
      />

      <View style={styles.sortRow}>
        <SortBtn label="Price" val="price" sort={sort} setSort={setSort}/>
        <SortBtn label="Low Cal" val="cal-low" sort={sort} setSort={setSort}/>
      </View>

      <FlatList
        data={foods}
        keyExtractor={i=>i.id.toString()}
        contentContainerStyle={{paddingBottom:90}}
        renderItem={({item})=>(
          <View style={styles.card}>

            <Image source={item.img} style={styles.image}/>

            <View style={styles.content}>

              <View style={styles.topRow}>
                <View style={[styles.dot, {backgroundColor:item.veg?"green":"red"}]}/>
                <Text style={styles.name}>{item.name}</Text>
              </View>

              <Text style={styles.meta}>⭐ {item.rating} • ⏱ {item.time}</Text>
              <Text style={styles.meta}>{item.calories} kcal • ₹{item.price}</Text>

              {item.ai && <Text style={styles.ai}>🔥 AI Recommended</Text>}

              {cart[item.id] ? (
                <View style={styles.qtyRow}>
                  <QtyBtn text="-" onPress={()=>changeQty(item.id,"dec")}/>
                  <Text>{cart[item.id].qty}</Text>
                  <QtyBtn text="+" onPress={()=>changeQty(item.id,"inc")}/>
                </View>
              ) : (
                <TouchableOpacity style={styles.addBtn} onPress={()=>addToCart(item)}>
                  <Text style={{color:"#fff"}}>ADD</Text>
                </TouchableOpacity>
              )}

            </View>
          </View>
        )}
      />

      {total>0 && (
        <View style={styles.cartBar}>
          <Text style={{color:"#fff"}}>{Object.keys(cart).length} items</Text>
          <Text style={{color:"#fff",fontWeight:"700"}}>₹{total}</Text>
          <TouchableOpacity style={styles.viewBtn}>
            <Text style={{color:"#14b8a6"}}>View Cart</Text>
          </TouchableOpacity>
        </View>
      )}

    </View>
  );
}

const SortBtn=({label,val,sort,setSort})=>(
  <TouchableOpacity
    style={[styles.sortBtn, sort===val && styles.sortActive]}
    onPress={()=>setSort(val)}>
    <Text style={sort===val?{color:"#fff"}:{}}>{label}</Text>
  </TouchableOpacity>
);

const QtyBtn=({text,onPress})=>(
  <TouchableOpacity style={styles.qtyBtn} onPress={onPress}>
    <Text>{text}</Text>
  </TouchableOpacity>
);

const styles=StyleSheet.create({
  container:{flex:1,backgroundColor:"#f2f3f5",padding:12},
  header:{fontSize:22,fontWeight:"700",marginBottom:10},
  search:{backgroundColor:"#fff",padding:12,borderRadius:10,marginBottom:10},
  sortRow:{flexDirection:"row",gap:10,marginBottom:10},
  sortBtn:{backgroundColor:"#ddd",padding:8,borderRadius:8},
  sortActive:{backgroundColor:"#14b8a6"},

  card:{
    flexDirection:"row",
    backgroundColor:"#fff",
    marginBottom:12,
    borderRadius:14,
    overflow:"hidden",
    elevation:4
  },
  image:{width:110,height:110},
  content:{flex:1,padding:10,justifyContent:"space-between"},
  topRow:{flexDirection:"row",alignItems:"center",gap:6},
  dot:{width:10,height:10,borderRadius:5},
  name:{fontWeight:"700",fontSize:14},
  meta:{fontSize:12,color:"#666"},
  ai:{color:"#14b8a6",fontSize:11,fontWeight:"600"},

  addBtn:{backgroundColor:"#14b8a6",padding:6,borderRadius:6,alignItems:"center"},
  qtyRow:{flexDirection:"row",alignItems:"center",gap:10},
  qtyBtn:{backgroundColor:"#eee",padding:6,borderRadius:6},

  cartBar:{
    position:"absolute",
    bottom:0,left:0,right:0,
    backgroundColor:"#14b8a6",
    flexDirection:"row",
    justifyContent:"space-between",
    padding:14,
    alignItems:"center"
  },
  viewBtn:{backgroundColor:"#fff",paddingHorizontal:14,paddingVertical:6,borderRadius:20}
});
