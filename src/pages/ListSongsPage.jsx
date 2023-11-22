import { useProtectedPage } from "../hooks/useProtectedPage"; 
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { MainSongs } from "../components/MainSongs/MainSongs"

export function MusicPage() {
  useProtectedPage()

  return (
    <div>
      <Header/>
      <MainSongs/>
      <Footer/>
    </div>
  );
}

export default MusicPage;
