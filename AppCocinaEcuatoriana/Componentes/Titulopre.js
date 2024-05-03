import * as React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
export function Titulospre(props) {
    const { texttitulopre } = props;
    return (
        <Text style={styles.texto}>
            {texttitulopre}
        </Text>
    )
}
const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        color: "blue",
        textAlign: "center"
    },
});
