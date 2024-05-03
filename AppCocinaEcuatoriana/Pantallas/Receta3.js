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
                    texttitulo="Locro de papas"
                />

                <Imagenes
                    texto={require("../src/imagenes/Locrodepapa.png")}
                />

                <Titulosing
                    texttituloing="Ingredientes"
                />


                <Text>2 Cucharaditas Aceite de achiote
                    2 Cucharaditas Cebolla Perla picada finamente
                    2 1/2 Tazas Papas Peladas y picadas en cubos
                    1 1/2 Litro Agua
                    1/2 Taza Leche Entera La Lechera ®
                    1 Taza Queso Fresco desmenuzado
                    1 Sobre Caldo Criollita Maggi®</Text>

                <Titulospre
                    texttitulopre="Preparación"
                />

                <Text> 1.  En una cacerola a fuego medio, calienta aceite y dora cebolla junto con las papas. Una vez que tengan color añade el agua.</Text>
                <Text> 2.  Cuando las papas estén casi suaves, incorpora Criollita MAGGI® y aplasta ligeramente un poco de las papas y sigue cocinandolas. Deja que hierva hasta que tome consistencia, sazona con sal si fuera necesario.</Text>
                <Text> 3.  Para finalizar añade Leche LA LECHERA® y queso rallado. Si deseas puedes espolvorear perejil y servir con aguacate.</Text>

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