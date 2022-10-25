import './scss/layout/App.scss';
import { ContainerHeader } from './components/layout/ContainerHeader';
import { NotificationsBody } from './components/layout/NotificationsBody';

function App() {
    return (
        <main id='primary-content' className='d-grd'>
            <section className='NotificationsContainer d-grd'>
                <ContainerHeader />
                <NotificationsBody />
            </section>
        </main>
    );
}

export default App;
