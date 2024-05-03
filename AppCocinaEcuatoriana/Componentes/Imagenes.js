import * as React from "react";
import { StyleSheet, Image } from "react-native";

export default function Imagenes(props){
    const { texto } = props;
    return (
        <Image
        style={styles.estiloimg}
        source={texto}
      />
    )
}
const styles = StyleSheet.create({
  

    estiloimg:{
        width:"50%",
        height:150,
        borderRadius:10,

    }
});
