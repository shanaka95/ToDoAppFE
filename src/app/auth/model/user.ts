export interface User {
    id: number; // User ID
    token: string; // Login Token
    email: string; // Email Address of the user - Unique
    name: string; // Name of the User
    isAdmin: boolean; // True if user is an admin user
}

export interface NewUser extends User{
    password: string;
    c_password: string;
}
