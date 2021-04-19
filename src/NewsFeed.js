import SimpleDateTime from 'react-simple-timestamp-to-date';
import { useState, useEffect } from "react";

const NewsFeed = () => {

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
        const interval = setInterval(() => {
            getData();
        }, 5*60*1000);
        getData();
        return () => clearInterval(interval);
      }, []);

    return (

        <div>
            {
                data && data.length > 0 && data.map((item) =>
                    <small key={item.id}>
                        <div className="card border-dark mb-3">
                            <a href={item.url} rel="noreferrer noopener" target="_blank" className="text-decoration-none">
                                <div className="row no-gutters">
                                    <div className="col-3 p-3">
                                        <img src={item.imageurl} className="card-img" alt="" />
                                    </div>
                                    <div className="col-9">
                                        <div className="card-body">
                                            <p className="card-title text-dark"><strong>{item.title}</strong></p>
                                            <p className="card-text text-right"><small className="text-muted"><i>{<SimpleDateTime dateSeparator="/" timeSeparator=":" format="YMD">{item.published_on}</SimpleDateTime>}</i></small></p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </small>
                )
            }
        </div>

    );

}

export default NewsFeed;