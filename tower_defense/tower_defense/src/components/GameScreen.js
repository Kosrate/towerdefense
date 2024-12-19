import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { fetchLevels, fetchTowers, fetchEnemies } from "../api";

export default function GameScreen({ navigation }) {
    const [selectedTower, setSelectedTower] = useState(null);
    const [placedTowers, setPlacedTowers] = useState([]);
    const [towers, setTowers] = useState([]);
    const [level, setLevel] = useState({ name: "Loading...", layout: { path: [] } });
    const [enemies, setEnemies] = useState({})

    useEffect(() => {
        // Load towers and Level
        fetchTowers().then(setTowers).catch(console.error);
        fetchLevels().then((levels) => setLevel(levels[0])).catch(console.error); // Loads the first level
        fetchEnemies().then(setEnemies).catch(console.error);
    }, []);

    const handleTowerSelect = (tower) => {
        setSelectedTower(tower);
        alert(`${tower.name} selected!`);
    };

    const handlePlaceTower = (x, y) => {
        if (selectedTower) {
            setPlacedTowers([...placedTowers, { ...selectedTower, x, y}]);
            setSelectedTower(null);
            alert(`Placed ${selectedTower.name} at (${x}, ${y})`);
        } else {
            alert("No tower selected!");
        }
    };

    const interval = setInterval(() => {
        fetchEnemies().then(setEnemies).catch(console.error);
    }, 1000);
    return () => clearInterval(interval);
};

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Level: {level.name}</Text>
            <View style={styles.gameArea}>
                <Text>Path: {JSON.stringify(level.layout.path)}</Text>
                <Text>Selected Tower: {selectedTower ? selectedTower.name : "None"}</Text>
                <TouchableOpacity
                    style={styles.gameAreaTouch}
                    onPress={(e) => {
                        const x = Math.floor(Math.random() * 10); // Replace with proper touch coordniates
                        const y = Math.floor(Math.random() * 10); // Replace with proper touch coordniates
                    }}
                >
                    <Text>Touch here to place tower</Text>
                </TouchableOpacity>
                <FlatList
                    data={placedTowers}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Text>{item.name} at ({item.x}, {item.y})</Text>
                    )}
                />
            </View>
            <View style={styles.towerSelection}>
                <Text style={styles.subHeader}>Choose a Tower:</Text>
                <FlatList
                    data={towers}
                    horizontal
                    keyExtractor={(item) => item.id.toString()}
                    rennderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.towerButton}
                            onPress={() => handleTowerSelect(item)}
                        >
                            <Text>{item.name}</Text>
                            <Text>Cost: {item.cost}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
    towerButton: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 5,
        alignItems: "center",
    },
});