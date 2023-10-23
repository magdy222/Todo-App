import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../redux/todoReducer';

const TodoContent = () => {

    const todos = useSelector( ( state ) => state.todos)

    const dispatch = useDispatch()

    const deleteTaskHandler = (index) => {
        dispatch(deleteTodo(index))
    }
 
  return (
    <View style={styles.container}>
        {todos.map( (todo, index) => {
            return(
                <View style={styles.textContainer} key={index}>
                    <Text style={styles.text}>
                        {todo}
                    </Text>
                <TouchableOpacity  onPress={()=> deleteTaskHandler(index)}>
                    <AntDesign 
                        name="delete"
                        size={16} 
                        color="red" 
                        style={{marginLeft:10}} 
                    />
                </TouchableOpacity>
            </View>
            )
        })}
    </View>
  )
}

export default TodoContent

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
    },
    textContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#f5f5f5',
        borderColor: '#1e3d59',
        borderWidth: 2,
        borderRadius:10,
        padding:10,
        marginHorizontal:20,
        marginVertical:10
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
    },

})