import { StyleSheet, Text, View } from 'react-native';
import { Botonmenu } from '../Componentes/Botonmenu';
import { Titulo } from '../Componentes/Titulo';
import { Titulosing } from '../Componentes/Tituloing';
import { Titulospre } from '../Componentes/Titulopre';
import Imagenes from '../Componentes/Imagenes';

export default function Receta18({ navigation }) {

    return (

        <View style={styles.container}>

            <View style={styles.vista2}>

                <Titulo
                    texttitulo="Menestra con carne"
                />

                <Imagenes
                    texto={require("../src/imagenes/Menestraconcarne.png")}
                />

                <Titulosing
                    texttituloing="Ingredientes"
                />

                <Text>½ kg (1 lb) de judias amarillas (o cualquier otro tipo de alubia)
                    250 g (1/2 lb) de queso fresco
                    1 cucharada de leche
                    1 cebolla morada grande
                    1 tomate
                    1 pimiento
                    2 dientes de ajo Comino
                    Sal


                </Text>

                <Titulospre
                    texttitulopre="Preparacion"
                />

                <Text> 1. La noche anterior ponga a remojo las alubias en agua templada con sal.
                    2. Cuezalas en agua hasta que esten blandas.
                    3. Mientras, prepare un refrito con la cebolla, el tomate y el pimiento cortados en trozos pequeiios. A esa preparaci6n agregue los dos dientes de ajo cortados en rodajas finas, una pizca de comino y sal al gusto. Aiiada el sofrito a las alubias y deje hervir otro rato.

                    4. Agregue la leche y el queso.
                    5. Sirva la menestra acompaiiada de arroz blanco, con came asada, pescado frito o pollo.
                </Text>


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