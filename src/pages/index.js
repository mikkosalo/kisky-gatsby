import * as React from 'react';
import Layout from '../components/Layout';
import styled from '@emotion/styled';
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import Button from '../components/Button';

const ColumnLayout = styled.section`
  display: grid;
  bacgroud: #fff;
  grid-template-columns: 50% 50%;
`;

const Column = styled.div`
  background: #FF9900;
  padding: 4em;
  color: #fff;

  h1 {
    font-size: 2em;
  }
`;

const ImageColumn = styled.div`

`;

const IndexPage = (props) => {
  const { data: { file: { childImageSharp } } } = props;

  return (
    <Layout title="Kirkkonummen Seudun Kiipeilijät Ry">
      <ColumnLayout>
        <Column>
          <h1>Kirkkonummen Seudun Kiipeilijät Ry</h1>
          <p>Seura perustettiin vuonna 2014, kun ryhmä lähiseudun kiipeilijöitä kokoontui yhteen rakentaakseen Masalan monitoimitaloon boulderkiipeilytilan eli lyhyesti ’Masalan keivin’.</p>
          <p>Seuran toiminta pyörii keivin ympärillä, tarjoten jäsenilleen talvikauden harjoittelutilan boulderkiipeilyseinien muodossa. Keväästä syksyyn toiminta tapahtuu pääasiassa ulkokallioilla.</p>
          <Button to="/seura/" color="white">Seura</Button> <Button to="/keivi/" color="white">Keivi</Button>
        </Column>
        <ImageColumn>
          <Img fluid={childImageSharp.fluid} alt="Kiskyn keivi" />
        </ImageColumn>
      </ColumnLayout>
    </Layout>
  )
}

export default IndexPage

export const homeQuery = graphql`
  query HomePage {
    file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;