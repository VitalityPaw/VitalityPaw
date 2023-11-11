import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import MyAchievements from './Pages/MyAchievements';
import MyFriends from './Pages/MyFriends';
import MyWalks from './Pages/MyWalks';
import NewWalk from './Pages/NewWalk';
import Share from './Pages/Share';
import PetProfile from './Pages/PetProfile';
import UserProfile from './Pages/UserProfile';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App hat={false} />} />
        <Route path="/my-achievements" element={<MyAchievements />} />
        <Route path="/my-friends" element={<MyFriends />} />
        <Route path="/my-walks" element={<MyWalks />} />
        <Route path="/share" element={<Share />} />
        <Route path="/new-walk" element={<NewWalk />} />
        <Route path="/pet-profile" element={<PetProfile />} />
        <Route path="/hat" element={<App hat={true} />} />
        <Route path="/user-profile" element={<UserProfile />} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

reportWebVitals();
