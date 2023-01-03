import './ChartBar.scss'

function ChartBar(props) {
    let barFillPerc = '0%';

    if (props.maxValue > 0)
        barFillPerc = Math.round(props.value / props.maxValue * 100) + '%';

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{ height: barFillPerc }}></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    );
}

export default ChartBar;