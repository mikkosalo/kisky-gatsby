import * as React from 'react';
import Layout from '../components/Layout';
import Section, { backgroundColorSelector } from '../components/Section';
import styled from '@emotion/styled';
import Box from '../components/Box';
import Content from '../components/Content';

const ContentMenu = styled.div`
  position: sticky;
  top: 0;
  background: ${backgroundColorSelector('primary')};
  text-align: center;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  z-index: 10;
  display: none;

  a {
    font-size: 1.1em;
    padding: 1em;
    display: inline-block;
    color: #fff;
    text-decoration: none;
    transition: all .2s ease-in-out;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  @media (min-width: 600px) {
    display: block;
  }
`;

// markup
const Keivi = () => {
  return (
    <Layout title="Seura" description="Kirkkonummen Seudun Kiipeilijät Ry perustettiin vuonna 2014 paikallisten kiipeilijöiden toimesta">
      <ContentMenu>
        <a href="#saannot">Säännöt</a>
        <a href="#edut">Edut</a>
        <a href="#jasenmaksut">Jäsenmaksut</a>
        <a href="#liity">Liity jäseneksi</a>
      </ContentMenu>
      <Section background="primary">
        <Content>
          <h1>Seura</h1>
          <p>Kirkkonummen Seudun Kiipeilijät ry perustettiin vuonna 2014, kun ryhmä lähiseudun kiipeilijöitä kokoontui yhteen rakentaakseen Masalan monitoimitaloon boulderkiipeilytilan eli lyhyesti ’Masalan keivin’.</p>
          <p>Seuran toiminta pyörii keivin ympärillä, tarjoten jäsenilleen talvikauden harjoittelutilan boulderkiipeilyseinien muodossa. Keväästä syksyyn toiminta tapahtuu pääasiassa ulkokallioilla.</p>
        </Content>
      </Section>

      <Section background="light" id="jasenmaksut">
        <h2>Jäsenmaksut 2021</h2>
        <Content>
          <p>Seuran jäsenmaksu koostuu keivin käyttömaksusta, Suomen Kiipeilyliiton (SKIL) jäsenmaksusta, sekä mahdollisesta avainmaksusta. Suomen kiipeilyliiton jäsenet on vakuutettu Pohjolan <a href="http://climbing.fi/content/kiipeilyvakuutus">Sporttiturva-vakuutuksella</a>, joka korvaa kiipeilyn aikana aiheutuneita henkilövahinkoja. Voit halutessasi liittyä myös ainoastaan ns. keivijäseneksi ilman Suomen Kiipeilyliiton jäsenyyttä, jolloin vastaat itse vakuutusturvastasi. Keivin avaimen haltijat maksavat lisäksi vuotuisen avaimen hallintamaksun.</p>
        </Content>
        <Box>
          <h3>Aikuisjäsen: 109 €/vuosi</h3>
          <p><b>Sisältää:</b> 46 € keivin käyttömaksu + 63 € SKIL jäsenmaksu (sisältää kiipeilyvakuutuksen 43 €, Kiipeily-lehden, yms).</p>
          <p>Jäsenen omat lapset, alle 10v: keivimaksu 0 €, mahdollinen SKIL-jäsenyys 57 € </p>
          <h3>Junnujäsen (17 v. ja alle): 79 €/vuosi</h3>
          <p><b>Sisältää:</b> 22 € keivin käyttömaksu + 57 € SKIL jäsenmaksu  (sisältää kiipeilyvakuutuksen 43 €, Kiipeily-lehden, yms).</p>
          <h3>Keivijäsen: 46 €/vuosi</h3>
          <p>Ainoastaan keivin käyttömaksu. Jäsen vastaa omasta vakuutuksestaan.</p>
          <h3>Avainmaksu: 20 €/vuosi</h3>
          <p>Vuosittainen avaimen hallinnasta veloitettava maksu. Maksun voi myös kompensoida isännöimällä viikoittaista vakiovuoroa 10 krt vuodessa.</p>
          <h3>Maksutiedot</h3>
          <p>
            <b>Saaja:</b> Kirkkonummen Seudun Kiipeilijät ry<br />
            <b>Tilinumero (IBAN):</b> FI66 3939 0057 5729 01, <b>BIC:</b> SBANFIHH<br />
            <b>Viesti:</b> Jäsenmaksu 2021 + Oma Nimi
          </p>
          <h3>Keivin avaimet</h3>
          <p>Avainten rajallisesta määrästä johtuen, avaimet jaetaan vuosittain hakemusten perusteella syyskokouksen yhteydessä vuodeksi kerrallaan. Myös nykyisten avainten haltijoiden tulee hakea avaimen hallintaa vuosittain.</p>
        </Box>
      </Section>

      <Section background="primary" id="edut">
        <h2>Jäsenyyden edut</h2>
        <Box>
          <ul>
            <li>Keivin rajaton käyttöoikeus aukioloaikoina</li>
            <li>Lainattava Moon Saturn Crash Pad ulkoboulderointiin</li>
            <li>4 boulderseinää: 40° Moon Board, 20° Moon Board, 20° Spray wall, 5° Spray wall</li>
            <li>Runsaasti otteita omien reittien tekemiseen</li>
            <li>Kampuslauta</li>
            <li>Useita sormilautoja</li>
          </ul>
        </Box>
        <h3>Suomen kiipeilyliiton tarjoamat edut</h3>
        <Box showOnlyTeaser>
        <ul>
            <li>SKIL jäsenseuroilla on maksutta (SKIL maksaa tämän seurojen puolesta) voimassa Pohjola/SLU:n TuplaTurva-vakuutus joka kattaa seuran toiminnanvastuuvakuutuksen, vapaaehtoistyön tapaturmavakuutuksen sekä seuratoiminnassa ja talkootoiminnassa tapahtuneet vahingot myös kolmannelle osapuolelle</li>
            <li>SKIL jäsenseurojen jäsenet saavat maksutta kolme kertaa vuodessa kotiinsa ”Kiipeily”-lehden</li>
            <li>jäsenseurat voivat liittyä SKIL:n koulutusjärjestelmään ja voivat kouluttaa jäseniään seinä- kalliokiipeily- ja jääkiipeilyn ohjaajiksi ja kouluttajiksi. KTO -koulutus on halvempaa SKIL jäsenseuran ohjaajille.</li>
            <li>jäsenseurat voivat ostaa omakustannushintaan liiton koulutusmateriaalia (mm. Seinäkiipelyn ja Kalliokiipeilyn peruskurssimateriaalit) ja SKIL julkaisuja huomattavasti alle ovh:n (TOPO-kirja, Seinäkiipeily -kirja, Harjoittelu -ja valmennus -kirja sekä tulevaisuudessa muita SKIL julkaisemia kirjoja) ja myydä jäsenilleen jälleenmyyntihintaan jolloin seura saa rahaa toimintaansa</li>
            <li>jäsenseurat saavat tukea ja tietoa koulutuksen sekä juniori- ja kilpailutoiminnan aloittamiseen. Seuran junioritoiminnan ohjaajat voivat osallistua maksutta SKIL valmennuskoulutuksen ensimmäisille tasoille ja saavat käyttöönsä SKIL julkaiseman Junnutoiminnan ohjaajan oppaan. Seurat voivat saada myös tukea Junnutoiminnan aloittamiseen nuorisovaliokunnalta.</li>
            <li>SKIL:n jäsenseurat pääsevät osallisiksi kiipeilyliiton hankkeisiin, mm. kalliokiipeily 2000-projekti (=kiipeilykallioiden pultitus SKIL välineillä, SKIL kustantaa pultit, ankkurit ja liimat sekä kouluttaa asentajat)</li>
            <li>SKIL ja seurat auttavat jäseniään kiipeilylupa- eli ns. access-ongelmissa ja neuvottelevat esim. metsähallituksen kanssa alueiden käytöstä</li>
            <li>Jäsenseura voi anoa SKIL:tä seuratukea seuran kiipeilytoiminnan kehittämiseen</li>
            <li>jäsenseuroilla on mahdollisuus saada SKIL internetsivuilta tilaa omille www-sivuilleen</li>
            <li>SKIL on Suomen Liikunta ja Urheilun (SLU) jäsen joten seuroilla on mahdollisuus käyttää SLU:n palveluja, esim. sporttisaittia</li>
            <li>seuran jäsenenä voit olla mukana seuran ja SKIL:n järjestämillä matkoilla ja osallistua koulutus-, valmennus- ja kiipeilytapahtumiin</li>
            <li>Skil ry:n kuuluu kansainväliseen kiipeilyliittojen kattojärjestöön UIAA:han, täten liiton jäsenet voivat saada ulkomailla alennuksia kiipeilyluvista, alppimajoissa<br />majoittumisissa ym.</li>
            <li>UIAA:n jäsenenä SKIL:ltä saa tietoa kansainvälisistä tapahtumista, kiipeilyn turvallisuus-standardeista ja välinekehityksestä pääset mukaan piristävään seuratoimintaan:)</li>
          </ul>
        </Box>
      </Section>

      <Section background="warning" id="liity">
        <h2>Hae jäseneksi</h2>
        <Content>
          <p>Seuran jäsenyyttä voi hakea kuka tahansa kiipeilystä innostunut. Seuran jäseneksi pääsee kun seuran hallitus on hyväksynyt uuden jäsenen liittymisen ja jäsenmaksu on suoritettu seuran tilille (Katso <a href="#jasenmaksut">jäsenmaksut</a>).</p>
          <p>Voit hakea jäsenyyttä lähettämällä meille sähköpostia osoitteeseen:
            <br /><b>seura@kisky.fi</b></p>
        </Content>
        <Box>
          <h3>Täytä vähintään seuraavat tiedot itsestäsi:</h3>
          <p>
            Nimi<br />
            Syntymäaika (esim. 1.1.2010)<br />
            Osoite<br />
            Postitoimipaikka<br />
            Postinumero<br />
            Puhelin<br />
            Email
          </p>
        </Box>
        <p>Alaikäisille hakijoilla pitää olla mukana myös holhoajan tiedot!</p>
      </Section>

      <Section background="light" id="saannot">
        <h2>Seuran viralliset säännöt</h2>
        <Box showOnlyTeaser>
          <h3>1. Yhdistyksen nimi ja kotipaikka</h3>
          <p>Yhdistyksen nimi on Kirkkonummen seudun kiipeilijät ry ja sen kotipaikka on Kirkkonummi.</p>
          <h3>2. Tarkoitus ja toiminnan laatu</h3>
          <p>Yhdistyksen tarkoituksena on herättää, kehittää ja ylläpitää kiipeilyharrastusta jäsentensä keskuudessa sekä tehdä kiipeilyharrastusta tunnetuksi toiminta-alueellaan.</p>
          <p>Tarkoituksensa toteuttamiseksi yhdistys:</p>
          <ul>
          <li>järjestää kiipeily-, urheilu- ja muita liikuntaharjoituksia sekä koulutustilaisuuksia</li>
          <li>Järjestää kerhoiltoja ja kiipeilytapamisia</li>
          <li>hankkii tarvittavia välineitä jäseniensä käyttöön</li>
          <li>järjestää näytöksiä, juhlia ja muuta vastaavaa toimintaa</li>
          <li>vaikuttaa kotipaikkakunnallaan liikunta- , terveyskasvatus- sekä liikuntapaikkasuunnitteluun.</li>
          <li>tukea jäseniensä kiipeily-, tutustumis- ja opintomatkoja</li>
          </ul>
          <p>Toimintansa tukemiseksi yhdistys voi harjoittaa julkaisutoimintaa, voi ottaa vastaan lahjoituksia ja testamentteja sekä omistaa toimintaansa varten tarpeellista irtainta ja kiinteää omaisuutta, omistaa toimintaansa varten tarpeellisia kiinteistöjä. Harjoittaa yhdessä toimipaikassa kahvilaliikettä ja kiipeilyvarustemyyntiä. Järjestää asianomaisella luvalla arpajaisia, rahankeräyksiä, myyjäisiä ja huvitilaisuuksia.<br /> Suomen Kiipeilyliitto – SKIL ry:n jäsenenä sitoudumme noudattamaan sen sääntöjä.</p>
          <h3>3. Jäsenet</h3>
          <p>Yhdistykseen jäseneksi voi liittyä jokainen, joka hyväksyy yhdistyksen tarkoituksen ja säännöt. Jäsenet hyväksyy hakemuksesta yhdistyksen hallitus. Alaikäisten on liitettävä hakemukseensa holhoojan suostumus.</p>
          <p>Yhdistyksen kokous voi yhdistyksen hallituksen esityksestäkutsua kunniajäsenekseen henkilön, joka on huomattavalla tavalla edistänyt yhdistyksen tarkoitusperiä tai kunnostautunut kiipeilyn alueella. Yhdistyksen kannattajajäseneksi voidaan hyväksyä yksityinen henkilö, oikeuskelpoinen yhteisö tai säätiö, joka haluaa tukea yhdistyksen toimintaa. Varsinaiset – ja kannattajajäsenet hyväksyy kirjallisesta hakemuksesta hallitus.</p>
          <h3>4. Jäsenen eroaminen ja erottaminen</h3>
          <p>Jäsenellä on oikeus erota yhdistyksestä ilmoittamalla siitä kirjallisesti hallitukselle tai sen puheenjohtajalle taikka ilmoittamalla erosta yhdistyksen kokouksessa merkittäväksi pöytäkirjaan. Hallitus voi erottaa jäsenen yhdistyksestä, jos jäsen on jättänyt erääntyneen jäsenmaksunsa maksamatta tai muuten jättänyt täyttämättä ne velvoitukset, joihin hän on yhdistykseen liittymällä sitoutunut tai on menettelyllään yhdistyksessä tai sen ulkopuolella huomattavasti vahingoittanut yhdistystä tai ei enää täytä laissa taikka yhdistyksen säännöissä mainittuja jäsenyyden ehtoja.</p>
          <h3>5. Liittymis- ja jäsenmaksu</h3>
          <p>Jäseniltä perittävän liittymismaksun ja vuotuisen jäsenmaksun suuruudesta päättää vuosikokous.</p>
          <h3>6. Hallitus</h3>
          <p>Yhdistyksen asioita hoitaa hallitus, johon kuuluu vuosikokouksessa valitut puheenjohtaja ja 2 muuta varsinaista jäsentä sekä 1 varajäsentä. Hallituksen toimikausi on vuosikokousten välinen aika. Hallitus valitsee keskuudestaan varapuheenjohtajan sekä ottaa keskuudestaan tai ulkopuoleltaan sihteerin, rahastonhoitajan ja muut tarvittavat toimihenkilöt. Hallitus kokoontuu puheenjohtajan tai hänen estyneenä ollessaan varapuheenjohtajan kutsusta, kun he katsovat siihen olevan aihetta tai kun vähintään puolet hallituksen jäsenistä sitä vaatii. Hallitus on päätösvaltainen, kun vähintään puolet sen jäsenistä, puheenjohtaja tai varapuheenjohtaja mukaanluettuna on läsnä. Äänestykset ratkaistaan ehdottomalla ääntenenemmistöllä. Äänten mennessä tasan ratkaisee puheenjohtajan ääni, vaaleissa kuitenkin arpa.</p>
          <h3>7. Yhdistyksen nimen kirjoittaminen</h3>
          <p>Yhdistyksen nimen kirjoittaa puheenjohtaja tai varapuheenjohtaja yksin tai hallituksen jäsenet kaksi (2) yhdessä tai hallituksen siihen erikseen oikeuttama henkilö yksin.</p>
          <h3>8. Tilikausi ja tilintarkastus</h3>
          <p>Yhdistyksen tilikausi on kalenterivuosi. Tilinpäätös tarvittavine asiakirjoineen ja hallituksen vuosikertomus on annettava toiminnantarkastajille/tilintarkastajille viimeistään kuukautta ennen vuosikokousta. Toiminnantarkastajien/tilintarkastajien tulee antaa kirjallinen lausuntonsa viimeistään kaksi viikkoa ennen vuosikokousta hallitukselle.</p>
          <h3>9. Yhdistyksen kokoukset</h3>
          <p>Yhdistyksen vuosikokous pidetään vuosittain hallituksen määräämänä päivänä tammi-toukokuussa. Ylimääräinen kokous pidetään, kun yhdistyksen kokous niin päättää tai kun hallitus katsoo siihen olevan aihetta tai kun vähintään kymmenesosa (1/10) yhdistyksen äänioikeutetuista jäsenistä sitä hallitukselta erityisesti ilmoitettua asiaa varten kirjallisesti vaatii. Kokous on pidettävä kolmenkymmenen vuorokauden kuluessa siitä, kun vaatimus sen pitämisestä on esitetty hallitukselle. Yhdistyksen kokouksissa on jokaisella jäsenellä yksi ääni. Yhdistyksen kokouksen päätökseksi tulee, ellei säännöissä ole toisin määrätty, se mielipide, jota on kannattanut yli puolet annetuista äänistä. Äänten mennessä tasan ratkaisee kokouksen puheenjohtajan ääni, vaaleissa kuitenkin arpa.</p>
          <h3>10. Yhdistyksen kokousten koollekutsuminen</h3>
          <p>Hallituksen on kutsuttava yhdistyksen kokoukset koolle vähintään seitsemän vuorokautta ennen kokousta jäsenille postitetuilla kirjeillä, yhdistyksen kotipaikkakunnalla ilmestyvässä sanomalehdessä tai sähköpostitse.</p>
          <h3>11. Vuosikokous</h3>
          <p>Yhdistyksen vuosikokouksessa käsitellään seuraavat asiat:</p>
          <ol>
          <li>kokouksen avaus</li>
          <li>valitaan kokouksen puheenjohtaja, sihteeri, kaksi pöytäkirjantarkastajaa ja tarvittaessa kaksi ääntenlaskijaa</li>
          <li>todetaan kokouksen laillisuus ja päätösvaltaisuus</li>
          <li>hyväksytään kokouksen työjärjestys</li>
          <li>esitetään tilinpäätös, vuosikertomus ja toiminnantarkastajien/tilintarkastajien lausunto</li>
          <li>päätetään tilinpäätöksen vahvistamisesta ja vastuuvapauden myöntämisestä hallitukselle ja muille vastuuvelvollisille</li>
          <li>vahvistetaan toimintasuunnitelma, tulo- ja menoarvio sekä liittymis- ja jäsenmaksun suuruus</li>
          <li>valitaan hallituksen puheenjohtaja ja muut jäsenet</li>
          <li>valitaan yksi tai kaksi toiminnantarkastajaa ja varatoiminnantarkastajaa taikka yksi tai kaksi tilintarkastajaa ja varatilintarkastajaa</li>
          </ol>
          <h3>10. käsitellään muut kokouskutsussa mainitut asiat.</h3>
          <p>Mikäli yhdistyksen jäsen haluaa saada jonkin asian yhdistyksen vuosikokouksen käsiteltäväksi, on hänen ilmoitettava siitä kirjallisesti hallitukselle niin hyvissä ajoin, että asia voidaan sisällyttää kokouskutsuun.</p>
          <h3>12. Sääntöjen muuttaminen ja yhdistyksen purkaminen</h3>
          <p>Päätös sääntöjen muuttamisesta ja yhdistyksen purkamisesta on tehtävä yhdistyksen kokouksessa vähintään kolmen neljäsosan (3/4) enemmistöllä annetuista äänistä. Kokouskutsussa on mainittava sääntöjen muuttamisesta tai yhdistyksen purkamisesta. Yhdistyksen purkautuessa käytetään yhdistyksen varat yhdistyksen tarkoituksen edistämiseen purkamisesta päättävän kokouksen määräämällä tavalla. Yhdistyksen tullessa lakkautetuksi käytetään sen varat samaan tarkoitukseen.</p>
        </Box>
      </Section>
    </Layout>
  )
}

export default Keivi;