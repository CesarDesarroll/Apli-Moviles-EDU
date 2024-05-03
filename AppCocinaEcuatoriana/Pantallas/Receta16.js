import { StyleSheet, Text, View } from 'react-native';
import { Botonmenu } from '../Componentes/Botonmenu';
import { Titulo } from '../Componentes/Titulo';
import { Titulosing } from '../Componentes/Tituloing';
import { Titulospre } from '../Componentes/Titulopre';
import Imagenes from '../Componentes/Imagenes';

export default function Receta16({ navigation }) {

    return (

        <View style={styles.container}>

            <View style={styles.vista2}>

                <Titulo
                    texttitulo="Coliflor manabita"
                />

                <Imagenes
                    texto={require("../src/imagenes/Coliflormanabita.png")}
                />

                <Titulosing
                    texttituloing="Ingredientes"
                />

                <Text>1 coliflor mediana, de 1 kg
                    (2 lb) aproximadamente
                    1/2 kg (1 lb) de carne picada, mitad ternera y mitad cerdo
                    1 cebolla
                    2 zanahorias
                    2 tomates maduros
                    1 pimiento verde o rojo 1 latita de guisantes Achiote (o piment6n) Aceite
                    Sal Pimienta


                </Text>

                <Titulospre
                    texttitulopre="Preparacion"
                />

                <Text> 1. Lave bien la coliflor y dejela entera. Col6quela en una olla no muy grande y que tenga tapa; ponga un poco de agua y afiada sal. Tape la olla y a fuego medio cuezala de 20 a 25
                    minutos, afiadiendo agua a media cocci6n si es necesario. Escurrala.
                    2 Mientras, haga un refrito con la carne picada, la cebolla, los tomates troceados, el pimiento verde o rojo, los guisantes y las zanahorias cortadas finamente. Salpimiente y afiada el piment6n o achiote.
                    .  </Text>


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