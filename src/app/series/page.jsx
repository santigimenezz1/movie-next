import React from 'react'
import Loading from './loading'
import MapeoSectionSeries from '../../../components/MapeoSectionSeries/MapeoSectionSeries'
import { peticionSeriesEnElAire, peticionSeriesPopulares, peticionSeriesTendencia } from '../../../components/PeticionesFetch/PeticionesFetch'

async function Series() {
    
    const seriesPopulares = await peticionSeriesPopulares()
    const seriesTendencia = await peticionSeriesTendencia()
    const seriesEnElAire = await peticionSeriesEnElAire()
 return (
    <>
    <MapeoSectionSeries  seriesPopulares={seriesPopulares} seriesTendencia={seriesTendencia} seriesEnElAire={seriesEnElAire}/>
    </>
 )
}
export default Series
