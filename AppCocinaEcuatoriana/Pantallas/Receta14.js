import { StyleSheet, Text, View } from 'react-native';
import { Botonmenu } from '../Componentes/Botonmenu';
import { Titulo } from '../Componentes/Titulo';
import { Titulosing } from '../Componentes/Tituloing';
import { Titulospre } from '../Componentes/Titulopre';
import Imagenes from '../Componentes/Imagenes';

export default function Receta14({ navigation }) {

    return (

        <View style={styles.container}>

            <View style={styles.vista2}>

                <Titulo
                    texttitulo="Niños envueltos"
                />

                <Imagenes
                    texto={require("../src/imagenes/Ninosenvueltos.png")}
                />

                <Titulosing
                    texttituloing="Ingredientes"
                />

                <Text>4 hojas de repollo grandes
                    ½ kg (1 lb) de came picada, mitad cerdo y mitad ternera
                    1 cebolla mediana
                    1 diente de ajo
                    1 pimiento verde o rojo
                    1 tacita de arroz Aceite
                    Perejil Sal Pimienta


                </Text>

                <Titulospre
                    texttitulopre="Preparacion"
                />

                <Text> 1. Tome las hojas de repollo mas grandes y en mejor estado y deles apenas un hervor, como para que se puedan doblar.
                    2. Para el relleno, sofrfa la carne con la cebolla, el ajo
                    y el pimiento.
                    3. Una vez sofrito, eche una cucharada del relleno en cada una de las hojas de repollo, junto con un puiiadito de arroz crudo.
                    4. Envuelva las hojas de repollo (Vease pag. 9) y ffjelas con un palillo de madera para que no se salga el relleno.
                    5. Cueza los «niiios envueltos» en agua hirviendo unos 10-15 minutos y sfrvalos calientes
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