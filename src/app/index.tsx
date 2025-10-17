import icon from '@/assets/images/icon.png';
import driving from '@/assets/images/driving.png';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView
      className='flex-1 w-full justify-center items-center bg-gray-100'
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#f3f4f6"
      />

      <Image source={icon} />

      <Image source={driving} />

      <View>
        <Text className='text-2xl font-semibold text-center mt-4'>
          Bem-vindo ao Boleias 🚘
        </Text>
        <Text className='text-base text-center mt-2 px-4'>
          Encontre boleias, partilhe viagens e {'\n'}
          chegue onde precisa de forma {'\n'}
          simples e segura.
        </Text>
      </View>

      <TouchableOpacity
        className='bg-[#2586D9] px-6 py-3 rounded-full mt-6 w-full max-w-xs justify-center items-center'
      >
        <Text className='text-white text-lg font-medium'>
          Começar
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}
