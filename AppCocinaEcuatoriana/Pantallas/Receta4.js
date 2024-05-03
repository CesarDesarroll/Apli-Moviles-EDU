import { StyleSheet, Text, View } from 'react-native';
import { Botonmenu } from '../Componentes/Botonmenu';
import { Titulo } from '../Componentes/Titulo';
import { Titulosing } from '../Componentes/Tituloing';
import { Titulospre } from '../Componentes/Titulopre';
import Imagenes from '../Componentes/Imagenes';



export default function Receta3({ navigation }) {

    return (

        <View style={styles.container}>

            <View style={styles.vista2}>


                <Titulo
                    texttitulo="Ensalada de frigoles"
                />

                <Imagenes
                    texto={require("../src/imagenes/EnsaladaFrijolesBlancos.png")}
                />

                <Titulosing
                    texttituloing="Ingredientes"
                />


                <Text>½ kg (1 lb) de frijoles blancos (alubias) o una lata de frijoles ya cocidos
                    1/2 kg (1 lb) de tomates para ensalada
                    1 pimiento verde
                    1 pimiento rojo
                    2 patatas cocidas
                    1 zanahoria
                    El zumo de un Limon Aceite
                    Sal Pimienta
                </Text>

                <Titulospre
                    texttitulopre="Preparación"
                />

                <Text> 1.  Si se utilizan frijoles crudos, dejelos a remojo la noche anterior en agua templada con sal y cuezalos en abundante agua salada. Escurralos y dejelos enfriar.</Text>
                <Text> 2.  Sirva los frijoles con los pimientos cortados en tiritas; los tomates y Las zanahorias, en rodajas; y las patatas, en dados.</Text>
                <Text> 3.  Aliñe con el aceite y el zumo de Limon y salpimiente.</Text>

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