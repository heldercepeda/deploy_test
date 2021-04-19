import Navbar from './Navbar';
import NewsFeed from './NewsFeed';

function App() {

    return (
        <div className="container mt-3">
            <Navbar />
            <div className="row">
                <div className="col-md-8">
                </div>
                <div className="col-md-4">
                    <div className="mt-3">
                        <NewsFeed />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
