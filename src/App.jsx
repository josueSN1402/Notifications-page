import './scss/layout/App.scss';
import { AppUI } from './AppUI';
import { NotificationProvider } from './components/NotificationContext';

function App() {
    return (
        <NotificationProvider>
            <AppUI />
        </NotificationProvider>
    );
}

export default App;
