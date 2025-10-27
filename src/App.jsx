import NavBar from "./components/NavBar/NavBar.jsx";
import { Route, Routes } from 'react-router';
import MailboxList from "./components/MailboxList/MailboxList.jsx";
import MailboxForm from "./components/MailboxForm/MailboxForm.jsx";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails.jsx";
import { useState } from 'react';
import './index.css';
import LetterForm from "./components/LetterForm/LetterForm.jsx";

const App = () => {

  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (addBoxData) => {
    addBoxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, addBoxData]);
  };

  const [letters, setLetters] = useState([]);

  const addLetter = (addLetterData) => {
    setLetters([...letters, addLetterData]);
  };

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<h1>Post Office</h1>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters}/> } />

        <Route path="/new-letter" element={<LetterForm 
          addLetter={addLetter} 
          mailboxes={mailboxes} />} 
        />

        <Route path="*" element={<h2>Error 404, nothing here!</h2>} />
      </Routes>
    </>
  );
};

export default App;