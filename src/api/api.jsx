const API_URL = import.meta.env.VITE_API_URL;
//const API_URL = 'http://127.0.0.1:8000';

export async function login(username, password) {
    const response = await fetch(`${API_URL}/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            username,
            password,
        }),
    });
    if (!response.ok) {
        throw new Error('Error en la autenticación');
    }
    return response.json();
}
