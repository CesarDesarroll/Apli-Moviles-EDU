import { StyleSheet, Text, View } from 'react-native';
import { Botonmenu } from '../Componentes/Botonmenu';
import { Titulo } from '../Componentes/Titulo';
import { Titulosing } from '../Componentes/Tituloing';
import { Titulospre } from '../Componentes/Titulopre';
import Imagenes from '../Componentes/Imagenes';



export default function Receta11({ navigation }) {

    return (

        <View style={styles.container}>

            <View style={styles.vista2}>


                <Titulo
                    texttitulo="Muchines de yuca"
                />

                <Imagenes
                    texto={require("../src/imagenes//Muchinesdeyuca.png")}
                />
                
                <Titulosing
                    texttituloing="Ingredientes"
                />



                <Text>1	kg (2 Lb) de yuca,
                    2	huevos,
                    1/4 kg (1/2Lb) de queso fresco,
                    1	cebolla,
                    2	cucharadas de perejil,
                    Aceite, Sal, Pimienta,
                    Una pizca de achiote (pimenton).

                </Text>



                <Titulospre
                    texttitulopre="Preparacion"
                />

                <Text> 1. Pele la yuca y cuezala en abundante agua hirviendo. </Text>
                <Text> 2. Una vez cocida, triturela en la batidora o con el tenedor. Agregue el piment6n o achiote y los huevos batidos y haga bolas con la masa. </Text>
                <Text> 3. En el centro de cada bola, eche una cucharadita de cebolla picada, perejil y queso, todo bien mezclado. </Text>
                <Text> 4. Dele forma para que el relleno quede en el centro. </Text>
                <Text> 5. En un poco de aceite o mantequilla, fria las empanadillas. </Text>


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