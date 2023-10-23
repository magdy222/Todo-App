import { SafeAreaView, StyleSheet } from 'react-native';
import TodoHeader from './src/components/TodoHeader';
import TodoContent from './src/components/TodoContent';
import store from './src/redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
          <TodoHeader/>
          <TodoContent/>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#ffffff',
    borderColor: '#12a4d9',
    borderWidth: 15,
    flex: 1,
    marginTop:30
    
  }
});