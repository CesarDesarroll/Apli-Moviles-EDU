import { StyleSheet, Text, View } from 'react-native';
import { Botonmenu } from '../Componentes/Botonmenu';
import { Titulo } from '../Componentes/Titulo';
import { Titulosing } from '../Componentes/Tituloing';
import { Titulospre } from '../Componentes/Titulopre';
import Imagenes from '../Componentes/Imagenes';

export default function Receta20({ navigation }) {

    return (

        <View style={styles.container}>

            <View style={styles.vista2}>

                <Titulo
                    texttitulo="Torta de choclo"
                />

                <Imagenes
                    texto={require("../src/imagenes/Tortadechoclo.png")}
                />

                <Titulosing
                    texttituloing="Ingredientes"
                />

                <Text>1 kg (2 lb) de maiz (choclo) desgranado
                    250 g (½ Lb) de queso fresco
                    2 huevos
                    1 tacita de leche Sal

                </Text>

                <Titulospre
                    texttitulopre="Preparacion"
                />

                <Text> 1. Triture con la batidora el maiz desgranado crudo junto con la leche.
                    2. Agregue sal al gusto, el queso desmenuzado y los dos huevos batidos.
                    3. Vierta la mezcla en un molde para homo y horneelo durante 30 minutes.
                    4. Para saber si esta ya hecha la torta, introduzca la punta de un cuchillo y si sale limpia, ya esta Lista.
                    5. Esta torta tambien se puede hacer dulce, como postre, cambiando La sal por azucar.
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