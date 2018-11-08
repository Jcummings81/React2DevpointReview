import React from 'react'

const filterLink = (current, text, setFilter) => {
    if (current === text )
    return <span>{text}</span>
    return (
        <span 
        style={styles.link}
        onClick={ () => setFilter(text)}
        >
        {text}
        </span>

    )
}

const Footer = ({ view, setFilter }) => (
    <div>
        { ['All', 'Active', 'Complete'].map( f = filterLink(view, text, setFilter ) ) }

    </div>
)

export default Footer