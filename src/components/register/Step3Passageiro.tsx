import React from 'react';
import { Controller } from 'react-hook-form';
import Input from '../common/Input';

interface Step3PassageiroProps {
    control: any;
    errors: any;
}

export default function Step3Passageiro({ control, errors }: Step3PassageiroProps) {
    return (
        <>
            <Controller
                control={control}
                name="emergencyContactName"
                rules={{ required: 'O nome do contacto de emergência é obrigatório' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder="Nome do contacto de emergência"
                        nameIcon="user"
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        error={errors.emergencyContactName?.message as string}
                        className="mt-4"
                    />
                )}
            />

            <Controller
                control={control}
                name="emergencyContact"
                rules={{
                    required: 'O contacto de emergência é obrigatório',
                    pattern: { value: /^[0-9]{9}$/, message: 'Deve ter 9 dígitos' }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder="912345678"
                        nameIcon="phone"
                        keyboardType="phone-pad"
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        error={errors.emergencyContact?.message as string}
                        className="mt-4"
                    />
                )}
            />
        </>
    );
}