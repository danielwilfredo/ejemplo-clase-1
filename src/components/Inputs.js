import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function Inputs({texto_label, valor_numero, set_valor_numero}) {
    return(
        <>
    <View>
      <Text>{texto_label}</Text>
      <TextInput
        style={styles.input}
        keyboardType='number-pad'
        placeholder={texto_label}
        value={valor_numero}
        onChangeText={set_valor_numero}
      />
    </View>
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
    input: {
      backgroundColor: 'grey',
      width: 150,
      padding: 10,
      margin: 5,
      fontSize: 20,
      fontWeight: '900'
    }
  });
  