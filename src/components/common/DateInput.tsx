import React from 'react';
import { Text, TextInput, View } from 'react-native';

interface DateInputProps {
    value: string;
    onChange: (date: string) => void;
    placeholder?: string;
    error?: string;
    className?: string;
}

export default function DateInput({ 
    value, 
    onChange, 
    placeholder = "DD/MM/AAAA", 
    error, 
    className = "" 
}: DateInputProps) {
    
    const formatDateInput = (text: string) => {
        // Remove todos os caracteres que não são números
        let numbers = text.replace(/\D/g, '');
        
        // Limita a 8 dígitos (DDMMAAAA)
        numbers = numbers.substring(0, 8);
        
        // Adiciona as barras automaticamente
        if (numbers.length >= 2) {
            numbers = numbers.substring(0, 2) + '/' + numbers.substring(2);
        }
        if (numbers.length >= 5) {
            numbers = numbers.substring(0, 5) + '/' + numbers.substring(5);
        }
        
        return numbers;
    };

    const handleChange = (text: string) => {
        const formatted = formatDateInput(text);
        onChange(formatted);
    };

    return (
        <View className={className}>
            <TextInput
                value={value}
                onChangeText={handleChange}
                placeholder={placeholder}
                placeholderTextColor="#999"
                keyboardType="numeric"
                maxLength={10}
                className={`bg-white rounded-lg border px-4 py-3 text-gray-800 ${
                    error ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            
            {error && (
                <Text className="text-red-500 text-sm mt-1 ml-1">{error}</Text>
            )}
        </View>
    );
}