export const ProgressBar = (props) => {
    //debugger
    const containerStyles = {
        height: '100%',
        width: '100%',
        backgroundColor: '#e0e0de',
    }

    const fillerStyles = {
        height: '100%',
        width: `${props.data.charge}%`,
        backgroundColor:
            props.data.charge <= 30
                ? 'red'
                : props.data.charge > 30 && props.data.charge <= 40
                ? 'yellow'
                : 'green',
        borderRadius: 'inherit',
        textAlign: 'right',
        paddingBottom: '20px',
    }

    const labelStyles = {
        padding: 5,
        color:
            props.data.charge <= 30
                ? 'white'
                : props.data.charge > 30 && props.data.charge <= 40
                ? 'black'
                : 'white',
        fontWeight: 'bold',
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${props.data.charge}%`}</span>
            </div>
        </div>
    )
}
