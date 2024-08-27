import Message from '../../_components/message';

const Messages = () => {
  const Messages: {
    type: 'incoming' | 'outgoing';
    text: string;
    senderImgUrl: string;
    timeStamp: string;
  }[] = [
    {
      type: 'incoming',
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga error eveniet tempora
    accusantium quaerat. Corporis reprehenderit, modi voluptatibus adipisci hic at cum id illo?
    Sunt iusto numquam recusandae autem repudiandae.`,
      senderImgUrl: '/assets/inbox/avatar.png',
      timeStamp: '06:30 PM',
    },
    {
      type: 'outgoing',
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga error eveniet tempora
      accusantium quaerat. Corporis reprehenderit, modi voluptatibus adipisci hic at cum id illo?
      Sunt iusto numquam recusandae autem repudiandae.`,
      senderImgUrl: '/assets/inbox/avatar.png',
      timeStamp: '06:30 PM',
    },
    {
      type: 'incoming',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit natus deleniti iste
      possimus? Facere aliquid, velit perspiciatis pariatur repellat sequi accusamus placeat
      eum! Illum placeat accusantium dolorum at autem quisquam.`,
      senderImgUrl: '/assets/inbox/avatar.png',
      timeStamp: '07:45 PM',
    },
    {
      type: 'outgoing',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit natus deleniti iste
      possimus? Facere aliquid, velit perspiciatis pariatur repellat sequi accusamus placeat
      eum! Illum placeat accusantium dolorum at autem quisquam.`,
      senderImgUrl: '/assets/inbox/avatar.png',
      timeStamp: '07:45 PM',
    },
    {
      type: 'incoming',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem iure
      distinctio. Deserunt eum quam et eveniet necessitatibus, voluptatem non! Ratione commodi
      ipsam adipisci nulla impedit est maxime mollitia?`,
      senderImgUrl: '/assets/inbox/avatar.png',
      timeStamp: '08:20 PM',
    },
    {
      type: 'outgoing',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem iure
      distinctio. Deserunt eum quam et eveniet necessitatibus, voluptatem non! Ratione commodi
      ipsam adipisci nulla impedit est maxime mollitia?`,
      senderImgUrl: '/assets/inbox/avatar.png',
      timeStamp: '08:20 PM',
    },
  ];

  return (
    <div className="chat flex flex-1 flex-col gap-5 overflow-y-auto border-b p-2.5 lg:gap-4 xl:p-8">
      <p className="mx-auto mt-auto text-xs font-bold text-mute-3">4 March, 2024</p>
      {Messages.map((message, index) => (
        <Message
          key={index}
          type={message.type}
          text={message.text}
          sendImgUrl={message.senderImgUrl}
          timeStamp={message.timeStamp}
        />
      ))}
    </div>
  );
};
export default Messages;
