export const registerUser = (name, email, password) => {
    return fetch("https://reqres.in/api/register", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
        .then((response) => response.json());
}

export const loginUser = (email, password) => {
    return fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })
}