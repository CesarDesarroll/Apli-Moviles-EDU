import { StyleSheet, Text, View } from 'react-native';
import { Botonmenu } from '../Componentes/Botonmenu';
import { Titulo } from '../Componentes/Titulo';
import { Titulosing } from '../Componentes/Tituloing';
import { Titulospre } from '../Componentes/Titulopre';
import Imagenes from '../Componentes/Imagenes';



export default function Receta2({ navigation }) {

    return (

        <View style={styles.container}>

            <View style={styles.vista2}>


                <Titulo
                    texttitulo="Ensalada de Vegetales"
                />

                <Imagenes
                    texto={require("../src/imagenes/Ensaladadevegetales.png")}
                />
                <Titulosing

                    texttituloing="Ingredientes"
                />


                <Text>
                    2 zanahorias
                    ¼ kg (1/2 lb) de guisantes
                    1/2 kg (1 lb) de judias verdes
                    1 kg (2 lb) de patatas
                    2 tomates Aceite
                    Sal, pimienta
                    1 maduro (platano verde maduro) para adornar
                </Text>

                <Titulospre
                    texttitulopre="Preparación"
                />

                <Text> 1. Cueza las zanahorias, las judias y las patatas en abundante agua hirviendo. </Text>
                <Text> 2. Cuando este todo tierno, escurra las verduras y dejelas enfriar. </Text>
                <Text> 3. Corte las patatas y las zanahorias en dados, los tomates en rodajas y las judias verdes en trozos pequenos. </Text>
                <Text> 4. Mezcle todas las verduras y alffielas con aceite, salpimiente al gusto. </Text>
                <Text> 5. Decore la ensalada con maduros. </Text>


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