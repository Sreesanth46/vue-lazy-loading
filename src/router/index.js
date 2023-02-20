import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    // { path: '/brazil', name: 'brazil', component: ()=>import(/* webpackChunkName: brazil */ "@/views/Brazil.vue") },
    // { path: '/hawaii', name: 'hawaii', component: ()=>import("@/views/Hawaii.vue") },
    // { path: '/jamaica', name: 'jamaica', component: ()=>import("@/views/Jamaica.vue") },
    // { path: '/panama', name: 'panama', component: ()=>import("@/views/Panama.vue") },
    { 
        path: '/destintion/:id/:slug', 
        name: 'destination.show', 
        component: ()=>import("@/views/DestinationShow.vue"),
        props: route=> ({...route.params, id: parseInt(route.params.id)}),
        children: [
            {
                path: ':experienceSlug',
                name: 'experience.show', 
                component: ()=>import("@/views/ExperienceShow.vue"),
                props: route=> ({...route.params, id: parseInt(route.params.id)})
            }
        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router