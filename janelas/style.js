import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  text: {
    color: '#f54c40',
    fontFamily: 'fantasy',
    fontSize: 30,
  },
  fundo: {
    backgroundColor: '#f54c40',
    padding: 0,
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  forms: {
    backgroundColor: '#fff',
    padding: 10,
    width: 300,
    height: 300,
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
    shadowRadius: 20,
    shadowColor: '#fff',

  },
  input: {
    borderRadius: 10,
    border: 'solid 1px',
    textAlign: 'center',
    padding: 3,
    margin: 5,
    color: '#919090'
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#f54c40',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 3,
    color: '#fff',
  },
});

export default styles;