import React from 'react'

class Market extends React.Component {
    state = { coins: [], loading: true }

    render() {
        const {coins, loading } = this.state

        if (loading) {
            return <span>Fetching Data...</span>
        } else {
            return (
                <ol>
                    { coins.map( c => 
                    <li key={c.id}>{c.symbol} - ${c.price_usd}</li>
                        )
                    }
                </ol>
            )
        }
    }

}

export default Market