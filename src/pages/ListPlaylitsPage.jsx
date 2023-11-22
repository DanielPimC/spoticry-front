import { useProtectedPage } from "../hooks/useProtectedPage"; 
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { MainPlaylists } from "../components/MainPlaylists/MainPlaylists"

export function FeedPage() {
  useProtectedPage()

  return (
    <div>
      <Header/>
      <MainPlaylists/>
      <Footer/>
    </div>
  );
}

export default FeedPage;
