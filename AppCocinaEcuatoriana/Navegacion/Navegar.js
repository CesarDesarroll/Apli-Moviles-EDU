
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Menu from "../Pantallas/Menu";
import Receta1 from "../Pantallas/Receta1";
import Receta2 from "../Pantallas/Receta2";
import Receta3 from "../Pantallas/Receta3";
import Receta4 from "../Pantallas/Receta4";
import Receta5 from "../Pantallas/Receta5";
import Receta6 from "../Pantallas/Receta6";
import Receta7 from "../Pantallas/Receta7";
import Receta8 from "../Pantallas/Receta8";
import Receta9 from "../Pantallas/Receta9";
import Receta10 from "../Pantallas/Receta10";
import Receta11 from "../Pantallas/Receta11";
import Receta12 from "../Pantallas/Receta12";
import Receta13 from "../Pantallas/Receta13";
import Receta14 from "../Pantallas/Receta14";
import Receta15 from "../Pantallas/Receta15";
import Receta16 from "../Pantallas/Receta16";
import Receta17 from "../Pantallas/Receta17";
import Receta18 from "../Pantallas/Receta18";
import Receta19 from "../Pantallas/Receta19";
import Receta20 from "../Pantallas/Receta20";


const Stack = createStackNavigator();

const Navegar = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Menu" component={Menu}/>
                <Stack.Screen name="Receta1" component={Receta1}/>
                <Stack.Screen name="Receta2" component={Receta2}/>
                <Stack.Screen name="Receta3" component={Receta3}/>
                <Stack.Screen name="Receta4" component={Receta4}/>
                <Stack.Screen name="Receta5" component={Receta5}/>
                <Stack.Screen name="Receta6" component={Receta6}/>
                <Stack.Screen name="Receta7" component={Receta7}/>
                <Stack.Screen name="Receta8" component={Receta8}/>
                <Stack.Screen name="Receta9" component={Receta9}/>
                <Stack.Screen name="Receta10" component={Receta10}/>
                <Stack.Screen name="Receta11" component={Receta11}/>
                <Stack.Screen name="Receta12" component={Receta12}/>
                <Stack.Screen name="Receta13" component={Receta13}/>
                <Stack.Screen name="Receta14" component={Receta14}/>
                <Stack.Screen name="Receta15" component={Receta15}/>
                <Stack.Screen name="Receta16" component={Receta16}/>
                <Stack.Screen name="Receta17" component={Receta17}/>
                <Stack.Screen name="Receta18" component={Receta18}/>
                <Stack.Screen name="Receta19" component={Receta19}/>
                <Stack.Screen name="Receta20" component={Receta20}/>


            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navegar;


