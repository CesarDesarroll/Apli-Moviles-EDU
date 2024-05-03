import { StyleSheet, Text, View } from 'react-native';
import { Botonmenu } from '../Componentes/Botonmenu';
import { Titulo } from '../Componentes/Titulo';
import { Titulosing } from '../Componentes/Tituloing';
import { Titulospre } from '../Componentes/Titulopre';
import Imagenes from '../Componentes/Imagenes';

export default function Receta17({ navigation }) {

    return (

        <View style={styles.container}>

            <View style={styles.vista2}>

                <Titulo
                    texttitulo="Moros y cristianos"
                />

                <Imagenes
                    texto={require("../src/imagenes/Morosycristianos.png")}
                />

                <Titulosing
                    texttituloing="Ingredientes"
                />

                <Text>1 taza de frijoles negros (tambien judfas pintas)
                    3 tazas de arroz de grano largo
                    1 cabeza de ajo
                    1 cebolla
                    1 pimiento verde o rojo
                    2 cucharadas de aceite Pimienta
                    Sal


                </Text>

                <Titulospre
                    texttitulopre="Preparacion"
                />

                <Text> 1. Cueza los frijoles negros hasta ablandarlos en 4 tazas de agua, pero teniendo cuidado de que no se rompan ni se consuma el agua.
                    2. Pique el ajo y la cebolla finamente y el pimiento en trozos pequeiios, frialos en dos cucharadas de aceite y agregue la pimienta.
                    3. Lave el arroz e introduzcalo en una olla grande. Aiiada el sofrito de cebolla, ajo y pimiento y mezcle bien
                    .  </Text>

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