import * as React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
export function Botonmenu(props) {
    const { onPress, texto } = props;
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text>{texto}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

       button: {
        alignItems: 'center',
        backgroundColor: '#197A88',
        padding: 10,
        width: "40%",
        color: "#FFFFFF",
        fontSize: 20,
        height: 60,
        borderRadius: 10,
        marginTop: 10,
        fontWeight: "bold",
        textAlign: "center",
       
    },
});

