import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
   estilo1: {
      fontSize: 40,
      color: 'red'
    },
  
  estilo2: {
    fontSize: 20,
    color: 'blue',
    borderWidth: 1,
    height: 40,
    margin: 12,
    textAlign: 'center',
    paddingHorizontal: 30
  },
  estiloButton: {
    paddingHorizontal: 60,
    paddingVertical: 10,
    color: 'white',
    backgroundColor: 'blue',
    fontSize:25,
    borderRadius: 10
  },

estiloButton2: {
  marginTop: 20,
  paddingHorizontal: 68,
  paddingVertical: 10,
  color: 'white',
  backgroundColor: 'red',
  fontSize:25,
  borderRadius: 10
},
estiloButton3: {
  marginTop: 20,
  paddingHorizontal: 80,
  paddingVertical: 10,
  color: 'white',
  backgroundColor: 'green',
  fontSize:25,
  borderRadius: 10
}
});

  export default styles