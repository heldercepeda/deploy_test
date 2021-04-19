import Navbar from './Navbar';
import NewsFeed from './NewsFeed';
import { useState, useEffect } from "react";

function App() {
    const url = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN&Apikey=7c9901f48728cb4cd26b18fb63db81a3c7d7278f955ec56acbb6c7c5bce01477"

    const [data, setData] = useState([]);
    const getData = () => {
        fetch(url
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson.Data)
            });
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div className="container-fluid">
            <Navbar />
            <div className="row">
                <div className="col-md-9"></div>
                <div className="col-md-3">
                    <div className="mt-5">
                        {
                            data && data.length>0 && data.map((item)=>
                            <NewsFeed feedData={item} key={item.id} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
