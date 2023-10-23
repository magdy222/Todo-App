import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoReducer'

const TodoHeader = () => {


    const [todo, setTodo] = useState('')

    const dispatch = useDispatch()

    const addTaskHandler = () => {
      
      dispatch( addTodo( todo ) )
      setTodo('')
    }


  return (
    <SafeAreaView>
      <Text style={styles.textContainer}>Todo List</Text>
      <View>
        <TextInput 
        placeholder='make a todo' 
        style={styles.inputStyle}
        value={ todo }
        onChangeText={ setTodo }
        />
        <TouchableOpacity 
        style={styles.button}
        onPress={addTaskHandler}
        >
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    
    </SafeAreaView>
  )
}

export default TodoHeader

const styles = StyleSheet.create({
    textContainer:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        marginTop:30,
    },
    inputStyle:{
        height:40,
        borderColor:'black',
        borderWidth:2,
        marginTop:20,
        width:300,
        alignSelf:'center',
        borderRadius:10,
        textAlign:'center',
    },
    button:{
        width:140,
        height:40,
        backgroundColor:'#1e3d59',
        alignSelf:'center',
        marginTop:20,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:16,
    }
})