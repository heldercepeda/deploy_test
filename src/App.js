import MainFeed from './MainFeed';
import Navbar from './Navbar';
import NewsFeed from './NewsFeed';

function App() {

    return (
        <div className="container mt-3">
            <Navbar />
            <div className="row no-gutters">
                <div className="col-md-8 mr-1">
                    <div className="p-2 bg-dark mt-1 rounded-lg">
                        <MainFeed />
                    </div>
                </div>
                <div className="col-md">
                    <div className="p-2 bg-dark mt-1 rounded-lg">
                        <NewsFeed />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
