// work as redirect
import { useNavigate } from 'react-router';
import { useState } from 'react';


const LetterForm = (props) => {

  const initialState = {
    recipient: '', 
    message: '',
  };

  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    props.addLetter(formData);
    console.log(formData)
    setFormData(initialState);

    navigate(`/mailboxes/${formData.mailboxId}`);
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Letter</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Select Mailbox:</label>
        <select
          id="mailboxId"
          name="mailboxId"
          value={formData.mailboxId}
          onChange={handleChange}
          required
        >
            <option value="">Select a mailbox</option>
            {props.mailboxes.map(mailbox => (
                <option key={mailbox._id} value={mailbox._id}>
                    mailbox {mailbox._id}
                </option>
            ))}
        </select>

        <label htmlFor="recipient">Recipient Name:</label>
        <input
          type="text"
          id="recipient"
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default LetterForm;