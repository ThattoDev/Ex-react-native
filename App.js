import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { useEffect, useState } from 'react';
import { ContadorRegressivo } from './componentes/contadorRegressivo/ContadorRegressivo';
import { Ex1 } from './componentes/flex/ex1/ex1';
import { Ex2 } from './componentes/flex/ex2/ex2';
import { Ex3 } from './componentes/flex/ex3/ex3';
import { Ex4 } from './componentes/flex/ex4/ex4';
import { Ex5 } from './componentes/flex/ex5/ex5';
import { Ex6 } from './componentes/flex/ex6/ex6';
import { api } from "./src/services/api";
import { ActivityIndicator } from 'react-native-web';



export default function App() {
  const [loading, setLoading] = useState(false)
  const [deck, setDeck] = useState([])
  // const [vl, setVl] = useState(0)
  const[idDeck, setIdDeck] = useState(null)

  const getDeckId = () => {
    setLoading(true)
    const {data} = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    console.log(await data.json())
    setIdDeck(await data.json())
    setLoading(false)
  }

  const getdata = await data.json()
  setIdDeck(getdata.deck_id)
  setLoading(false)

  useEffect(() => {
    if(idDeck === null) {
      console.log(idDeck.deck_id)
    }
    getDeckId()
  }, [])

  if (loading) {
    return <ActivityIndicator/>
  }
  
  return (
    <View>
      <text style={{textAlign: 'center'}}>Baralho</text>
      {/* <image source={require("caminho da pasta")} */}
      {/* // source={"nome da imagem depoi de importar"} */}
      {/* // source={{uri: "usar a url da imagem aqui"}} */}
      {/* {loading && <ActivityIndicator size='large' />} />*/} 

      <Button title="Iniciar partida" />
    </View>
  )
 
 
  // return ( 
  //   // <ContadorRegressivo/>
  //   // <Ex1/>
  //   // <Ex2/>
  //   <Ex3/>
  //   // <Ex4/>
  //   // <Ex5/>
  //   // <Ex6/>
  //   // <api/>
  // );
}

