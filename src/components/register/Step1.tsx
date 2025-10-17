import React from 'react';
import { Controller } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';
import Input from '../common/Input';

interface Step1Props {
    control: any;
    errors: any;
}

export default function Step1({ control, errors }: Step1Props) {
    return (
        <>
            {/* Seletor de Tipo de Usuário */}
            <View className="mt-6">
                <Text className="text-base font-medium mb-3 text-gray-700">Tipo de conta</Text>
                <View className="flex-row w-full">
                    <Controller
                        control={control}
                        name="userType"
                        rules={{ required: 'Seleciona o tipo de conta' }}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <TouchableOpacity
                                    onPress={() => onChange('passageiro')}
                                    className={`flex-1 mr-2 py-3 px-4 rounded-lg border-2 ${
                                        value === 'passageiro'
                                            ? 'border-blue-500 bg-blue-50'
                                            : 'border-gray-300 bg-white'
                                    }`}
                                >
                                    <Text className={`text-center font-medium ${
                                        value === 'passageiro' ? 'text-blue-600' : 'text-gray-600'
                                    }`}>
                                        👤 Passageiro
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => onChange('motorista')}
                                    className={`flex-1 ml-2 py-3 px-4 rounded-lg border-2 ${
                                        value === 'motorista'
                                            ? 'border-blue-500 bg-blue-50'
                                            : 'border-gray-300 bg-white'
                                    }`}
                                >
                                    <Text className={`text-center font-medium ${
                                        value === 'motorista' ? 'text-blue-600' : 'text-gray-600'
                                    }`}>
                                        🚗 Motorista
                                    </Text>
                                </TouchableOpacity>
                            </>
                        )}
                    />
                </View>
                {errors.userType && (
                    <Text className="text-red-500 text-sm mt-1">{String(errors.userType.message)}</Text>
                )}
            </View>

            <Controller
                control={control}
                name="fullName"
                rules={{
                    required: 'O nome completo é obrigatório',
                    minLength: { value: 3, message: 'Mínimo 3 caracteres' }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder="João Silva Santos"
                        nameIcon="user"
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        error={errors.fullName?.message as string}
                        className="mt-4"
                    />
                )}
            />

            <Controller
                control={control}
                name="email"
                rules={{
                    required: 'O email é obrigatório',
                    pattern: { value: /\S+@\S+\.\S+/, message: 'Email inválido' }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder="joao@exemplo.com"
                        nameIcon="mail"
                        keyboardType="email-address"
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        error={errors.email?.message as string}
                        className="mt-4"
                    />
                )}
            />

            <Controller
                control={control}
                name="phone"
                rules={{
                    required: 'O telefone é obrigatório',
                    pattern: { value: /^[0-9]{9}$/, message: 'Telefone deve ter 9 dígitos' }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder="912345678"
                        nameIcon="phone"
                        keyboardType="phone-pad"
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        error={errors.phone?.message as string}
                        className="mt-4"
                    />
                )}
            />
        </>
    );
}