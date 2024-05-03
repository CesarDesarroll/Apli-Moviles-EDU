import { StyleSheet, Text, View } from 'react-native';
import { Botonmenu } from '../Componentes/Botonmenu';
import { Titulo } from '../Componentes/Titulo';
import { Titulosing } from '../Componentes/Tituloing';
import { Titulospre } from '../Componentes/Titulopre';
import Imagenes from '../Componentes/Imagenes';



export default function Receta1({ navigation }) {

    return (

        <View style={styles.container}>

            <View style={styles.vista2}>


                <Titulo
                    texttitulo="Ensalada de beterava y zanahoria"
                />

                <Imagenes
                    texto={require("../src/imagenes/Ensaladabeteava.png")}
                />


                <Titulosing
                    texttituloing="Ingredientes"
                />


                <Text>2 zanahorias,
                    2 beteravas (remolachas) cocidas,
                    2 patatas,
                    1 huevo duro,
                    1 limon, 
                    Aceite,
                    Sal,
                    Pimienta,
                </Text>

                <Titulospre
                    texttitulopre="Preparación"
                />

                <Text> 1. Se cuecen en abundante agua hirviendo las	  zanahorias y las patatas. </Text>
                <Text> 2. Cuando este todo cocido, se escurre y se deja enfriar. </Text>
                <Text> 3. Se parten las patatas y zanahorias en dados pequeiios y se mezdan con las beteravas en dados. Salpimentar al gusto y aliiiar con el aceite. </Text>
                <Text> 4. Se revuelve todo bien y se adorna la ensalada con el huevo duro cortado en rodajas. </Text>

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