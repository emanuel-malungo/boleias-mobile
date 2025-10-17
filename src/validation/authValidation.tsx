import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Por favor, insere um email válido.')
        .required('O email é obrigatório.'),
    password: Yup.string()
        .min(6, 'A password deve ter pelo menos 6 caracteres.')
        .required('A password é obrigatória.'),
});

export const forgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .email('Por favor, insere um email válido.')
        .required('O email é obrigatório.'),
});

// Esquema para o primeiro step - informações básicas
export const step1Schema = Yup.object().shape({
    userType: Yup.string()
        .oneOf(['passageiro', 'motorista'], 'Tipo de usuário inválido.')
        .required('Seleciona o tipo de conta.'),
    fullName: Yup.string()
        .min(3, 'O nome completo deve ter pelo menos 3 caracteres.')
        .max(50, 'O nome completo deve ter no máximo 50 caracteres.')
        .matches(/^[a-zA-ZÀ-ÿ\s]+$/, 'O nome deve conter apenas letras.')
        .required('O nome completo é obrigatório.'),
    email: Yup.string()
        .email('Por favor, insere um email válido.')
        .required('O email é obrigatório.'),
    phone: Yup.string()
        .matches(/^[0-9]{9}$/, 'O telefone deve ter 9 dígitos.')
        .required('O número de telefone é obrigatório.'),
});

// Esquema para o segundo step - informações pessoais
export const step2Schema = Yup.object().shape({
    birthDate: Yup.date()
        .max(new Date(Date.now() - 18 * 365 * 24 * 60 * 60 * 1000), 'Deves ter pelo menos 18 anos.')
        .required('A data de nascimento é obrigatória.'),
    gender: Yup.string()
        .oneOf(['masculino', 'feminino', 'outro'], 'Género inválido.')
        .required('O género é obrigatório.'),
    city: Yup.string()
        .min(2, 'A cidade deve ter pelo menos 2 caracteres.')
        .required('A cidade é obrigatória.'),
});

// Esquema para o terceiro step - informações específicas do motorista
export const step3MotoristaSchema = Yup.object().shape({
    licenseNumber: Yup.string()
        .min(5, 'O número da carta deve ter pelo menos 5 caracteres.')
        .required('O número da carta de condução é obrigatório.'),
    carModel: Yup.string()
        .min(2, 'O modelo do carro deve ter pelo menos 2 caracteres.')
        .required('O modelo do carro é obrigatório.'),
    carColor: Yup.string()
        .min(2, 'A cor do carro deve ter pelo menos 2 caracteres.')
        .required('A cor do carro é obrigatória.'),
    carPlate: Yup.string()
        .matches(/^[A-Z0-9-]{6,8}$/, 'Matrícula inválida.')
        .required('A matrícula do carro é obrigatória.'),
    seats: Yup.number()
        .min(1, 'Deve ter pelo menos 1 lugar disponível.')
        .max(8, 'Máximo de 8 lugares disponíveis.')
        .required('O número de lugares é obrigatório.'),
});

// Esquema para o terceiro step - informações específicas do passageiro
export const step3PassageiroSchema = Yup.object().shape({
    emergencyContact: Yup.string()
        .matches(/^[0-9]{9}$/, 'O contacto de emergência deve ter 9 dígitos.')
        .required('O contacto de emergência é obrigatório.'),
    emergencyContactName: Yup.string()
        .min(3, 'O nome do contacto de emergência deve ter pelo menos 3 caracteres.')
        .required('O nome do contacto de emergência é obrigatório.'),
});

// Esquema para o quarto step - senha e termos
export const step4Schema = Yup.object().shape({
    password: Yup.string()
        .min(8, 'A password deve ter pelo menos 8 caracteres.')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'A password deve conter pelo menos uma letra minúscula, uma maiúscula e um número.')
        .required('A password é obrigatória.'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'As passwords devem coincidir.')
        .required('Confirmação de password é obrigatória.'),
    acceptTerms: Yup.boolean()
        .oneOf([true], 'Deves aceitar os termos de serviço.')
        .required('Deves aceitar os termos de serviço.'),
    acceptPrivacyPolicy: Yup.boolean()
        .oneOf([true], 'Deves aceitar a política de privacidade.')
        .required('Deves aceitar a política de privacidade.'),
});

// Esquema completo para o registro
export const registerSchema = Yup.object().shape({
    userType: Yup.string()
        .oneOf(['passageiro', 'motorista'], 'Tipo de usuário inválido.')
        .required('Seleciona o tipo de conta.'),
    fullName: Yup.string()
        .min(3, 'O nome completo deve ter pelo menos 3 caracteres.')
        .max(50, 'O nome completo deve ter no máximo 50 caracteres.')
        .matches(/^[a-zA-ZÀ-ÿ\s]+$/, 'O nome deve conter apenas letras.')
        .required('O nome completo é obrigatório.'),
    email: Yup.string()
        .email('Por favor, insere um email válido.')
        .required('O email é obrigatório.'),
    phone: Yup.string()
        .matches(/^[0-9]{9}$/, 'O telefone deve ter 9 dígitos.')
        .required('O número de telefone é obrigatório.'),
    birthDate: Yup.date()
        .max(new Date(Date.now() - 18 * 365 * 24 * 60 * 60 * 1000), 'Deves ter pelo menos 18 anos.')
        .required('A data de nascimento é obrigatória.'),
    gender: Yup.string()
        .oneOf(['masculino', 'feminino', 'outro'], 'Género inválido.')
        .required('O género é obrigatório.'),
    city: Yup.string()
        .min(2, 'A cidade deve ter pelo menos 2 caracteres.')
        .required('A cidade é obrigatória.'),
    password: Yup.string()
        .min(8, 'A password deve ter pelo menos 8 caracteres.')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'A password deve conter pelo menos uma letra minúscula, uma maiúscula e um número.')
        .required('A password é obrigatória.'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'As passwords devem coincidir.')
        .required('Confirmação de password é obrigatória.'),
    acceptTerms: Yup.boolean()
        .oneOf([true], 'Deves aceitar os termos de serviço.')
        .required('Deves aceitar os termos de serviço.'),
    acceptPrivacyPolicy: Yup.boolean()
        .oneOf([true], 'Deves aceitar a política de privacidade.')
        .required('Deves aceitar a política de privacidade.'),
    // Campos específicos para motorista
    licenseNumber: Yup.string().when('userType', {
        is: 'motorista',
        then: (schema) => schema
            .min(5, 'O número da carta deve ter pelo menos 5 caracteres.')
            .required('O número da carta de condução é obrigatório.'),
        otherwise: (schema) => schema.nullable(),
    }),
    carModel: Yup.string().when('userType', {
        is: 'motorista',
        then: (schema) => schema
            .min(2, 'O modelo do carro deve ter pelo menos 2 caracteres.')
            .required('O modelo do carro é obrigatório.'),
        otherwise: (schema) => schema.nullable(),
    }),
    carColor: Yup.string().when('userType', {
        is: 'motorista',
        then: (schema) => schema
            .min(2, 'A cor do carro deve ter pelo menos 2 caracteres.')
            .required('A cor do carro é obrigatória.'),
        otherwise: (schema) => schema.nullable(),
    }),
    carPlate: Yup.string().when('userType', {
        is: 'motorista',
        then: (schema) => schema
            .matches(/^[A-Z0-9-]{6,8}$/, 'Matrícula inválida.')
            .required('A matrícula do carro é obrigatória.'),
        otherwise: (schema) => schema.nullable(),
    }),
    seats: Yup.number().when('userType', {
        is: 'motorista',
        then: (schema) => schema
            .min(1, 'Deve ter pelo menos 1 lugar disponível.')
            .max(8, 'Máximo de 8 lugares disponíveis.')
            .required('O número de lugares é obrigatório.'),
        otherwise: (schema) => schema.nullable(),
    }),
    // Campos específicos para passageiro
    emergencyContact: Yup.string().when('userType', {
        is: 'passageiro',
        then: (schema) => schema
            .matches(/^[0-9]{9}$/, 'O contacto de emergência deve ter 9 dígitos.')
            .required('O contacto de emergência é obrigatório.'),
        otherwise: (schema) => schema.nullable(),
    }),
    emergencyContactName: Yup.string().when('userType', {
        is: 'passageiro',
        then: (schema) => schema
            .min(3, 'O nome do contacto de emergência deve ter pelo menos 3 caracteres.')
            .required('O nome do contacto de emergência é obrigatório.'),
        otherwise: (schema) => schema.nullable(),
    }),
});