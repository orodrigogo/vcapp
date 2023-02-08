import { Text, View } from 'react-native';

import { Button } from '../../components/Button';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.options}>
        <Button
          icon="flip-camera-ios"
        />

        <Button
          icon="flash-off"
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.text}>
          Rodrigo Gonçalves
        </Text>
      </View>
    </View>
  );
}