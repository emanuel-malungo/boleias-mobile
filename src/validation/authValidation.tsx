import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Por favor, insere um email válido.')
        .required('O email é obrigatório.'),
    password: Yup.string()
        .min(6, 'A password deve ter pelo menos 6 caracteres.')
        .required('A password é obrigatória.'),
});