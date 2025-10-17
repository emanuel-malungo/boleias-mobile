import React from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface Option {
    label: string;
    value: string;
}

interface SelectProps {
    value?: string;
    onChange: (value: string) => void;
    options: Option[];
    placeholder?: string;
    error?: string;
    className?: string;
}

export default function Select({ 
    value, 
    onChange, 
    options, 
    placeholder = "Seleciona uma opção", 
    error, 
    className = "" 
}: SelectProps) {
    const [isVisible, setIsVisible] = React.useState(false);

    const selectedOption = options.find(option => option.value === value);

    const handleSelect = (optionValue: string) => {
        onChange(optionValue);
        setIsVisible(false);
    };

    return (
        <View className={className}>
            <TouchableOpacity
                onPress={() => setIsVisible(true)}
                className={`bg-white rounded-lg border px-4 py-3 flex-row justify-between items-center ${
                    error ? 'border-red-500' : 'border-gray-300'
                }`}
            >
                <Text className={selectedOption ? 'text-gray-800' : 'text-gray-400'}>
                    {selectedOption ? selectedOption.label : placeholder}
                </Text>
                <Text className="text-gray-400">▼</Text>
            </TouchableOpacity>
            
            {error && (
                <Text className="text-red-500 text-sm mt-1 ml-1">{error}</Text>
            )}

            <Modal
                visible={isVisible}
                transparent
                animationType="fade"
                onRequestClose={() => setIsVisible(false)}
            >
                <View className="flex-1 bg-black/50 justify-center px-4">
                    <View className="bg-white rounded-lg max-h-80">
                        <View className="p-4 border-b border-gray-200">
                            <Text className="text-lg font-semibold text-center">
                                Seleciona uma opção
                            </Text>
                        </View>
                        
                        <ScrollView className="max-h-64">
                            {options.map((option) => (
                                <TouchableOpacity
                                    key={option.value}
                                    onPress={() => handleSelect(option.value)}
                                    className={`p-4 border-b border-gray-100 ${
                                        option.value === value ? 'bg-blue-50' : ''
                                    }`}
                                >
                                    <Text className={`text-base ${
                                        option.value === value ? 'text-blue-600 font-semibold' : 'text-gray-800'
                                    }`}>
                                        {option.label}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                        
                        <TouchableOpacity
                            onPress={() => setIsVisible(false)}
                            className="p-4 border-t border-gray-200"
                        >
                            <Text className="text-center text-gray-600 font-medium">
                                Cancelar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}