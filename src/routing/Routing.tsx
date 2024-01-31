import { Routes, Route } from 'react-router-dom'
import {
    Home,
    Catalog,
    Product,
    Favourite,
    Cart,
    Job,
    Contacts,
    Payment,
    Gallery,
    Articles,
    AboutCompany,
    Delivery,
} from 'application/pages'
import { PAGES_LINK } from 'api/end-points'

function Routing() {
    return (
        <Routes>
            <Route element={<Home />} path={PAGES_LINK.home} />
            <Route element={<Catalog />} path={PAGES_LINK.catalog} />
            <Route element={<Product />} path={PAGES_LINK.product} />
            <Route element={<Favourite />} path={PAGES_LINK.favourite} />
            <Route element={<Cart />} path={PAGES_LINK.cart} />
            <Route element={<Job />} path={PAGES_LINK.job} />
            <Route element={<Contacts />} path={PAGES_LINK.contacts} />
            <Route element={<Payment />} path={PAGES_LINK.payment} />
            <Route element={<Gallery />} path={PAGES_LINK.gallery} />
            <Route element={<Articles />} path={PAGES_LINK.articles} />
            <Route element={<AboutCompany />} path={PAGES_LINK.aboutCompany} />
            <Route element={<Delivery />} path={PAGES_LINK.delivery} />
        </Routes>
    )
}

export default Routing
