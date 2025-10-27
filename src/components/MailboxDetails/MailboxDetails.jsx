import { useParams } from "react-router";

const MailboxDetails = (props) => {

    const { mailboxId } = useParams();

    const singleMailbox = props.mailboxes.find((box) => (
      box._id === Number(mailboxId)
    ));

    const selectedLetters = props.letters.filter((letter) => (
      letter.mailboxId === mailboxId
    ));

  return (
    <>
      <h2>Mailbox {mailboxId}</h2>
      <h2>Details</h2>
      <ul>
        <li>Box holder: {singleMailbox.boxOwner}</li>
        <li>Box Size: {singleMailbox.boxSize}</li>
      </ul>

      <h3>Letters:</h3>
      {selectedLetters.length === 0 ? (
        <p>No letters in this mailbox yet.</p>
      ) : (
        <div className="letters-container"> 
          {selectedLetters.map(letter => (
            <div key={letter.mailboxId + letter.recipient} className="letter-card">
              <p><strong>To: {letter.recipient}</strong></p>
              <p>{letter.message}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MailboxDetails;