import Message from '../../_components/message';

const Messages = () => {
  return (
    <div className="flex flex-1 flex-col gap-5 p-2.5 lg:gap-4 lg:p-8">
      <p className="mx-auto mt-auto text-xs font-bold text-mute-3">4 March, 2024</p>
      <Message
        type="incoming"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga error eveniet tempora
      accusantium quaerat. Corporis reprehenderit, modi voluptatibus adipisci hic at cum id illo?
      Sunt iusto numquam recusandae autem repudiandae."
        sendImgUrl="/assets/inbox/avatar.png"
        timeStamp="06:30 PM"
      />
      <Message
        type="outgoing"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga error eveniet tempora
      accusantium quaerat. Corporis reprehenderit, modi voluptatibus adipisci hic at cum id illo?
      Sunt iusto numquam recusandae autem repudiandae."
        sendImgUrl="/assets/inbox/avatar.png"
        timeStamp="06:30 PM"
      />
    </div>
  );
};
export default Messages;
