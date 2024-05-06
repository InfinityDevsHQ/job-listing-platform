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
    {
      type: 'incoming',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, illum atque. Ut
      quibusdam veritatis molestias, nulla quidem, cum quos, rem iusto eveniet minus explicabo
      veniam atque ratione adipisci necessitatibus obcaecati?`,
      senderImgUrl: '/assets/inbox/avatar.png',
      timeStamp: '09:10 PM',
    },
    {
      type: 'outgoing',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, illum atque. Ut
      quibusdam veritatis molestias, nulla quidem, cum quos, rem iusto eveniet minus explicabo
      veniam atque ratione adipisci necessitatibus obcaecati?`,
      senderImgUrl: '/assets/inbox/avatar.png',
      timeStamp: '09:10 PM',
    },
    {
      type: 'incoming',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta a dolore
      ipsam illo autem, quia laborum minima sunt repudiandae cumque cum nostrum doloremque
      porro fugit error suscipit ea voluptatum?`,
      senderImgUrl: '/assets/inbox/avatar.png',
      timeStamp: '10:05 PM',
    },
    {
      type: 'outgoing',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta a dolore
      ipsam illo autem, quia laborum minima sunt repudiandae cumque cum nostrum doloremque
      porro fugit error suscipit ea voluptatum?`,
      senderImgUrl: '/assets/inbox/avatar.png',
      timeStamp: '10:05 PM',
    },
    {
      type: 'incoming',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla voluptate
      quisquam ipsum repellendus. Dolorem saepe labore incidunt eum. Labore ipsam nemo odio
      consequatur minus, tempore harum. Tempora, assumenda ab.`,
      senderImgUrl: '/assets/inbox/avatar.png',
      timeStamp: '10:50 PM',
    },
    {
      type: 'outgoing',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla voluptate
      quisquam ipsum repellendus. Dolorem saepe labore incidunt eum. Labore ipsam nemo odio
      consequatur minus, tempore harum. Tempora, assumenda ab.`,
      senderImgUrl: '/assets/inbox/avatar.png',
      timeStamp: '10:50 PM',
    },
    {
      type: 'incoming',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam itaque nulla
      cupiditate magnam earum corporis odit distinctio voluptatem vero, excepturi quidem? Quia
      repellendus recusandae odit, rem itaque maiores quaerat magni!`,
      senderImgUrl: '/assets/inbox/avatar.png',
      timeStamp: '11:30 PM',
    },
    {
      type: 'outgoing',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam itaque nulla
      cupiditate magnam earum corporis odit distinctio voluptatem vero, excepturi quidem? Quia
      repellendus recusandae odit, rem itaque maiores quaerat magni!`,
      senderImgUrl: '/assets/inbox/avatar.png',
      timeStamp: '11:30 PM',
    },
    {
      type: 'incoming',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, alias inventore.
      Deserunt dolore, odio quidem et adipisci ipsum debitis earum, quod alias nisi distinctio
      quas vel beatae eveniet amet dolore!`,
      senderImgUrl: '/assets/inbox/avatar.png',
      timeStamp: '12:15 AM',
    },
    {
      type: 'outgoing',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, alias inventore.
      Deserunt dolore, odio quidem et adipisci ipsum debitis earum, quod alias nisi distinctio
      quas vel beatae eveniet amet dolore!`,
      senderImgUrl: '/assets/inbox/avatar.png',
      timeStamp: '12:15 AM',
    },
    {
      type: 'incoming',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, laboriosam?
      Laudantium facere exercitationem sequi eveniet atque. Perspiciatis, ipsum dolore vel
      nulla quisquam harum a, aliquid iste similique assumenda nemo?`,
      senderImgUrl: '/assets/inbox/avatar.png',
      timeStamp: '01:00 AM',
    },
    {
      type: 'outgoing',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, laboriosam?
      Laudantium facere exercitationem sequi eveniet atque. Perspiciatis, ipsum dolore vel
      nulla quisquam harum a, aliquid iste similique assumenda nemo?`,
      senderImgUrl: '/assets/inbox/avatar.png',
      timeStamp: '01:00 AM',
    },
    {
      type: 'incoming',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat natus, minus vel
      modi voluptate laudantium. Molestiae, expedita veniam non vero at corporis dolore
      doloremque magni eos iste, quaerat mollitia nulla.`,
      senderImgUrl: '/assets/inbox/avatar.png',
      timeStamp: '01:45 AM',
    },
    {
      type: 'outgoing',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat natus, minus vel
      modi voluptate laudantium. Molestiae, expedita veniam non vero at corporis dolore
      doloremque magni eos iste, quaerat mollitia nulla.`,
      senderImgUrl: '/assets/inbox/avatar.png',
      timeStamp: '01:45 AM',
    },
  ];

  return (
    <div className="chat flex  flex-1 flex-col gap-5 overflow-y-auto p-2.5 lg:gap-4 lg:p-8">
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
