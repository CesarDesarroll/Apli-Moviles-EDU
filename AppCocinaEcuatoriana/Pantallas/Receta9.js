import { StyleSheet, Text, View, ScrollView } from 'react-native';
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
                        texttitulo="Pan de yuca"
                    />

                    <Imagenes
                        texto={require("../src/imagenes/Pandeyuca.png")}
                    />


                    <Titulosing
                        texttituloing="Ingredientes"
                    />


                    <Text>1g (2 lb) de harina o almid6n de yuca,
                        2	huevos,
                        ½ kg (1 lb) de queso fresco,
                        1/z taza de leche tibia,
                        1/4 kg (1/2 lb) de manteca de cerdo o mantequilla derretida,
                        Sal.

                    </Text>

                    <Titulospre
                        texttitulopre="Preparación"
                    />

                    <Text> 1. Tamice el almid6n o la harina de yuca. Agregue la leche y el queso desmenuzado. Sale al gusto.</Text>
                    <Text> 2. Agregue los dos huevos y amase hasta que la masa no se pegue en las manos o en el recipiente. </Text>
                    <Text> 3. Haga bolitas y dejelas reposar unos 15 minutos.</Text>
                    <Text> 4. Precaliente el horno a 250 °Cy hornee unos 20 minutos o hasta que esten doradas. </Text>
                    <Text> 5. Se sirven coma aperitivo y tambien de merienda, acompanados de yogur de mora. </Text>

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