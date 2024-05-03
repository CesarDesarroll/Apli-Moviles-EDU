import { StyleSheet, Text, View } from 'react-native';
import { Botonmenu } from '../Componentes/Botonmenu';
import { Titulo } from '../Componentes/Titulo';
import { Titulosing } from '../Componentes/Tituloing';
import { Titulospre } from '../Componentes/Titulopre';
import Imagenes from '../Componentes/Imagenes';

export default function Receta12({ navigation }) {

    return (

        <View style={styles.container}>

            <View style={styles.vista2}>

                <Titulo
                    texttitulo="Picante de Yuca"
                />

                <Imagenes
                    texto={require("../src/imagenes/Picantedeyuca.png")}
                />

                <Titulosing
                    texttituloing="Ingredientes"
                />

                <Text>½ kg (1 lb) de yuca
                    1 pechuga de pollo cocida
                    1 cebolla encurtida en lim6n
                    (Vease pag. 68)
                    Aceite
                    Oregano, sal y pimienta

                </Text>

                <Titulospre
                    texttitulopre="Preparacion"
                />

                <Text> 1. Pele la yuca y cuezala en agua salada.  </Text>
                <Text> 2. Una vez cocida, pfquela en dados o tiras. </Text>
                <Text> 3. En un plato, extienda una capa gruesa de yuca y desmenuce La pechuga encima. </Text>
                <Text> 4. Sirva el picante de yuca con La cebolla encurtida, oregano, sal, pimienta y aceite. </Text>
               

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