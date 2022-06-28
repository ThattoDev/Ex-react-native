import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { useState } from 'react';




export default function Aula1() {
  const [vl, setVl] = useState(0)
  const [contador, setContador] = useState(0)
  //console.log(contador)

  const inicia = (input) => {
    setContador( parseInt(input))
    setVl(parseInt(input))
  }
  const progressiva =()=> {
   
    setContador(contador +1)
  }
  const regressiva =()=>{
    
    if(contador<=0){
    alert("Você ja chegou a 0 , clique agora em Progressivo ou Resetar!")  
    return
    }
    setContador(contador-1)
  }
 
  return (
    
    <View style={styles.container}>
      
      <Text style={styles.estilo1} >Insira um numero</Text>
      <TextInput placeholder='insira o numero' value={String(contador)} style={styles.estilo2}  onChangeText={inicia} keyboardType="numeric"></TextInput>
      <TouchableOpacity>
        <Text style={styles.estiloButton} onPress={progressiva}>Progressivo</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.estiloButton2} onPress={regressiva}>Regressivo</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.estiloButton3} onPress={() => setContador(vl)}>Resetar</Text>
      </TouchableOpacity>

      
       {/* <Button  title="Progressivo"  onPress={() => setContador(contador +1)}/>
      
       <Button title="Regressivo" onPress={() => setContador(0)}/> */}
      {/* <Text style={styles.estilo1} >Estilo1</Text>
      <Text style={styles.estilo2} >Estilo2</Text>
      <StatusBar style="auto" />
      <Button title="button"/>
      <TouchableOpacity>
        <Text style={styles.estiloButton}>Opacity</Text>
      </TouchableOpacity> */}

      </View>

  );
}

