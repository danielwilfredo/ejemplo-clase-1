import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useState } from 'react'
import Inputs from './src/components/Inputs'
import Botones from './src/components/Botones'

export default function App() {
  /*
  codigo js */
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    setResultado(parseFloat(numero1) + parseFloat(numero2));
  }

  const clean = ()=>{
    setNumero1(0)
    setNumero2(0)
    setResultado(0)
  }


  /*
  codigo js */
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Calcular dos numeros</Text>
      <Inputs
            texto_label='Numero 1'
            valor_numero={numero1}
            set_valor_numero={setNumero1}
      />

         <Inputs
         texto_label='Numero 2'
         valor_numero={numero2}
         set_valor_numero={setNumero2}
      />
  <Botones
  texto_boton='Sumar'
  accion_boton={sumar}
  />


      <Text>
        numero 1: {numero1}
      </Text>

      <Text>
        numero 2: {numero2}
      </Text>
      <Text>

        Resultado: {resultado}</Text>
    <Botones
    texto_boton='Limpiar'
    accion_boton={clean}
    />
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
  texto: {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 30,
    padding: 10
  }

});
