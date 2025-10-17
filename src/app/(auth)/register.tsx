import { router } from "expo-router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
    ImageBackground,
    Image
} from "react-native";
import icon from "@/assets/images/icon.png";
import Button from "../../components/common/Button";
import Step1 from "../../components/register/Step1";
import Step2 from "../../components/register/Step2";
import background from "@/assets/images/backgroud-auth.png";
import Step3Motorista from "../../components/register/Step3Motorista";
import Step3Passageiro from "../../components/register/Step3Passageiro";
import Step4 from "../../components/register/Step4";

type UserType = 'passageiro' | 'motorista' | null;

interface RegisterFormData {
    // Step 1
    userType: UserType;
    fullName: string;
    email: string;
    phone: string;

    // Step 2
    birthDate: string;
    gender: string;
    city: string;

    // Step 3 - Motorista
    licenseNumber?: string;
    carModel?: string;
    carColor?: string;
    carPlate?: string;
    seats?: number;

    // Step 3 - Passageiro
    emergencyContact?: string;
    emergencyContactName?: string;

    // Step 4
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
    acceptPrivacyPolicy: boolean;
}

export default function RegisterPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [userType, setUserType] = useState<UserType>(null);
    const [formData, setFormData] = useState<Partial<RegisterFormData>>({});

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
        watch
    } = useForm({
        mode: 'onChange'
    });

    const watchedUserType = watch('userType');

    React.useEffect(() => {
        if (watchedUserType && watchedUserType !== userType) {
            setUserType(watchedUserType as UserType);
        }
    }, [watchedUserType, userType]);

    const handleNext = (data: any) => {
        const newFormData = { ...formData, ...data };
        setFormData(newFormData);

        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
            reset(newFormData);
        } else {
            // Submeter dados finais
            console.log('Dados finais:', newFormData);
            // Aqui você pode integrar com a API de registro
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            reset(formData);
        }
    };

    const getStepTitle = () => {
        switch (currentStep) {
            case 1: return "Informações Básicas";
            case 2: return "Dados Pessoais";
            case 3: return userType === 'motorista' ? "Dados do Veículo" : "Contacto de Emergência";
            case 4: return "Segurança e Termos";
            default: return "Registo";
        }
    };

    const getStepDescription = () => {
        switch (currentStep) {
            case 1: return "Escolhe o tipo de conta e preenche\nos teus dados básicos.";
            case 2: return "Conta-nos um pouco mais\nsobre ti.";
            case 3: return userType === 'motorista'
                ? "Precisamos dos dados do teu\nveículo para as boleias."
                : "Para a tua segurança, precisamos\nde um contacto de emergência.";
            case 4: return "Cria uma password segura e\naceita os nossos termos.";
            default: return "Vamos criar a tua conta.";
        }
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1: return <Step1 control={control} errors={errors} />;
            case 2: return <Step2 control={control} errors={errors} />;
            case 3: return userType === 'motorista'
                ? <Step3Motorista control={control} errors={errors} />
                : <Step3Passageiro control={control} errors={errors} />;
            case 4: return <Step4 control={control} errors={errors} />;
            default: return <Step1 control={control} errors={errors} />;
        }
    };

    return (
        <ImageBackground
            source={background}
            className="flex-1"
        >

            <StatusBar barStyle="dark-content" backgroundColor="transparent" />
            <ScrollView className="flex-1">
                <View className="flex-1 items-center justify-center px-6 py-12">
                    {/* Header */}
                    <View className="items-center mb-6">
                        <Image
                            source={icon}
                            className="mb-4"
                        />
                        <Text className="text-2xl font-bold text-center">
                            {getStepTitle()}
                        </Text>
                        <Text className="text-base mt-2 text-center text-gray-600">
                            {getStepDescription()}
                        </Text>
                    </View>

                    {/* Progress Indicator */}
                    <View className="flex-row w-full mb-6">
                        {[1, 2, 3, 4].map((step) => (
                            <View key={step} className="flex-1 flex-row items-center">
                                <View className={`w-8 h-8 rounded-full flex items-center justify-center ${step <= currentStep ? 'bg-blue-500' : 'bg-gray-300'
                                    }`}>
                                    <Text className={`text-sm font-bold ${step <= currentStep ? 'text-white' : 'text-gray-500'
                                        }`}>
                                        {step}
                                    </Text>
                                </View>
                                {step < 4 && (
                                    <View className={`flex-1 h-0.5 mx-2 ${step < currentStep ? 'bg-blue-500' : 'bg-gray-300'
                                        }`} />
                                )}
                            </View>
                        ))}
                    </View>

                    {/* Form Content */}
                    <View className="w-full">
                        {renderStepContent()}

                        {/* Buttons */}
                        <View className="flex-row mt-8 space-x-4">
                            {currentStep > 1 && (
                                <Button
                                    title="Anterior"
                                    onPress={handlePrevious}
                                    className="flex-1 bg-gray-300 mr-2"
                                    variant="secondary"
                                />
                            )}

                            <Button
                                title={currentStep === 4 ? "Criar Conta" : "Próximo"}
                                onPress={handleSubmit(handleNext)}
                                className={currentStep === 1 ? "w-full" : "flex-1 ml-2"}
                            />
                        </View>

                        {/* Login Link */}
                        {/* <View className="mt-6 flex-row justify-center">
                            <TouchableOpacity onPress={() => router.push('/(auth)')}>
                                <Text className="text-sm text-gray-500">
                                    Já tens conta?{' '}
                                    <Text className="text-[#2586D9] font-bold">
                                        Inicia sessão
                                    </Text>
                                </Text>
                            </TouchableOpacity>
                        </View> */}
                    </View>
                </View>
            </ScrollView>

        </ImageBackground>
    );
}   