import Image from 'next/image';

interface CommentProps {
  avatar: string;
  content: string;
}

export default function Comment(props: CommentProps) {
  const { avatar, content } = props;

  return (
    <div className="flex flex-row items-center gap-3">
      <div className="relative">
        <Image src={avatar} width={64} height={64} layout="fixed" alt="avatar" />
      </div>
      <div className="text-foreground font-normal" style={{ fontSize: '16px', lineHeight: '24px' }}>
        {content}
      </div>
    </div>
  );
}
