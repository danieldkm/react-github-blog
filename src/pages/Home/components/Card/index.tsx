import { useNavigate } from 'react-router-dom';
import { differenceInDays } from 'date-fns';

import { CardContainer, CardHeader } from './style';

interface Issue {
  title: string;
  body: string;
  created_at: Date;
  number: number;
}
interface CardProps {
  issue: Issue;
}
export function Card({ issue }: CardProps) {
  const { title, body, created_at, number } = issue;
  const navigateTo = useNavigate();

  const diffDays = differenceInDays(new Date(), new Date(created_at));

  function handleClick() {
    navigateTo(`/post/${number}`);
  }

  return (
    <CardContainer onClick={handleClick}>
      <CardHeader>
        <h1>{title}</h1>
        <p>Há {diffDays} dia(s)</p>
      </CardHeader>
      <p>
        {body}
      </p>
    </CardContainer>
  )
}