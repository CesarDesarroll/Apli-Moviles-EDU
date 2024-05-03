import { StyleSheet, Text, View } from 'react-native';
import { Botonmenu } from '../Componentes/Botonmenu';
import { Titulo } from '../Componentes/Titulo';
import { Titulosing } from '../Componentes/Tituloing';
import { Titulospre } from '../Componentes/Titulopre';
import Imagenes from '../Componentes/Imagenes';



export default function Receta11({ navigation }) {

    return (

        <View style={styles.container}>

            <View style={styles.vista2}>


                <Titulo
                    texttitulo="Bolón de verde"
                />
                
                <Imagenes
                    texto={require("../src/imagenes/Bolondeverde.png")}
                />

                <Titulosing
                    texttituloing="Ingredientes"
                />



                <Text>4 platanos verdes,
                    Un poco de mantequilla,
                    250 g (1/2lb) de queso fresco, Beicon (opcional),
                    Sal.
                </Text>



                <Titulospre
                    texttitulopre="Preparacion"
                />

                <Text> 1. Pele y cueza los platanos verdes en agua salada hasta que esten tiernos. </Text>
                <Text> 2. Machaquelos hasta hacer un pure mientras estan calientes, agregandoles un poco de mantequilla para suavizar la masa. </Text>   
                <Text> 3. Extienda la masa y coloque en el centro pedacitos de queso y si se desea trocitos de beicon pasado por la sarten. </Text> 
                <Text> 4. Forme unas bolas del tamaño de una pelota de golf, procurando que el queso y el tocino se queden en el centro. </Text>
                <Text> 5. Dispongalas en una bandeja de horno y horneelas a temperatura moderada hasta que esten doradas. Tambien se pueden freir. </Text>   
                
                
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