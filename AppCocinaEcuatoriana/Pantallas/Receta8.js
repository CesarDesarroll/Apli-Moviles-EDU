import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Botonmenu } from '../Componentes/Botonmenu';
import { Titulo } from '../Componentes/Titulo';
import { Titulosing } from '../Componentes/Tituloing';
import { Titulospre } from '../Componentes/Titulopre';
import Imagenes from '../Componentes/Imagenes';



export default function Receta1({ navigation }) {

    return (
        <ScrollView style={styles.container}>

            <View style={styles.container}>

                <View style={styles.vista2}>


                    <Titulo
                        texttitulo="Mote pillo"
                    />

                    <Imagenes
                        texto={require("../src/imagenes/Motepillo.png")}
                    />


                    <Titulosing
                        texttituloing="Ingredientes"
                    />


                    <Text>2 puerros, solo la parte blanca,
                        1 cucharadita de achiote (piment6n),
                        1 cucharada de mantequilla,
                        1/4de cucharadita de ajo en polvo,
                        750 g (1 ½ lb) de mote (mafz) pelado y cocido,
                        1/4 de taza de leche,
                        6 huevos,
                        1 tallo de cebollino, Sal,
                        Pimienta,


                    </Text>

                    <Titulospre
                        texttitulopre="Preparación"
                    />

                    <Text> 1. Sofria en una sarten el puerro finamente picado, la mantequilla y el ajo. Cuando el puerro este transparente, aiiada el mote cocido y remueva para que tome sabor.</Text>
                    <Text> 2. Agregue la leche caliente y salpimiente. </Text>
                    <Text> 3. Mantenga la ebullici6n a fuego bajo, hasta que se consuma el liquido.</Text>
                    <Text> 4. Añada los huevos ligeramente batidos y cuezalos a fuego medio, para que se cuajen sin llegar a secarse. </Text>
                    <Text> 5. Antes de servir, pique el cebollino y mezcle con el resto de ingredientes. </Text>
                    <Text> 6. Sirva el «mote pillo» en una fuente y dec6relo, si lo desea, con rodajas de tomate, aceitunas, alcaparras o lechuga. </Text>

                    <Botonmenu
                        texto="Menu"
                        onPress={() => navigation.navigate('Menu')}
                    />

                </View>

            </View>
        </ScrollView>
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