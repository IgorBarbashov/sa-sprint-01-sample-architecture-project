const storageKey = 'ya-arch-tasks-1';

const sampleData = [
    {
        id: 1,
        title: 'Знакомство с проектом',
        checked: false,
    },
    {
        id: 2,
        title: 'Планирование разделения на микросервисы',
        checked: false,
    },
    {
        id: 3,
        title: 'Создание проектов с использованием Module Federation',
        checked: false,
    },
    {
        id: 4,
        title: 'Перенос контролов из начального проекта',
        checked: false,
    },
    {
        id: 5,
        title: 'Пробный зануск',
        checked: false,
    },
    {
        id: 6,
        title: 'Настройка взаимодействия между компонентами',
        checked: false,
    },
    {
        id: 7,
        title: 'Запуск финального приложения',
        checked: false,
    },
    {
        id: 8,
        title: 'Завершение урока',
        checked: false,
    },
];

class Api {
    constructor({ address }) {
        this._address = address;
        this.initialize();
    }

    initialize() {
        const items = localStorage.getItem(storageKey);

        if (!items) {
            this.reset();
        }
    }

    reset() {
        localStorage.setItem(storageKey, JSON.stringify(sampleData));
    }

    getTasks(token) {
        return JSON.parse(localStorage.getItem(storageKey));
    }

    checkedChanged(token, id, checked) {
        const tasks = JSON.parse(localStorage.getItem(storageKey));
        localStorage.setItem(
            storageKey,
            JSON.stringify(
                tasks.map((x) =>
                    x.id === id
                        ? {
                              id: x.id,
                              title: x.title,
                              checked: checked,
                          }
                        : x,
                ),
            ),
        );
    }
}

const api = new Api({
    address: 'https://nomoreparties.co',
});

export default api;
