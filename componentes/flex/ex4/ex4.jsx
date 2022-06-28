import { View, Text } from "react-native"

export const Ex4 = ()=> {
    return (

         <View style={{flex: 1, alignItems: "center", flexDirection: "row", justifyContent: 'center'}}> 
            <View style={{ width: "20%", height: "10%", backgroundColor: "blue"}}/>
            <View style={{ width: "20%", height: "10%", backgroundColor: "red"}}/>
            <View style={{ width: "20%", height: "10%", backgroundColor: "green"}}/>
              
        </View>
    )
}