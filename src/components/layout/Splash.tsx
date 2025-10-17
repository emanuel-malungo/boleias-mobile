import icon from '@/assets/images/icon2.png';
import { Image, StatusBar, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Splash() {
    return (
        <SafeAreaView
            className='flex-1 w-full justify-center items-center bg-[#2586D9]'
        >
            <StatusBar
                barStyle="light-content"
                backgroundColor="#2586D9"
            />
            <Image source={icon} />
            <ActivityIndicator
                size="large"
                color="#ffffff"
                className="mt-4"
            />
        </SafeAreaView>
    );
}