import { MainContainer, MainGrid, Info, InfoText } from "./Styles";
import musicDownload from "../../assets/musicDownload.png";
import musics from "../../assets/musics.png";
import noAd from "../../assets/noAd.png";
import readyListen from "../../assets/readyListen.svg";

export const Main = () => {
  return (
    <MainContainer>
      <h1>Porque ser Premium?</h1>
      <MainGrid>
        <Info>
          <img src={musicDownload} alt="Download de músicas" />
          <InfoText>
            <strong>Modo offline</strong>
            <p>Baixe suas músicas e ouça offline.</p>
          </InfoText>
        </Info>
        <Info>
          <img src={musics} alt="Várias musicas" />
          <InfoText>
            <strong>Na ordem que quiser</strong>
            <p>Qualquer música em qualquer ordem.</p>
          </InfoText>
        </Info>
        <Info>
          <img src={readyListen} alt="Qualidade de som superior" />
          <InfoText>
            <strong>Qualidade de som superior</strong>
            <p>Sinta o som.</p>
          </InfoText>
        </Info>
        <Info>
          <img src={noAd} alt="Sem anúncios" />
          <InfoText>
            <strong>Sem anúncios</strong>
            <p>Curta música sem anúncios.</p>
          </InfoText>
        </Info>
      </MainGrid>
    </MainContainer>
  );
};
