import * as React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import styled from '@emotion/styled';
import Box from '../components/Box';

const Content = styled.div`
  margin: auto;
  max-width: 40%;
`;

const Table = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(7, auto [col-start]);
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.1);

  span {
    display: block;
  }

  div {
    padding: .8em;
  }

  div:not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.15);
  }
`;


// markup
const Keivi = (props) => {
  console.log(props);
  return (
    <Layout title="Kirkkonummen Seudun Kiipeilijät Ry">
      <Section background="primary">
        <Content>
          <h1>Keivi</h1>
          <p>Keivi sijaitsee Masalan Monitoimitalon ja kirjaston rakennuksessa, se tarjoaa monipuolisen boulderseinän niin vasta-alkajalle, kuin kokoneellekkin kiikkujalle. Käytössämme on mm. Moon Board, johon löytyy yli 8000 valmista reittiä! Keivi on vain seuran jäsenille. Ota meihin yhteyttä seuran jäsenyys kiinnostaa!</p>
          <h3>Keivin aukioloajat 2020-2021:</h3>
          <Table>
            <div><span>Ma</span>15-22</div>
            <div><span>Ti</span>15-22</div>
            <div><span>Ke</span>15-22</div>
            <div><span>To</span>15-22</div>
            <div><span>Pe</span>15-22</div>
            <div><span>La</span>15-22</div>
            <div><span>Su</span>15-22</div>
          </Table>
        </Content>
      </Section>
      <Section background="light">
        <h2>Keivin säännöt</h2>
        <Box>
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

export const squareImage = graphql`
  fragment squareImage on File {
    thumb: childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const fullImage = graphql`
  fragment fullImage on File {
    full: childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const imagesQuery = graphql`
  query images {
    keivi1: file(relativePath: { eq: "keivi-1.jpg" }) {
      ...fullImage
      ...squareImage
    }
    keivi2: file(relativePath: { eq: "keivi-2.jpg" }) {
      ...fullImage
      ...squareImage
    }
    keivi3: file(relativePath: { eq: "keivi-3.jpg" }) {
      ...fullImage
      ...squareImage
    }
    keivi4: file(relativePath: { eq: "keivi-4.jpg" }) {
      ...fullImage
      ...squareImage
    }
  }
`;
