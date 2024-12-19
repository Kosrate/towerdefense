import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { fetchLevels } from "../api";

export default function Levels() {
    const [levels, setLevels] = useState([]);

    useEffect(() => {
        fetchLevels().then(setLevels).catch(console.error);
    }, []);

    return (
      <View style={StyleSheet.container}>
        <Text style={styles.header}>Levels</Text>
        <FlatList
          data={levels}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            <View style={styles.item}>
              <Text>Name: {item.name}</Text>
              <Text>Difficulty: {item.difficulty}</Text>
            </View>
          }}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: { padding: 20 },
    header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
    item: { marginBottom: 15, padding: 10, borderWidth: 1, borderRadius: 5 },
  });

