import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';


export default function App() {
  
  // definir el state del citas
  const [citas, setCitas] =  useState([
    { id: "1", paciente: "Juan Sanchez", seguro: 'HUMANA', sintomas: "Dolor Cabeza" },
    { id: "2", paciente: "Pedro Carrasco", seguro: 'EQUINOCIAL', sintomas: "Picor" },
    { id: "3", paciente: "Pablo Hernandez", seguro: 'SALUD S.A', sintomas: "Dolor rodilla" }
  ]);

 //Elimina cita del state 
  const eliminarCita = id => {
    setCitas((citasActuales)=> {
      return citasActuales.filter(cita => cita.id !== id)

    })
}

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Agenda tu cita</Text>
        <Formulario/>
        <Text style={styles.titulo}>{citas.length > 0 ? 'Administra tus citas': 'No hay citas agrega una'}</Text>
        <FlatList
          data={citas}
          renderItem={({item}) => <Cita item={item} eliminarCitas={eliminarCita}/>}
          keyExtractor={citas => citas.id}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EF573A'
  },
  titulo: {
    color: '#fff',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
