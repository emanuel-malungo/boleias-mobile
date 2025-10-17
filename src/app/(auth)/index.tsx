import { router } from "expo-router";
import icon from "@/assets/images/icon.png";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/validation/authValidation";
import background from "@/assets/images/backgroud-auth.png";
import { View, Text, ImageBackground, StatusBar, Image, TouchableOpacity } from "react-native";

export default function LoginPage() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    return (
        <ImageBackground source={background} style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" />
            <View className="flex-1 items-center justify-center px-6 w-full" >

                <View className="items-center">
                    <Image source={icon} className="mb-4" />
                    <Text className="text-2xl font-bold text-center">
                        Acessa a tua conta
                    </Text>
                    <Text className="text-base mt-2 text-center">
                        Preenche os campos abaixo para {'\n'}
                        aceder à tua conta.
                    </Text>
                </View>

                <View className="w-full">
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                placeholder="boleias2025@gmail.com"
                                nameIcon="mail"
                                keyboardType="email-address"
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                error={errors.email?.message}
                                className="mt-8"
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                placeholder="********"
                                nameIcon="lock"
                                secureTextEntry
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                error={errors.password?.message}
                                className="mt-4 w-full"
                            />
                        )}
                    />
                    <View className="w-full mt-4 flex-row justify-between">
                        <View></View>
                        <TouchableOpacity
                            onPress={() => router.push('/(auth)/forgot-password')}
                        >
                            <Text className="text-sm text-[#2586D9]">Esqueceste a tua senha?</Text>
                        </TouchableOpacity>
                    </View>

                    <Button
                        title="Entrar"
                        onPress={handleSubmit((data) => console.log(data))}
                        className="mt-6 w-full"
                    />

                    <View className="mt-8 flex-row justify-center">
                        <TouchableOpacity
                            onPress={() => router.push('/(auth)/register')}
                        >
                            <Text className="text-sm text-gray-500">
                                Ainda não tens conta? <Text className="text-[#2586D9] font-bold">Cria uma</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </ImageBackground>
    );
}
