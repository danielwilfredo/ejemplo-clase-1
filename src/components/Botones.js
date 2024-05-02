import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function Botones({texto_boton, accion_boton}) {
    return(
        <>
        <TouchableOpacity
style={styles.boton}
onPress={accion_boton}
>
<Text style={{ textAlign: 'center' }}>{texto_boton}</Text>
</TouchableOpacity>
        </>
    );
}



const styles = StyleSheet.create({
    texto: {
      backgroundColor: 'blue',
      color: 'white',
      fontSize: 30,
      padding: 10
    },
    boton: {
      backgroundColor: 'yellow',
      width: 150,
      padding: 10,
      margin: 5,
    }
  });

