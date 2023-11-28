import {View,Text,TextInput,TouchableOpacity} from 'react-native';

import styles from './style';

export default function Forms(){
  return(
    <View style={styles.forms}>
            <Text style={styles.text}>Cadastro de Cliente</Text>
      <Text >
      Preencha o formulário abaixo:
      </Text>
      <TextInput style={styles.input} placeholder="Digite  seu nome"/>
      <TextInput style={styles.input} placeholder="Digite  seu CPF"/>
      <TextInput style={styles.input} placeholder="Digite  seu E-mail"/>
      <TextInput style={styles.input} placeholder="Digite  seu telefone celular"/>
      <TouchableOpacity>
        <Text style={styles.button}>Gravar</Text>
      </TouchableOpacity>
    </View>
  );
}