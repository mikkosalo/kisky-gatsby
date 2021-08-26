import React from 'react';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import Layout from '../components/Layout';
import Section from '../components/Section';
import styled from '@emotion/styled';
import Box from '../components/Box';
import { graphql } from 'gatsby';

export const Content = styled.div`
  margin: auto;
  max-width: 800px;
`;

const Table = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.1);
  font-weight: bold;

  span {
    font-weight: normal;

    &:after {
      content: ':  '
    }
  }

  div {
    padding: .2em;
  }

  div:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 800px) {
    display: inline-grid;
    grid-template-columns: repeat(7, auto [col-start]);

    span {
      display: block;

      &:after {
        content: ''
      }
    }

    div {
      padding: .8em;
    }

    div:not(:last-child) {
      border-right: 1px solid rgba(0, 0, 0, 0.15);
      border-bottom: 0;
    }
  }
`;

const GalleryContainer = styled.div`
  margin-top: 70px;

  a {
    margin: 5px;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    transition: transform .4s cubic-bezier(.165,.84,.44,1);
    display: inline-block;
    padding: 0;
    opacity: 0.8;
    
    img {
      vertical-align: bottom;
    }

    &:hover {
      opacity: 1;
      transform: scale(1.1);
    }
  }
`;

const ImageGallery = ({ images }) => {
  return (
    <GalleryContainer>
      <SRLWrapper>
        {images.map((image) => {
          return (
            <a href={image.node.full.fluid.src}>
              <img src={image.node.thumb.fluid.src} alt="Keivi" />
            </a>
          );
        })}
      </SRLWrapper>
    </GalleryContainer>
  );
};

// markup
const Keivi = (props) => {
  return (
    <Layout title="Keivi" description="Keivi sijaitsee Masalan Monitoimitalon ja kirjaston rakennuksessa, se tarjoaa monipuolisen boulderseinän niin vasta-alkajalle, kuin kokoneellekkin kiikkujalle.">
      <Section background="primary">
        <Content>
          <h1>Keivi</h1>
          <p>Keivi sijaitsee Masalan Monitoimitalon ja kirjaston rakennuksessa, se tarjoaa monipuolisen boulderseinän niin vasta-alkajalle, kuin kokoneellekkin kiikkujalle. Käytössämme on mm. Moon Board, johon löytyy yli 8000 valmista reittiä! Keivi on vain seuran jäsenille. Ota meihin yhteyttä seuran jäsenyys kiinnostaa!</p>
          <h3>Keivin aukioloajat 16.8.2021-22.5.2022:</h3>
          <Table>
            <div><span>Ma</span>15-22</div>
            <div><span>Ti</span>7-22</div>
            <div><span>Ke</span>16.30-22</div>
            <div><span>To</span>8-22</div>
            <div><span>Pe</span>15-22</div>
            <div><span>La</span>9-15.30</div>
            <div><span>Su</span>9-20</div>
          </Table>
          <h3>Vakiovuorot ja lähetysillat</h3>
          <p>Syksyllä 2021 vakiovuorot alkavat 1.9. ja jatkuvat vuoden loppuun asti.</p>
          <Table>
           <div><span>Ke</span>18-20</div>
           <div><span>Su</span>16-18</div>
          </Table>
          <h3>Koronarajoituksista lyhyesti</h3>
          <p>Keivi on avoinna seuralaisten käyttöön! Voit varata itsellesi yksityisajan tai osallistua toimintaan henkilömäärärajoitusten puitteissa.</p>
          <ul>
            <li>Keivin käyttö on sallittua käyttövuorojen aikana.</li>>
            <li>Älä tule keiville, jos sinulla on edes lieviä flunssan oireita.</li>
            <li>Keivin tiloissa saa olla maksimissaan kuusi henkilöä edellyttäen, että 2 metrin turvaväli pystytään säilyttämään.</li>
            <li>Pese kätesi ennen keiville tuloa.</li>
            <li>Yksi kiipeilijä seinän sektoria kohden. Muut kuin kiipeilijät odottavat käytävän puolella.</li>
            <li>Kiipeilysuorituksen aikana ei tarvitse käyttää maskia. Muita kehotetaan pitämään suosituksen mukaisesti maskia.</li>
            <li>Desinfioi käyttämäsi treenivälineet. Otteita ei desinfioida joka kerta, jotta niihin ei kerry tarpeettomasti liukastavia aineita. Desinfiointiainetta sekä käsille että varusteille on tarjolla keivillä.</li>
          </ul>
        </Content>
      </Section>
      <Section background="warning">
        <Content>
        <h2>Kulku keiville</h2>
          <p>Keiville pääsee Masalan nuorisotilan kautta pyytämällä valvojaa avaamaan oven. Nuorisotilan aukioloajat: <a href="https://www.kirkkonummi.fi/masalan-monitoimitalon-nuorisotila">www.kirkkonummi.fi/masalan-monitoimitalon-nuorisotila</a>. Muina aikoina avainten haltijoita voi pyytää avaamaan oven seuran keskustelukanavalla.</p>
        <h3>Keivin avaimet</h3>
          <p>Seuralla on rajallinen määrä keivin avaimia. Avaimet jaetaan hakemusten perusteella seuran syyskokouksessa vuodeksi kerrallaan aktiivisuuden perusteella. Avainten haltijoilta veloitetaan vuotuinen avainmaksu.</p>
        </Content>
        <SimpleReactLightbox>
          <ImageGallery images={props.data.allFile.edges} />
        </SimpleReactLightbox>
      </Section>
      <Section background="light">
        <h2>Keivin säännöt</h2>
        <Box showOnlyTeaser>
            <p>TÄSSÄ RAKENNUKSESSA PÄIHDYTTÄVIEN AINEIDEN NAUTTIMINEN SEKÄ TUPAKOINTI OVAT EHDOTTOMASTI KIELLETTYÄ!</p>
            <p>KIIPEILY PÄIHTYNEENÄ SEKÄ HUUMAUSAINEIDEN TAI NIIHIN LUOKITELTAVIEN AINEIDEN ALAISENA ON KIELLETTY.</p>
            <p>Sinun tulee lukea ja noudattaa kiipeilytilan sääntöjä, sekä noudattaa tilanvalvojan sekä nuoriso-ohjaajan ohjeita.</p>
            <p>Kiipeilyseinä on tarkoitettu ainoastaan Kirkkonummen Seudun Kiipeilijät ry:n jäsenmaksun maksaneiden jäsenien käyttöön.</p>
            <p>Sitoudut itse huolehtimaan kiipeilyharrastuksen vakuutusturvasta.</p>
            <p>Kiipeilyvuoroilla on sallittua oleskelu ainoastaan bouldertilassa. Aulassa olevat välineet eivät ole kiipeilijöiden käytössä.</p>
            <p>Kiipeillessä on käytettävä kiipeilykenkiä tai sisäpelitossuja. Sukkasillaan tai paljain jaloin kiipeily on kielletty hygienia syistä.</p>
            <p>Älä kävele ulkokengillä patjan päällä.</p>
            <p>Vältä mankan turhaa käyttöä pölyämisen ja otteiden tukkeutumisen takia. Älä pidä mankkapussia mukanasi kiivetessä.</p>
            <p>Kiipeilyseinien päälle nouseminen tai taakse meneminen on kielletty.</p>
            <p>Patjalla makoilu, juoksentelu ja hyppiminen on kiellettyä. Patjalla ei saa pitää mitään tavaroita.</p>
            <p>Vältä turhaa huutoa, äläkä kiroile. Anna toisten kiivetä rauhassa.</p>
            <p>Seinäkiipeilylle on ominaista, että otteet voivat joskus kääntyä tai pyörähtää. Ilmoita liikkuvista otteista välittömästi muille kiipeilijöille. <br />Kiipeily kyseisellä reitillä on kielletty ennen otteen uudelleen kiristämistä.</p>
            <p>Ilmoita havaitsemistasi vaaratilanteista muille kiipeilijöille viipymättä. </p>
            <p>Reittejä ei saa muuttaa ilman yhdistyksen bouldertilan vastaavan lupaa.</p>
            <p>Kiipeily ja alle 18 vuotiaat<br />Mikäli mukanasi on lapsia, niin huolehdi siitä, että he noudattavat kiipeilytilan sääntöjä.</p>
            <p>Alle 18 vuotiaat tarvitsevat huoltajansa kirjallisen suostumuksen kiipeilläkseen keivillä.</p>
            <p>Alle 15 vuotiaat saavat kiipeillä ainoastaan huoltajansa valvonnassa. Lasta ei saa jättää yksin.</p>
            <p>Yhtä huoltajaa kohden max. 2 alle 10 vuotiasta.</p>
            <p>Lasten kanssa kiipeiltäessä suosittelemme välttämään ruuhka aikoja.</p>
            <p>WC (pukuhuone)<br />Seuran vuoroilla WC (pukuhuone) löytyy samassa rakennuksessa olevan kirjaston aulasta. Kulku ulkokautta.</p>
            <p>Sääntöjen rikkomisen seuraamukset<br />Sääntöjen noudattamatta jättäminen ja/tai vaaratilanteen aiheuttaminen voi johtaa kiipeilyoikeuden menetykseen.</p>
            <p>Tilan siisteys on kaikkien vastuulla.</p>
        </Box>
      </Section>
    </Layout>
  )
}

export default Keivi;

export const imagesQuery = graphql`
  query images {
    allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
      edges {
        node {
          thumb: childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
          full: childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
