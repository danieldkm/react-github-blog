import { NavLink, useParams } from 'react-router-dom';
import { faArrowUpRightFromSquare, faBuilding, faChevronLeft, faUserGroup, faCalendar, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Title } from '../../components/Title';
import { Text } from '../../components/Text';
import { 
  PostContainer, 
  CardContainer, 
  FlexSpacebetween,
  FlexRow,
} from './styles';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../../services/api';
import { differenceInDays } from 'date-fns';

interface Issue {
  title: string;
  body: string;
  created_at: string;
  user: {
    login: string;
  }
}
interface Comment {
  
}
export function Post() {
  const { number } = useParams();
  console.log({
    number,
  });

  const [issue, setIssue] = useState<Issue>();

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    api.get(`repos/danieldkm/react-github-blog/issues/${number}`, {
      cancelToken: cancelToken.token,
    }).then(result => {
      setIssue(result.data);
    }).catch((err) => {
      if(axios.isCancel(err)) {
        console.log('Request canceled!');
      }
    })
    return () => {
      cancelToken.cancel();
    }
  }, [])

  const diffDays = issue ? differenceInDays(new Date(), new Date(issue?.created_at)) : 0;
  return (
    <PostContainer>
      <CardContainer>
        <FlexSpacebetween>
          <NavLink to="/" title="home"><FontAwesomeIcon icon={faChevronLeft} /> VOLTAR</NavLink>
          <a href="https://example.com">VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
        </FlexSpacebetween>
        <Title>Post</Title>
        <FlexRow>
          <Text><FontAwesomeIcon icon={faGithub} /> {issue?.user.login}</Text>
          <Text><FontAwesomeIcon icon={faCalendar} /> Há {diffDays} dia</Text>
          <Text><FontAwesomeIcon icon={faComment} /> 5 comentários</Text>
        </FlexRow>
      </CardContainer>
    </PostContainer>
  )
}