import React from 'react';
import './App.css';
import styled from 'styled-components'
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



const WrapperPageContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
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
  height: calc(100vh - 300px);
  position: relative;
`;

const List = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  flex-grow: 1;
  scroll-behavior: smooth;
  height: 100%;
  background-color: #f8f8f8;
`; 

const Card = styled.div`
  min-height: ${props => props.selectedCard === props.currentCard ? "304px" : "114px"};
  width: 80%;
  background-color: blue;
  margin: 10px 0;
`;

const LeafLetContainer = styled(MapContainer)`
  z-index: 0;
  overflow: hidden;
  border: 1px solid white;
  width: 90%;
  height: calc(100vh - 300px);
`

const MapContainerStyled = styled.div`
  z-index: 0;
  overflow: hidden;
  width: 90%;
  height: 100%;
  background-color: green;
`;

const Red = styled.div`
  background-color: red;
  height: 120px;
  width: 80%;
  margin: 10px 0;
`

const ContentInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 69px;
  width: 100%;
`

const InputText = styled.input`
  width: 100%;
  margin: 0 10px;
  height: 39px;
`

const Switcher = styled.button`
  max-width: 100px;
  height: 20px;
`

const ExtendCard = styled.div`
  display: ${props => props.selectedCard ? "block" : "none"};
  position: absolute;
  background-color: pink;
  width: 40%;
  height: 100%;
  right: 0;
`;


const App = () =>  {
  const [plan, setPlan] = useState(["plan", 'plan'])
  const [selectedCard, setSelectedCard] = useState()
  const [content] = useState(['content','content','content','content','content','content','content','content','content','content','content','content','content','content','content','content','content','content','content','content', ])
  const [isDiv, setIsDiv] = useState(true)

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
          {/* <Switcher onClick={() => {setIsDiv(!isDiv)}}>{isDiv ? "display map" : "display div" }</Switcher> */}
        </HeaderContent>
        <MapAndList>
          {isDiv ? <MapContainerStyled /> : <MapComponent/>}
          <List>
            <ContentInput>
              <InputText type="text"/>
            </ContentInput>
            {content.map((item, i) => {
              return(
                <Card currentCard={i} selectedCard={selectedCard} key={i} onClick={() => {
                    setSelectedCard(item)
                  }} />
              )
            })}
          </List>
          {console.log(selectedCard)}
          <ExtendCard selectedCard={selectedCard}>
            <button onClick={() => {
                setSelectedCard(null)
              }}>
              close
            </button>
          </ExtendCard>
        </MapAndList>
      </WrapperPageContent>
    </div>
  );
}

export default App;




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

