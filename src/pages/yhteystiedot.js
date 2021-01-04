import React from 'react';
import Layout from '../components/Layout';
import styled from '@emotion/styled';
import GoogleMapReact from 'google-map-react';

const ColumnLayout = styled.section`
  display: grid;
  bacgroud: #fff;
  grid-template-columns: 100%;

  @media (min-width: 960px) {
    grid-template-columns: 50% 50%;
  }
`;

const Column = styled.div`
  background: #FF9900;
  padding: 1em;
  color: #fff;

  h1, h2 {
    margin-top: 0;
    font-size: 2em;
  }

  @media (min-width: 800px) {
    padding: 4em;
  }
`;

const MapColumn = styled.div`
  min-height: 500px;

  @media (min-width: 960px) {
    min-height: 800px;
  }
`;

const MapPointerStyles = styled.div`
  height: 14px;
  width:14px;
  border-radius: 9px;
  background: red;
  position: absolute;
  bottom: -20px;
  left: 50%;
  margin-left: -9px;
  border: 2px solid #fff;
`;

const MapPointer = () => {
  return (
    <MapPointerStyles />
  );
}

const Yhteystiedot = () => {
  return (
    <Layout title="Yhteystiedot" description="Kirkkonummen Seudun Kiipeilijät Ry">
      <ColumnLayout>
        <MapColumn>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCJNUoIjM9AJkMUT45bMNF1Wq6Au_guuM4' }}
            defaultCenter={{
              lat: 60.15454680117031,
              lng: 24.53060123527664
            }}
            defaultZoom={17}
          >
            <MapPointer lat={60.154197} lng={24.531229} text="KEIVI" />
          </GoogleMapReact>
        </MapColumn>
        <Column>
          <h1>Yhteystiedot</h1>
          <p>Tavoitat meidät parhaiten lähettämällä sähköpostia osoitteeseen: <b>seura@kisky.fi</b></p>
          <h2>Keivi</h2>
          <p>Keivi sijaitsee Masalan monitoimitalon ja kirjaston rakennuksessa osoitteessa: Sundsbergintie 1, 02430 Kirkkonummi</p>
          <p>Mikäli kiipeily keivillä kiinnostaa, otathan meihin yhteyttä.</p>
        </Column>
      </ColumnLayout>
    </Layout>
  )
}

export default Yhteystiedot;