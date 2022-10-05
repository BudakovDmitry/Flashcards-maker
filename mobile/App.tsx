import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
    return (
        <View>
            <Text
                style={{
                    textAlign: "center",
                    fontSize: 20,
                    marginTop: 100,
                }}
            >
                Hello!
            </Text>
            <StatusBar style="auto" />
        </View>
    );
}
