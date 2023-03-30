import { TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartOverScreen() {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartOverScreen;
