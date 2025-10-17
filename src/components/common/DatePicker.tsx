import { Feather } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';

interface DatePickerProps {
    value?: Date;
    onChange: (date: Date) => void;
    placeholder?: string;
    error?: string;
    className?: string;
}

export default function DatePicker({
    value,
    onChange,
    placeholder = "Seleciona a data",
    error,
    className = ""
}: DatePickerProps) {
    const [showPicker, setShowPicker] = useState(false);

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('pt-PT');
    };

    const handleDateChange = (event: any, selectedDate?: Date) => {
        setShowPicker(Platform.OS === 'ios');
        if (selectedDate) {
            onChange(selectedDate);
        }
    };

    return (
        <View className={className}>
            <TouchableOpacity
                onPress={() => setShowPicker(true)}
                className={`flex-row items-center bg-white rounded-lg border px-4 py-3 ${error ? 'border-red-500' : 'border-gray-300'
                    }`}
            >
                <Feather name="calendar" size={20} color="#666" className="mr-3" />
                <Text className={`flex-1 ${value ? 'text-gray-800' : 'text-gray-400'}`}>
                    {value ? formatDate(value) : placeholder}
                </Text>
            </TouchableOpacity>

            {error && (
                <Text className="text-red-500 text-sm mt-1 ml-1">{error}</Text>
            )}

            {showPicker && (
                <DateTimePicker
                    value={value || new Date()}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                    maximumDate={new Date()}
                />
            )}
        </View>
    );
}