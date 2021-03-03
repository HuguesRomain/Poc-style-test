import React from 'react';
import './App.css';
import styled from 'styled-components'
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



const WrapperPageContent = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* min-height: 100vh; */
`

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: grey;
`;

const MapAndList = styled.div`
  display: flex;
  margin-top: 15px;
`;

const List = styled.div`
  background-color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  width: 30%;
`; 

const LeafLetContainer = styled(MapContainer)`
  z-index: 0;
  overflow: hidden;
  border: 1px solid grey;
  width: 70%;
  height: calc(100vh - 300px);
`

const Red = styled.div`
  background-color: red;
  height: 120px;
  width: 1000px;
  margin: 10px 0;
`



const MapComponent = () => {
  return (
    <LeafLetContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </LeafLetContainer>
  )
}

const App = () =>  {
  const [plan, setPlan] = useState(["plan", 'plan'])


  return (
    <div className="App">
      <WrapperPageContent>
        <HeaderContent>
          {plan.map(() => {
            return (
              <Red onClick={() => {
                  setPlan(oldArray => [...oldArray, 'plan']);
                }}/>
            )
          })}
        </HeaderContent>
        <MapAndList>
          <MapComponent />
          <List />
        </MapAndList>
      </WrapperPageContent>
    </div>
  );
}

export default App;
