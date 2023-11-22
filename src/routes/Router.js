// routes/Router.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import ListPlaylitsPage from "../pages/ListPlaylitsPage";
import ListSongsPage from "../pages/ListSongsPage";
import { CreateNewPlaylistPage } from "../pages/CreateNewPlaylistPage";
import { DetailsPlaylistPage } from "../pages/DetailsPlaylistPage";

const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/Playlists" element={<ListPlaylitsPage />} />
    <Route path="/Playlist/:playlistId" element={<DetailsPlaylistPage />} />
    <Route path="/Songs" element={<ListSongsPage />} />
    <Route path="/Nova Playlist" element={<CreateNewPlaylistPage />} />
  </Routes>
);

export default Router;
