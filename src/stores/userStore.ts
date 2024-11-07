import User from '@/entities/User';
import UserGatewayHttp from '@/infra/gateway/UserGatewayHttp';
import { NAME_TOKEN } from '@/utils/constants';
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const userGateway = new UserGatewayHttp();

export const useUserStore = defineStore('user', () => {
    const EMAIL_VALID = 'wesley.sanches@bling.com.br';

    const me = ref<User>({
        id: 0,
        name: '',
        email: '',
    });

    const token = ref(localStorage.getItem(NAME_TOKEN));

    const isAuthenticated = computed(() => {
        return !!token.value;
    });

    const getMe = async (): Promise<User> => {
        try {
            me.value = await userGateway.getMe();
            return me.value;
        } catch (error) {
            throw new Error('Error');
        }

    }

    const auth = async (email: string, password: string): Promise<User> => {
        if (email !== EMAIL_VALID) {
            throw new Error('Email ou senha inválidos');
        }
    
        try {
            me.value = await userGateway.auth(email, password);
            return me.value;
        } catch (error) {
            throw new Error('Email ou senha inválidos');
        }
    }

    const logout = async (): Promise<boolean> => {
        return await userGateway.logout();
    }

    return {
        me,
        isAuthenticated,
        getMe,
        auth,
        logout
    };
});