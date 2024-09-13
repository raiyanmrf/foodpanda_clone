import React from 'react'
import { citiesArray } from '../../../public/data/cities'

const Cities = () => {
  return (
    <section className="cities">
        <div className="cities-title">
            <h1>
            Find us in these cities and many more!
            </h1>

            
        </div>

        <div className="cities-grid">
            {citiesArray.map(city=>{
              return ( <div key={city.id} className="cities-grid-item">
                    <img src={city.image} alt={city.name} className="city-grid-item-img" />
                </div>)
            })}
        </div>
    </section>
  )
}

export default Cities