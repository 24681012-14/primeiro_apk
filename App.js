import { Text, View} from 'react-native';
import styles from './janelas/style';
import Forms from './janelas/cadastroCliente';

export default function App() {
  return (
    <View style={styles.fundo}>
      <Text></Text>
      <Forms/>
    </View>
  );
}

