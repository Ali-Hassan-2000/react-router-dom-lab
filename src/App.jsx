import NavBar from "./components/NavBar/NavBar.jsx";
import { Route, Routes } from 'react-router';
import MailboxList from "./components/MailboxList/MailboxList.jsx";
import MailboxForm from "./components/MailboxForm/MailboxForm.jsx";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails.jsx";

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<h1>Post Office</h1>} />
        <Route path="/mailboxes" element={<MailboxList />} />
        <Route path="/new-mailbox" element={<MailboxForm />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} />
      </Routes>
    </>
  );
};

export default App;