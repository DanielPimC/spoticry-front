export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToLoginPage = (navigate) => {
  navigate("/login");
};

export const goToListPlaylistsPage = (navigate) => {
  navigate("/Playlists");
};

export const goBack = (navigate) => {
  navigate(-1);
};

export const goToCreatePlaylistPage = (navigate) => {
  navigate("/Nova Playlist")
}

export const goToDetailsPlaylistPage = (navigate, playlistId) => {
  navigate(`/Playlist/${playlistId}`)
}

export const goToListMusicsPage = (navigate) => {
  navigate("/Musics");
};
