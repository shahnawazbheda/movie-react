import React from 'react';
import data from './Data.json';
import './Home.css';

export default function Home() {
  return (
    <div className="saanu-hub-container">
      <h4 className="alert alert-info text-center py-4 mb-0">
        Welcome to <strong>Saanu Film Nest</strong>
      </h4>

      <div className="scrollable-content mt-3">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5">
            {data.map((item, index) => (
              <div className="col" key={item.Id}>
                <div className="card custom-card" style={{ width: '100%' }}>
                  <img src={item.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.Title}</h5>
                    <p className="card-text">{item.Quality}</p>
                    <p className="card-text">{item.Size}</p>
                    <div className="text-center">
                      <a
                        href={item.DoanloadLink}
                        className="btn btn-secondary btn-lg "
                        role="button"
                        aria-pressed="true"
                       
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

