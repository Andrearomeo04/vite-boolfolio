import { reactive } from "vue";

export const store = reactive({
    baseUrl: 'http://http://127.0.0.1:8000/api',
    menuItems: [
        {
            name: 'home',
            label: 'home'
        },
        {
            name: 'portfolio',
            label: 'portfolio'
        }
    ]
})