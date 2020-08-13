import RickAndMortyApi from '../../pages/rick-and-morty-api'
import StarsWarsApi from '../../pages/stars-wars-api'


export const routes = [
    { path: "/", title: "Rick and Morty", component: RickAndMortyApi },
    { path: "/page-two", title: "Stars Wars", component: StarsWarsApi }
]