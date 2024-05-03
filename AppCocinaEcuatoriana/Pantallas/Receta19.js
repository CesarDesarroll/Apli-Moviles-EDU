import { StyleSheet, Text, View } from 'react-native';
import { Botonmenu } from '../Componentes/Botonmenu';
import { Titulo } from '../Componentes/Titulo';
import { Titulosing } from '../Componentes/Tituloing';
import { Titulospre } from '../Componentes/Titulopre';
import Imagenes from '../Componentes/Imagenes';

export default function Receta19({ navigation }) {

    return (

        <View style={styles.container}>

            <View style={styles.vista2}>

                <Titulo
                    texttitulo="Aguacate a la serrana"
                />

                <Imagenes
                    texto={require("../src/imagenes/Aguacatealaserrana.png")}
                />

                <Titulosing
                    texttituloing="Ingredientes"
                />

                <Text>2 mazorcas de maiz o choclo
                    3 lonchas de tocino ahumado o jam6n
                    1 cucharada de mantequilla
                    ½ pimiento rojo
                    1/2 pimiento verde
                    2 aguacates
                    2 cucharadas de zumo de lim6n Sal
                    Pimienta

                </Text>

                <Titulospre
                    texttitulopre="Preparacion"
                />

                <Text> 1. Ponga en una olla a cocer agua con sal. Cuando hierva, sumerja el choclo y tape la olla.
                    2. Cocer hasta que vuelva a hervir y mantener 15 minutes mas. Escurralo.
                    3. En una sarten, a fuego media, caliente la mantequilla y dore el tocino ahumado o eljam6n. Escurralo sabre papel absorbente. C6rtelo en trocitos y reserve.
                    4. Retire el exceso de aceite de la sarten dejando s6lo 3 cucharadas. Caliente a fuego medic y sofria el pimiento, finamente picado, durante 3 minutes. Agregue el choclo desgranado y sofria durante 5 minutes, revolviendo constantemente. Mezcle el tocino ahumado o jamon.
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