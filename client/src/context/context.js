import React, { createContext, useState } from "react";

// const initialState = {};

export const MainContext = createContext();

export const Provider = ({ children }) => {
  const sidebarContent = {
    profile: "Profile",
    addContest: "Add Contest",
    makeAnnouncement: "Make Announcement"
  };
  const [registration, setRegistration] = useState(false);
  const [profileEnter, setProfileEnter] = useState(false);
  const [question, setQuestion] = useState([]);
  const [googleLoginPage, setGoogleLoginPage] = useState(null);
  const [isLogIn, setIsLogIn] = useState(false);
  const [adminSection, setAdminSection] = useState(
    Object.keys(sidebarContent)[0]
  );
  return (
    <MainContext.Provider
      value={{
        registration,
        setRegistration,
        profileEnter,
        setProfileEnter,
        adminSection,
        setAdminSection,
        sidebarContent,
        question,
        setQuestion,
        googleLoginPage,
        setGoogleLoginPage,
        isLogIn,
        setIsLogIn
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
