import { StyleSheet, Text, View } from 'react-native';
import { Botonmenu } from '../Componentes/Botonmenu';
import { Titulo } from '../Componentes/Titulo';
import { Titulosing } from '../Componentes/Tituloing';
import { Titulospre } from '../Componentes/Titulopre';
import Imagenes from '../Componentes/Imagenes';

export default function Receta15({ navigation }) {

    return (

        <View style={styles.container}>

            <View style={styles.vista2}>

                <Titulo
                    texttitulo="Col morada hervida"
                />

                <Imagenes
                    texto={require("../src/imagenes/Colmoradahervida.png")}
                />

                <Titulosing
                    texttituloing="Ingredientes"
                />

                <Text>1 kg (2 lb) de col morada (lombarda)
                    3 patatas cocidas
                    1 lim6n Azucar
                    Aceite Sal Pimienta

                </Text>

                <Titulospre
                    texttitulopre="Preparacion"
                />

                <Text> 1. Limpie la lombarda y c6rtela en juliana.
                    2. Cuezala en abundante agua hirviendo con una cucharada de azucar para que no pierda el color.
                    3. Sirva la col morada con las patatas cortadas en rodajas a un lado y alinada con el aceite, el zumo de Limon, la sal y la pimienta.
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