import React from 'react';
import './App.css';
import styled from 'styled-components'
import { useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



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
  background-color: white;
`;

const MapAndList = styled.div`
  display: flex;
  margin-top: 15px;
`;

const List = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  flex-grow: 1;
  scroll-behavior: smooth;
  width: 450px;
  height: calc(100vh - 300px);
`; 

const Cards = styled.div`
  min-height: 90px;
  width: 80%;
  background-color: blue;
  margin: 10px 0;
`;

// const LeafLetContainer = styled(MapContainer)`
//   z-index: 0;
//   overflow: hidden;
//   border: 1px solid white;
//   width: 70%;
//   height: calc(100vh - 300px);
// `

const MapContainerStyled = styled.div`
  z-index: 0;
  overflow: hidden;
  border: 1px solid white;
  width: 70%;
  height: calc(100vh - 300px);
  background-color: green;
`;

const Red = styled.div`
  background-color: red;
  height: 120px;
  width: 80%;
  margin: 10px 0;
`



const App = () =>  {
  const [plan, setPlan] = useState(["plan", 'plan'])
  const [content] = useState(['content','content','content','content','content','content','content','content','content','content','content','content','content','content','content','content','content','content','content','content', ])


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
          <MapContainerStyled />
          <List>
            {content.map(() => {
              return(
                <Cards />
              )
            })}
          </List>
        </MapAndList>
      </WrapperPageContent>
    </div>
  );
}

export default App;













// const MapComponent = () => {
//   return (
//     <LeafLetContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
//       <TileLayer
//         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={[51.505, -0.09]}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//     </LeafLetContainer>
//   )
// }

