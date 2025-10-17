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

export const registerSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'O nome deve ter pelo menos 2 caracteres.')
        .required('O nome é obrigatório.'),
    email: Yup.string()
        .email('Por favor, insere um email válido.')
        .required('O email é obrigatório.'),
    password: Yup.string()
        .min(6, 'A password deve ter pelo menos 6 caracteres.')
        .required('A password é obrigatória.'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'As passwords devem coincidir.')
        .required('Confirmação de password é obrigatória.'),
});