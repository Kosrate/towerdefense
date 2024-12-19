import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { fetchEnemies } from "../api";

export default function Enemies() {
    const [enemies, setEnemies] = useState([]);

    useEffect(() => {
        fetchEnemies().then(setEnemies).catch(console.error);
    }, []);

    return (
        <View style={StyleSheet.container}>
            <Text style={styles.header}>Enemies</Text>
            <FlatList
                data={enemies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>Name: {item.name}</Text>
                        <Text>Health: {item.health}</Text>
                        <Text>Speed: {item.speed}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20},
    header: { fontSize: 20, fontWeight: "bold", marginBottom: 10},
    item: { marginBottom: 15, padding: 10, borderWidth: 1, borderRadius: 5 },
});