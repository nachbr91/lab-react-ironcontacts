import './Contact.styles.css';

const Contact = (props) => {
  const { contact, index } = props;
  console.log(contact);
  return (
    <tr>
      <td>
        <img src={contact.pictureUrl} alt={contact.name}></img>
      </td>
      <td>{contact.name}</td>
      <td>{Math.round(contact.popularity)}</td>
    </tr>
  );
};

export default Contact;
