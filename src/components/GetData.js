import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './GetData.scss'

export default function GetData() {
  const [bikesAvailable, setBikesAvailable] = useState()
  const [bikeStation, setBikeStation] = useState()

  useEffect(() => {
    axios.get('https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=madagascar&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes&refine.name=Madagascar+-+Meuniers')
      .then(response => setBikesAvailable(response.data.records[0].fields.numbikesavailable))

    axios.get('https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=madagascar&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes&refine.name=Madagascar+-+Meuniers')
      .then(response => setBikeStation(response.data.records[0].fields.name))
  })

  return (
    <div className="container">
      <div className="yesOrNoContainer">
        {bikesAvailable === undefined ? ' ' : bikesAvailable > 5 ? 'OUI' : 'NON'}
      </div>
      <div className="stationContainer">{bikesAvailable} vélos disponibles à la station {bikeStation}</div>
    </div>
  )
}
