// work as redirect
import { useNavigate } from 'react-router';

import { useState } from 'react';

const initialState = {
  boxOwner: '',
  boxSize: '',
};

const MailboxForm = (props) => {

  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    props.addBox(formData);
    setFormData(initialState); // after navigate we can remove this line

    navigate('/mailboxes');
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Enter a Boxholder:</label>
        <input
          type="text"
          id="boxOwner"
          name="boxOwner"
          value={formData.boxOwner}
          onChange={handleChange}
          required
        />

        <label htmlFor="boxSize">Select a Box Size:</label>
        <select
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
          required
        >
            <option value="">Select a size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;