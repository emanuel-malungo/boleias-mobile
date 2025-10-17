import React from 'react';
import { Controller } from 'react-hook-form';
import { Switch, Text, View } from 'react-native';
import Input from '../common/Input';

interface Step4Props {
    control: any;
    errors: any;
}

export default function Step4({ control, errors }: Step4Props) {
    return (
        <>
            <Controller
                control={control}
                name="password"
                rules={{
                    required: 'A password é obrigatória',
                    minLength: { value: 8, message: 'Mínimo 8 caracteres' }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder="Password segura"
                        nameIcon="lock"
                        secureTextEntry
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        error={errors.password?.message as string}
                        className="mt-4"
                    />
                )}
            />

            <Controller
                control={control}
                name="confirmPassword"
                rules={{ required: 'Confirma a password' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder="Confirma a password"
                        nameIcon="lock"
                        secureTextEntry
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        error={errors.confirmPassword?.message as string}
                        className="mt-4"
                    />
                )}
            />

            <View className="mt-6 space-y-4">
                <Controller
                    control={control}
                    name="acceptTerms"
                    rules={{ required: 'Deves aceitar os termos' }}
                    render={({ field: { onChange, value } }) => (
                        <View className="flex-row items-center">
                            <Switch
                                value={value || false}
                                onValueChange={onChange}
                                trackColor={{ false: '#ccc', true: '#2586D9' }}
                            />
                            <Text className="ml-3 flex-1 text-sm text-gray-700">
                                Aceito os{' '}
                                <Text className="text-blue-600 font-medium">
                                    Termos de Serviço
                                </Text>
                            </Text>
                        </View>
                    )}
                />
                {errors.acceptTerms && (
                    <Text className="text-red-500 text-sm">{String(errors.acceptTerms.message)}</Text>
                )}

                <Controller
                    control={control}
                    name="acceptPrivacyPolicy"
                    rules={{ required: 'Deves aceitar a política de privacidade' }}
                    render={({ field: { onChange, value } }) => (
                        <View className="flex-row items-center">
                            <Switch
                                value={value || false}
                                onValueChange={onChange}
                                trackColor={{ false: '#ccc', true: '#2586D9' }}
                            />
                            <Text className="ml-3 flex-1 text-sm text-gray-700">
                                Aceito a{' '}
                                <Text className="text-blue-600 font-medium">
                                    Política de Privacidade
                                </Text>
                            </Text>
                        </View>
                    )}
                />
                {errors.acceptPrivacyPolicy && (
                    <Text className="text-red-500 text-sm">{String(errors.acceptPrivacyPolicy.message)}</Text>
                )}
            </View>
        </>
    );
}