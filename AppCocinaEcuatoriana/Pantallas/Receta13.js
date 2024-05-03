import { StyleSheet, Text, View } from 'react-native';
import { Botonmenu } from '../Componentes/Botonmenu';
import { Titulo } from '../Componentes/Titulo';
import { Titulosing } from '../Componentes/Tituloing';
import { Titulospre } from '../Componentes/Titulopre';
import Imagenes from '../Componentes/Imagenes';

export default function Receta13({ navigation }) {

    return (

        <View style={styles.container}>

            <View style={styles.vista2}>

                <Titulo
                    texttitulo="Llapingachos"
                />

                <Imagenes
                    texto={require("../src/imagenes/Llapingachos.png")}
                />

                <Titulosing
                    texttituloing="Ingredientes"
                />

                <Text>1 kg (2 lb) de patatas
                    250 g (l/2 lb) de queso fresco
                    1 cucharada de mantequilla
                    Aceite Sal Pimienta


                </Text>

                <Titulospre
                    texttitulopre="Preparacion"
                />

                <Text> 1. Cueza las patatas y hagalas pure sin añadir agua.  </Text>
                <Text> 2. Agregue la sal, la pimienta y la mantequilla.  </Text>
                <Text> 3. Forme tortillas con el pure poniendo en el centre el queso desmenuzado.  </Text>
                <Text> 4. Frfalas en muy poquito aceite, lo suficiente para que nose peguen.  </Text>
                <Text> 5. Se sirven acompaiiadas de huevo frito, salchichas, salsa de cacah_uete y salsa de cebolla con limon .  </Text>


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