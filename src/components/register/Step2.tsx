import React from 'react';
import { Controller } from 'react-hook-form';
import DateInput from '../common/DateInput';
import Input from '../common/Input';
import Select from '../common/Select';

interface Step2Props {
    control: any;
    errors: any;
}

export default function Step2({ control, errors }: Step2Props) {
    return (
        <>
            <Controller
                control={control}
                name="birthDate"
                rules={{ required: 'A data de nascimento é obrigatória' }}
                render={({ field: { onChange, value } }) => (
                    <DateInput
                        placeholder="DD/MM/AAAA"
                        onChange={onChange}
                        value={value || ''}
                        error={errors.birthDate?.message as string}
                        className="mt-4"
                    />
                )}
            />

            <Controller
                control={control}
                name="gender"
                rules={{ required: 'O género é obrigatório' }}
                render={({ field: { onChange, value } }) => (
                    <Select
                        options={[
                            { label: 'Masculino', value: 'masculino' },
                            { label: 'Feminino', value: 'feminino' },
                            { label: 'Outro', value: 'outro' }
                        ]}
                        onChange={onChange}
                        value={value}
                        placeholder="Seleciona o teu género"
                        error={errors.gender?.message as string}
                        className="mt-4"
                    />
                )}
            />

            <Controller
                control={control}
                name="city"
                rules={{ required: 'A cidade é obrigatória' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder="Lisboa"
                        nameIcon="map-pin"
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        error={errors.city?.message as string}
                        className="mt-4"
                    />
                )}
            />
        </>
    );
}