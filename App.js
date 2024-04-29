import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';

export default function App() {

  //escribir codigo Js
  //State de la aplicación
  const [numero1, setNumero1]=useState(0)
  const [numero2, setNumero2]=useState(0)
  const [resultado, setResultado]= useState(0)

  //hacer que se sumen dos numeros

  const suma = ()=>{
    let sumatoria=(parseFloat(numero1)+parseFloat(numero2));
    setResultado(sumatoria);
  }

  const limpiar = ()=>{
    setNumero1(0)
    setNumero2(0)
    setResultado(0)
  }

  return (  
    <View style={styles.container}>
      <Text>Suma de numeros</Text>
      <Text>Numero 1: </Text>
      <TextInput
      placeholderTextColor={'red'}
      style={{backgroundColor:'yellow', color:'blue'}}
        placeholder='Numero 1: '
        value={numero1}
        onChangeText={setNumero1}
      />
<Text>Numero 2: </Text>
            <TextInput
        placeholder='Numero 2: '
        value={numero2}
        onChangeText={setNumero2}
      />
      <TouchableOpacity style={{backgroundColor: 'blue',
       padding:5}}
       onPress={suma}
       >
        <Text style={{color: '#FFF', 
        fontSize:20}}>Sumar numeros</Text>
      </TouchableOpacity>

      <Text style={{color: 'red', fontSize:30}}>Numero 1: {numero1}</Text>
      <Text style={{color: 'red', fontSize:30}}>Numero 2: {numero2}</Text>
      <Text style={{color: 'red', fontSize:30}}>Sumatoria: {resultado}</Text>

      <TouchableOpacity style={{backgroundColor: 'red',
       padding:5}}
       onPress={limpiar}
       >
        <Text style={{color: '#FFF', 
        fontSize:20}}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
