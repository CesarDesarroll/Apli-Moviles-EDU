import { StyleSheet, Text, View } from 'react-native';
import { Botonmenu } from '../Componentes/Botonmenu';
import { Titulo } from '../Componentes/Titulo';
import { Titulosing } from '../Componentes/Tituloing';
import { Titulospre } from '../Componentes/Titulopre';
import Imagenes from '../Componentes/Imagenes';



export default function Receta1({ navigation }) {

    return (

        <View style={styles.container}>

            <View style={styles.vista2}>


                <Titulo
                    texttitulo="Chifles"
                />

                <Imagenes
                    texto={require("../src/imagenes/Chifles.png")}
                />


                <Titulosing
                    texttituloing="Ingredientes"
                />


                <Text>2 platanos, Aceite, Sal</Text>

                <Titulospre
                    texttitulopre="Preparación"
                />

                <Text> 1. Corte los platanos en rodajas muy finas. </Text>
                <Text> 2. Frialos en abundante aceite muy caliente hasta que esten dorados. </Text>   
                <Text> 3. Escurralos muy bien sabre papel absorbente y espolvoreelos con sal fina. </Text> 
                <Text> 4. Sirvalos muy calientes coma aperitivo. </Text>

                <Botonmenu
                    texto="Menu"
                    onPress={() => navigation.navigate('Menu')}
                />

            </View>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center"

    },

    vista2: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },

},

);