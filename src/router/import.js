const Page401 = () => import ('#common/errors/401')
const Page404 = () => import ('#common/errors/404')
const Home = () => import ('@/views/homePage/home')
const Category = () => import ('@/views/categoryPage/category')
const Cart = () => import ('@/views/cartPage/cart')
const Profile = () => import ('@/views/profilePage/profile')

export {
  Page401, Page404, Home, Category, Cart, Profile,
}