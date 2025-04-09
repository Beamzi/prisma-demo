import { RemovePostBtn } from "./RemovePostButton";

interface Props {
  author: string | null | undefined;
  title: string;
  content: string | null;
  id: string;
}

export default function Post({ author, title, content, id }: Props) {
  return (
    <div>
      <h3>{author}</h3>
      <h1>{title}</h1>
      <p>{content}</p>
      <RemovePostBtn id={id}></RemovePostBtn>
    </div>
  );
}
