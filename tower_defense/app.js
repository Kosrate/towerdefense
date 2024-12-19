import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Towers from "./src/components/Towers";
import Enemies from "./src/components/Enemies";
import Levels from "./src/components/Levels";
import GameScreen from "./src/components/GameScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Levels">
                <Stack.Screen name="Levels" component={Levels} />
                <Stack.Screen name="Towers" component={Towers} />
                <Stack.Screen name="Enemies" component={Enemies} />
                <Stack.Screen name="Game" component={GameScreen} />;
            </Stack.Navigator>
        </NavigationContainer>
    );
}