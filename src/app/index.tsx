import icon from '@/assets/images/icon.png';
import driving from '@/assets/images/driving.png';
import { View, Text, Image, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const { width, height } = Dimensions.get('window'); // Para pegar as dimensões da tela

  return (
    <SafeAreaView
      className='flex-1 justify-center items-center bg-gray-100 px-6'
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#f3f4f6"
      />

      <Image
        source={icon}
        style={{
          width: width * 0.3,
          height: height * 0.15,
          resizeMode: 'contain',
        }}
      />

      <Image
        source={driving}
        style={{
          width: width,
          resizeMode: 'contain',
          marginTop: 20,
        }}
      />

      <View className="mt-6">
        <Text className='text-2xl font-semibold text-center'>
          Bem-vindo ao Boleias 🚘
        </Text>
        <Text className='text-base text-center mt-2'>
          Encontre boleias, partilhe viagens e {'\n'}
          chegue onde precisa de forma {'\n'}
          simples e segura.
        </Text>
      </View>

      <TouchableOpacity
        className='bg-[#2586D9] px-6 py-3 rounded-full mt-6 w-full max-w-xs justify-center items-center'
        style={{
          maxWidth: width * 0.8, // Limita a largura do botão a 80% da tela
        }}
      >
        <Text className='text-white text-lg font-medium'>
          Começar
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
