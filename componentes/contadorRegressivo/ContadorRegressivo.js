import { View, Text, Button, TextInput } from 'react-native'
import { useState } from 'react'
import { styles } from './styles'

export const ContadorRegressivo = () => {
    const [contador, setContador] = useState(10)
    const [disabled, setDisabled] = useState(false)
    const [novoValor, setNovoValor] = useState("")

    const handleClick = () => {
        if(contador <= 0) {
            setDisabled(true)
            return
        }

        setContador(prev => prev - 1)
    }

    const handleReset = () => {
        const aux = novoValor.length === 0 ? 10 : novoValor
        if(contador === aux) return
        setContador(aux)
        setDisabled(false)
    }

    const cadastraNovoValor = () => {
        if(novoValor.length === 0) return
        if(disabled) setDisabled(false)
            setContador(novoValor)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Contagem Regressiva</Text>
            <Text style={styles.contador}>{contador}</Text>
            <View style={{marginBottom: 20}}>
                <Button 
                    title="Contagem Regressiva" 
                    onPress={handleClick} 
                    disabled={disabled}
                />
            </View>
            <Button title="Reiniciar" onPress={handleReset}/>

            <View>
                <Text style={{textAlign: 'center'}}>Digite um novo valor inicial:</Text>
                <TextInput 
                    style={styles.input} 
                    value={novoValor}
                    onChangeText={setNovoValor}
                    keyboardType='numeric'
                />
                <Button title="Cadastrar Novo Valor Inicial" onPress={cadastraNovoValor}/>
            </View>
        </View>
    );
}
