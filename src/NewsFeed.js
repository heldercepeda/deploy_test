import SimpleDateTime  from 'react-simple-timestamp-to-date';

const NewsFeed = ({feedData}) => {

    return (

            <div className="card mb-3">
                <a href={feedData.url} rel="noreferrer noopener" target="_blank" className="text-decoration-none">
                    <div className="row no-gutters">
                        <div className="col-3 p-3">
                            <img src={feedData.imageurl} className="card-img" alt="" />
                        </div>
                        <div className="col-9">
                            <div className="card-body">
                                <h5 className="card-title text-dark">{feedData.title}</h5>
                                <p className="card-text"><small className="text-muted">Publish on: {<SimpleDateTime dateSeparator="/" timeSeparator=":" format="YMD">{feedData.published_on}</SimpleDateTime>}</small></p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

    );

}

export default NewsFeed;