import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Botonmenu } from '../Componentes/Botonmenu';
import { Titulo } from '../Componentes/Titulo';
import { Titulosing } from '../Componentes/Tituloing';
import { Titulospre } from '../Componentes/Titulopre';
import Imagenes from '../Componentes/Imagenes';



export default function Receta1({ navigation }) {

    return (
        <ScrollView style={styles.container}>

        <View style={styles.container}>

            <View style={styles.vista2}>


                <Titulo
                    texttitulo="Sopa de bolas de verde"
                />

                <Imagenes
                    texto={require("../src/imagenes/Sopabolasverde.png")}
                />


                <Titulosing
                    texttituloing="Ingredientes"
                />


                <Text>4 tazas de caldo de came,
                    2 platanos verdes,
                    ¼ kg (½ lb) de yuca,
                    1 choclo (mazorca de maiz),
                    ¼ de taza de cacahuetes crudos triturados,
                    1/4taza de came picada,
                    4 patatas pequeiias,
                    1 hoja de repollo,
                    2 cucharadas de aceite,
                    1 cucharada de cebolla picada,
                    2 huevos duros cortados en cuartos,
                    1/2 cucharada de perejil picado Achiote o pimenton,
                    Sal Pimienta.

                </Text>

                <Titulospre
                    texttitulopre="Preparación"
                />

                <Text> 1. En el caldo de carne previamente colado y con un	g	 Haga unas bolitas con esta masa y rellenelas con poquito de piment6n, se pone a hervir un platano			un poco del refrito y un cuarto de huevo duro. verde durante 15 minutos. Una vez cocido, retire		rl En el caldo de came reservado, eche las patatas el platano y reserve el caldo.</Text>
                <Text> 2. Mientras, ralle y amase el otro platano verde. </Text>
                <Text> 3. Haga un refrito con el aceite, el achiote, la cebolla picada, el cacahuete triturado, la carne picada, y sal y pimienta al gusto.</Text>
                <Text> 4. Mezcle el platano ya cocido con el crudo, agregue una cucharada de aceite y amase todo bien. </Text>
                <Text> 5. Haga unas bolitas con esta masa y rellenelas con un poco del refrito y un cuarto de huevo duro . </Text>
                <Text> 6. En el caldo de carne reservado, eche las patatas . </Text>

                <Botonmenu
                    texto="Menu"
                    onPress={() => navigation.navigate('Menu')}
                />

            </View>

        </View>
 </ScrollView>
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