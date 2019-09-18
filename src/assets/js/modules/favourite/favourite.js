import {favouriteTpl} from './tpl/favouriteTpl'
import {favouriteItemTpl} from './tpl/favouriteItemTpl'

const locators = {
    trigger: '.js-favourite',
    activeClass: 'is-favourite'
}

const model = {
    localStorage: {
        key: 'favourites'
    }
}

const saveData = data => {
    setLocalStorage([...readData(), data])
}

const removeData = el => {
    setLocalStorage(readData().filter(data => data.id !== el.id))
}

const setLocalStorage = data => {
    localStorage.setItem(model.localStorage.key, JSON.stringify(data))
}

const checkActiveFavourites = () => {
    const storedData = [...readData()]
    storedData.filter((entry) => document.querySelector(`[data-id="${entry.id}"]`)
    ).forEach(entry => {
        document.querySelector(`[data-id="${entry.id}"]`).classList.add(locators.activeClass)
    })
}

const getLocalStorage = () => localStorage.getItem(model.localStorage.key) || '[]'

const readData = () => JSON.parse(getLocalStorage())

const renderFavourites = () => {
    let favouritesItems = ''
    const data = readData()
    for (let i = 0; i < data.length; i++) {
        favouritesItems += favouriteItemTpl(data[i])
    }
    const container = document.querySelectorAll('[data-favourite-container]')
    container.forEach(el => {
        el.innerHTML = favouriteTpl(favouritesItems)
    })
}

const isFavourite = el => el.classList.contains(locators.activeClass)

const extractData = dataset => {
    return {
        id: dataset.id,
        content: dataset.content
    }
}

const toggleFavouriteClass = (el, isFavourite) => {
    el.classList.toggle(locators.activeClass, !isFavourite)
}

const toggleFavourite = ({target}) => {
    const el = target
    const elData = extractData(el.dataset)
    const isFav = isFavourite(el)

    if (isFav) {
        removeData(elData)
    } else {
        saveData(elData)
    }
    toggleFavouriteClass(el, isFav)
    renderFavourites()
}

const bindEvents = elements => {
    checkActiveFavourites()
    renderFavourites()
    elements.forEach(el => {
        el.addEventListener('click', toggleFavourite)
    })
}

const init = () => {
    bindEvents(document.querySelectorAll(locators.trigger))
}

export default init
