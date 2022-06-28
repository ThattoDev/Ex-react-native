import { View, Text } from "react-native"

export const Ex5 = ()=> {
    return (

         <View style={{flex: 1, alignItems: "flex-end", justifyContent: 'flex-end'}}> 
            <View style={{ width: "20%", height: "10%", backgroundColor: "blue"}}/>
            <View style={{ width: "20%", height: "10%", backgroundColor: "red"}}/>
            <View style={{ width: "20%", height: "10%", backgroundColor: "green"}}/>
              
        </View>
    )
}