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
                    texttitulo="Patacones"
                />

                <Imagenes
                    texto={require("../src/imagenes/Patacones.png")}
                />


                <Titulosing
                    texttituloing="Ingredientes"
                />


                <Text>2 platanos verdes, Aceite</Text>

                <Titulospre
                    texttitulopre="Preparación"
                />

                <Text> 1. Corte los platanos en rodajas de 2,5 cm (1 pulgada). </Text>
                <Text> 2. Frialos en abundante aceite, escCtrralos y dejelos enfriar un poco. </Text>   
                <Text> 3. Cuando esten templados, aplastelos con un mazo y vuelvalos a freír. </Text> 
                <Text> 4. Sírvalos como acompañamiento. </Text>

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