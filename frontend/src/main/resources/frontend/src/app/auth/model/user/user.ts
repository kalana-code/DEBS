import { Role } from "./role";

export class User {
    userId: string;
    userName: string;
    firstName: string;
    lastName: string;
    role: Role;
    token?: string;
}