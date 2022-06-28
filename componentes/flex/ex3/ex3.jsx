import { View, Text } from "react-native"

export const Ex3 = ()=> {
    return (

         <View style={{flex: 1, justifyContent: "space-between", alignItems: "center"}}> 
            <View style={{ width: "40%", height: "20%", backgroundColor: "blue"}}/>
            <View style={{ width: "40%", height: "20%", backgroundColor: "red"}}/>
            <View style={{ width: "40%", height: "20%", backgroundColor: "green"}}/>
              
        </View>
    )
}