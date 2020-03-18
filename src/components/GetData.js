import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function GetData() {
  const [isThereABike, setIsThereABike] = useState()

  useEffect(() => {
    axios.get('https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=madagascar&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes&refine.name=Madagascar+-+Meuniers')
      .then(response => setIsThereABike(response.data.records[0].fields.numbikesavailable))
  })

  return (
    <div>
      <div>Il y a {isThereABike} vélos disponibles à la station de vélib Madagascar</div>
    </div>
  )
}
