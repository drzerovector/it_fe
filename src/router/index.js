import { createRouter, createWebHistory } from 'vue-router'

import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Note from "../pages/Note.vue";
import EditPage from "@/pages/EditPage.vue";
import Menu from "@/components/Menu.vue";
import topbar from "@/components/topbar.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/note',
        name: 'Note',
        component: Note
    },
    {
        path: '/menu',
        name: 'menu',
        component: Menu
    },
    {
        path: '/topbar',
        name: 'topbar',
        component: topbar
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
