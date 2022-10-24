import './scss/layout/App.scss'; // Styles
/* Components */
import { Notification } from './components/Notification';
import UserMark from './assets/images/avatar-mark-webber.webp';

function App() {
    return (
        <main id='primary-content' className='d-grd'>
            <section className='NotificationsContainer'>
                <div className='ContainerHeader d-flx j-between'>
                    <div className='ContainerTitle d-flx'>
                        <h1 className='Title m-0'>Notifications</h1>
                        <div className='NotificationsCount d-grd'>
                            <span id='Count'>3</span>
                        </div>
                    </div>
                    <button className='MarkNotifications m-0'>
                        Mark all as read
                    </button>
                </div>
                <div className='Notifications d-flx f-column'>
                    <Notification
                        name='Mark Webber'
                        avatar={UserMark}
                        drescription='reacted to your recent post'
                        state={false}
                    />
                </div>
            </section>
        </main>
    );
}

export default App;
