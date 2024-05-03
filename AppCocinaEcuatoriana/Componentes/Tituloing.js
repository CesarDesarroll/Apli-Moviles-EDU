import * as React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
export function Titulosing(props) {
    const { texttituloing } = props;
    return (
        <Text style={styles.texto}>
            {texttituloing}
        </Text>
    )
}
const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        color: "green",
        textAlign:"center",

    },
});
