import React from 'react';
import { Card, Icon } from 'semantic-ui-react'
import { Grid, Segment } from 'semantic-ui-react'

class Weather extends React.Component {

    state = {
        city: {},
        condition: {},
        temp: {},
        feels: {},
        humidity: {},
        wind: {},
        weather: {}
    }

// weather api key ' ab29d7e108a64196a9112440200412'

    componentDidMount() {     
            fetch('http://api.weatherapi.com/v1/current.json?key=f853f2a7522d4bf68cf13732200412&q=New York City')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    city: data.location.name,
                    condition: data.current.condition,
                    temp: data.current.temp_f,
                    feels: data.current.feelslike_f,
                    humidity: data.current.humidity,
                    wind: data.current.wind_mph,
                    weather: data
                })
            })
        }                    
    
    render() {
        
        return (
        <>{console.log(this.state.condition.icon)}
        <Grid columns={2} divided>
            <Grid.Row stretched>
                <Grid.Column>
                    <Card
                        image={this.state.condition.icon}
                        header={this.state.city}
                        meta={`Currently: ${this.state.temp}F`}
                        description={`Feels Like: ${this.state.feels}F`}
                        
                        />
                </Grid.Column>
                <Grid.Column>
                    <Segment>{`Wind: ${this.state.wind} MPH`}</Segment>
                    <Segment>{`Humidity: ${this.state.humidity}%`}</Segment>
                    <Segment>{`Humidity: ${this.state.humidity}%`}</Segment>
                </Grid.Column>
            </Grid.Row>  
        </Grid>

        
        </>
        )
    }
}

export default Weather;