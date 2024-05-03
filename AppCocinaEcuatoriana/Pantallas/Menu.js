import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Botonmenu } from "../Componentes/Botonmenu";
import { Titulo } from "../Componentes/Titulo";
import Imagenes from "../Componentes/Imagenes"

export default function Menu({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.vista2}>

                <Titulo
                    texttitulo="Cocina Ecuatorina"
                />

            </View>
            <View style={styles.vista2}>

                <Imagenes
                    texto={require("../src/imagenes/Chifles.png")}
                />

                <Botonmenu
                    texto="Chifles"
                    onPress={() => navigation.navigate('Receta1')}
                />


                <Imagenes
                    texto={require("../src/imagenes/Ensaladadevegetales.png")}
                />

                <Botonmenu
                    texto="Ensalada de vegetales"
                    onPress={() => navigation.navigate('Receta2')}
                />

                <Imagenes
                    texto={require("../src/imagenes/Locrodepapa.png")}
                />

                <Botonmenu
                    texto="Locro de papas"
                    onPress={() => navigation.navigate('Receta3')}
                />

                <Imagenes
                    texto={require("../src/imagenes/EnsaladaFrijolesBlancos.png")}
                />

                <Botonmenu
                    texto="Ensalada de frijoles blancos"
                    onPress={() => navigation.navigate('Receta4')}
                />

                <Imagenes
                    texto={require("../src/imagenes/Patacones.png")}
                />

                <Botonmenu
                    texto="Patacones"
                    onPress={() => navigation.navigate('Receta5')}
                />

                <Imagenes
                    texto={require("../src/imagenes/Ensaladabeteava.png")}
                />

                <Botonmenu
                    texto="Ensalada de beterava y zanahoria"
                    onPress={() => navigation.navigate('Receta6')}
                />

                <Imagenes
                    texto={require("../src/imagenes/Sopabolasverde.png")}
                />

                <Botonmenu
                    texto="Sopa de bolas de verde"
                    onPress={() => navigation.navigate('Receta7')}
                />

                <Imagenes
                    texto={require("../src/imagenes/Motepillo.png")}
                />

                <Botonmenu
                    texto="Mote pillo "
                    onPress={() => navigation.navigate('Receta8')}
                />

                <Imagenes
                    texto={require("../src/imagenes/Pandeyuca.png")}
                />

                <Botonmenu
                    texto="Pan de yuca"
                    onPress={() => navigation.navigate('Receta9')}
                />

                <Imagenes
                    texto={require("../src/imagenes/Muchinesdeyuca.png")}
                />

                <Botonmenu
                    texto="Muchines de yuca"
                    onPress={() => navigation.navigate('Receta10')}
                />

                <Imagenes
                    texto={require("../src/imagenes/Bolondeverde.png")}
                />

                <Botonmenu
                    texto="Bolon de verde"
                    onPress={() => navigation.navigate('Receta11')}
                />

                <Imagenes
                    texto={require("../src/imagenes/Picantedeyuca.png")}
                />

                <Botonmenu
                    texto="Picante de Yuca"
                    onPress={() => navigation.navigate('Receta12')}
                />

                <Imagenes
                    texto={require("../src/imagenes/Llapingachos.png")}
                />

                <Botonmenu
                    texto="Llapingachos"
                    onPress={() => navigation.navigate('Receta13')}
                />

                <Imagenes
                    texto={require("../src/imagenes/Ninosenvueltos.png")}
                />

                <Botonmenu
                    texto="Niños Envueltos"
                    onPress={() => navigation.navigate('Receta14')}
                />
                
                <Imagenes
                    texto={require("../src/imagenes/Colmoradahervida.png")}
                />

                <Botonmenu
                    texto="Col Morada hervida"
                    onPress={() => navigation.navigate('Receta15')}
                />

                <Imagenes
                    texto={require("../src/imagenes/Coliflormanabita.png")}
                />

                <Botonmenu
                    texto="Coliflor manabita"
                    onPress={() => navigation.navigate('Receta16')}
                />

                <Imagenes
                    texto={require("../src/imagenes/Morosycristianos.png")}
                />

                <Botonmenu
                    texto="Moros y cristianos"
                    onPress={() => navigation.navigate('Receta17')}
                />

                <Imagenes
                    texto={require("../src/imagenes/Menestraconcarne.png")}
                />

                <Botonmenu
                    texto="Mesnestra con carne"
                    onPress={() => navigation.navigate('Receta18')}
                />

                <Imagenes
                    texto={require("../src/imagenes/Aguacatealaserrana.png")}
                />

                <Botonmenu
                    texto="Aguacate a la serrana"
                    onPress={() => navigation.navigate('Receta19')}
                />

               <Imagenes
                    texto={require("../src/imagenes/Tortadechoclo.png")}
                />

                <Botonmenu
                    texto="Torta de choclo"
                    onPress={() => navigation.navigate('Receta20')}
                />




            </View>
            <StatusBar style="auto" />
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20,
        marginBottom: 20,

    },
    vista2: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },



});
