import Routing from 'routing/Routing'
import Layout from 'shared/ui/layout/Layout'
import styles from './App.module.scss'

function App() {
    return (
        <div className={styles.app}>
            <Layout>
                <main className={styles.main}>
                    <Routing />
                </main>
            </Layout>
        </div>
    )
}

export default App
