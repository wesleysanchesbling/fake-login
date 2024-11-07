import User from "../../entities/User";
import { NAME_TOKEN } from "../../utils/constants";
import httpAdpter from "../http/HttpClientAdapter";

interface UserData {
    data: {
        id: number;
        name: string;
        email: string;
    };
}

const token = localStorage.getItem(NAME_TOKEN);

export default class UserGatewayHttp {
    async getMe(): Promise<User> {
        if (!token) {
            throw new Error("Token not found");
        }

        const { id, name, email } = await new Promise<User>((resolve) => {
            resolve({
                    id: 1,
                    name: "Wesley Sanches",
                    email: "wesley@mail.com",
            })
        });
        return new User(id, name, email);
    }

    async auth( email:string, password:string): Promise<User> {

        type USER_AUTH = {
            token: string;
        } & User

        const res = await new Promise<USER_AUTH>((resolve) => {
            resolve({
                    id: 1,
                    name: "Wesley Sanches",
                    email: "wesley@mail.com",
                    token: "ASDFGGAFDAS0021123151654/asdfasfd"
            })
        });

        localStorage.setItem(NAME_TOKEN, res.token);
        return new User(res.id, res.name, res.email);
    }

    async logout (): Promise<boolean> {
        return await new Promise((resolve) => {
            localStorage.removeItem(NAME_TOKEN);
            resolve(true);
        });
    }
}