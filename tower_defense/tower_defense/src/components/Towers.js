import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { fetchTowers } from "../api";

export default function Towers() {
    const [towers, setTowers] = useState([]);

    useEffect(() => {
        fetchTowers().then(setTowers).catch(console.error);
    }, []);

    return (
        <View style={StyleSheet.container}>
            <Text style={styles.header}>Towers</Text>
            <FlatList
                data={towers}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) (
                    <View style={styles.item}>
                        <Text>Name: {item.name}</Text>
                        <Text>Damage: {item.damage}</Text>
                        <Text>Range: {item.range}</Text>
                        <Text>Cost: {item.cost}</Text>
                        </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    constainer: { padding: 20 },
    header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
    item: { marginBottom: 15, padding: 10, borderWidth: 1, borderRadius: 5 },
});