import React from 'react';
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
    const valueArray = props.dataPoints.map((d) => d.value)

    const totalMax = Math.max(...valueArray)

    return (<div className='chart'>
        {props.dataPoints.map((dataPoints) => (
            <ChartBar
                key={dataPoints.label}
                value={dataPoints.value}
                maxValue={totalMax}
                label={dataPoints.label}
            />))}
    </div>
    )
}

export default Chart