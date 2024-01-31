import { ReactNode } from 'react'
import styles from './Layout.module.scss'

type LayoutProps = {
    children: ReactNode
}

function Layout({ children }: LayoutProps): JSX.Element {
    return <div className={styles.layout}>{children}</div>
}

export default Layout
