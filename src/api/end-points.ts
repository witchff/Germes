const PAGES_LINK = {
    home: '/',
    catalog: '/catalog',
    product: '/product/:query',
    favourite: '/favourite',
    cart: '/cart',
    job: '/job',
    contacts: '/contacts',
    payment: '/payment',
    gallery: '/gallery',
    articles: '/articles',
    aboutCompany: '/about-company',
    delivery: '/delivery',
}

const CATEGORY_LINK = {
    wall: '?category=wall',
    facade: '?category=facade',
    building_blocks: '?category=building-blocks',
    finishing: '?category=finishing',
    dry_mixes: '?category=dry-mixes',
    landscaping: '?category=landscaping',
    varnished_colorful: '?category=varnished-colorful',
    other: '?category=other',
    sale: '?category=sale',
}

export { PAGES_LINK, CATEGORY_LINK }
