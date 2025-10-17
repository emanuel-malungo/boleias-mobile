import React from 'react';
import { Controller } from 'react-hook-form';
import Input from '../common/Input';
import Select from '../common/Select';

interface Step3MotoristaProps {
    control: any;
    errors: any;
}

export default function Step3Motorista({ control, errors }: Step3MotoristaProps) {
    return (
        <>
            <Controller
                control={control}
                name="licenseNumber"
                rules={{ required: 'O número da carta é obrigatório' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder="Número da carta de condução"
                        nameIcon="credit-card"
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        error={errors.licenseNumber?.message as string}
                        className="mt-4"
                    />
                )}
            />

            <Controller
                control={control}
                name="carModel"
                rules={{ required: 'O modelo do carro é obrigatório' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder="Volkswagen Golf"
                        nameIcon="info"
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        error={errors.carModel?.message as string}
                        className="mt-4"
                    />
                )}
            />

            <Controller
                control={control}
                name="carColor"
                rules={{ required: 'A cor do carro é obrigatória' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder="Azul"
                        nameIcon="circle"
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        error={errors.carColor?.message as string}
                        className="mt-4"
                    />
                )}
            />

            <Controller
                control={control}
                name="carPlate"
                rules={{ required: 'A matrícula é obrigatória' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder="XX-XX-XX"
                        nameIcon="hash"
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        error={errors.carPlate?.message as string}
                        className="mt-4"
                    />
                )}
            />

            <Controller
                control={control}
                name="seats"
                rules={{ required: 'O número de lugares é obrigatório' }}
                render={({ field: { onChange, value } }) => (
                    <Select
                        options={[
                            { label: '1 lugar', value: '1' },
                            { label: '2 lugares', value: '2' },
                            { label: '3 lugares', value: '3' },
                            { label: '4 lugares', value: '4' },
                            { label: '5 lugares', value: '5' },
                            { label: '6 lugares', value: '6' },
                            { label: '7 lugares', value: '7' },
                            { label: '8 lugares', value: '8' }
                        ]}
                        onChange={(val) => onChange(parseInt(val))}
                        value={value?.toString()}
                        placeholder="Lugares disponíveis"
                        error={errors.seats?.message as string}
                        className="mt-4"
                    />
                )}
            />
        </>
    );
}