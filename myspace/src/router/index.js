import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserListView from '../views/UserListView.vue'
import UserProfileView from '../views/UserProfileView.vue'
import LoginView from '../views/LoginView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import RegisterView from '../views/RegisterView.vue'
import ChessView from '../views/ChessView.vue'
import ChessListView from '../views/ChessListView.vue'
import FindKeyView from '../views/FindKeyView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/userList/',
    name: 'userlist',
    component: UserListView
  },
  {
    path: '/userprofile/:userId/',
    name: 'userprofile',
    component: UserProfileView
  },
  {
    path: '/login/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register/',
    name: 'register',
    component: RegisterView
  },
  {
    path:'/chess',
    name:'chess',
    component: ChessView
  },
  {
    path:'/chesslist',
    name:'chesslist',
    component: ChessListView
  },
  {
    path:'/findkey',
    name:'findkey',
    component: FindKeyView
  },
  {
    path: '/404/',
    name: '404',
    component: NotFoundView
  },
  {
    path:'/:catchAll(.*)',
    redirect:'/404/',
  }
 
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
