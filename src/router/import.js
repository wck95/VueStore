const Page401 = () => import ('#common/errors/401')
const Page404 = () => import ('#common/errors/404')
const Login = () => import ('#common/login')
const Home = () => import ('@/views/homePage/home')
const Category = () => import ('@/views/categoryPage/category')
const Cart = () => import ('@/views/cartPage/cart')
const Profile = () => import ('@/views/profilePage/profile')

export {
  Page401, Page404, Login, Home, Cart, Category, Profile,  
}