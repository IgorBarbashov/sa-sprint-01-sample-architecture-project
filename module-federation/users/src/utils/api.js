class Api {
    constructor({ address }) {
        this._address = address;
    }

    login(username, password) {
        return 'fake-token';
    }

    getProfile() {
        return {
            userName: 'Студент',
        };
    }
}

const api = new Api({
    address: 'https://nomoreparties.co',
});

export default api;
