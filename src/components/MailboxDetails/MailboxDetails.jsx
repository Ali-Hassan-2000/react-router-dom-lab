import { useParams } from "react-router";

const MailboxDetails = (props) => {

    const { mailboxId } = useParams();

    const singleMailbox = props.mailboxes.find((box) => (
        box._id === Number(mailboxId)
    ));

  return (
    <>
      <h2>Details</h2>
      <ul>
        <li>Box holder: {singleMailbox.boxOwner}</li>
        <li>Box Size: {singleMailbox.boxSize}</li>
      </ul>
    </>
  );
};

export default MailboxDetails;