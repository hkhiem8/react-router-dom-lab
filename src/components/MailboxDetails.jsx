import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  if (!selectedBox) {
    return <h1>Mailbox Not Found!</h1>;
  }

  return (
    <>
      <h2>Mailbox #{selectedBox._id}</h2>
      <p>Boxholder: {selectedBox.boxholder}</p>
      <p>Size: {selectedBox.boxSize}</p>
    </>
  );
};

export default MailboxDetails;