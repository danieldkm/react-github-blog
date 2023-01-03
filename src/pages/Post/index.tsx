import { NavLink, useParams } from 'react-router-dom';
import { faArrowUpRightFromSquare, faBuilding, faChevronLeft, faUserGroup, faCalendar, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'


import { Title } from '../../components/Title';
import { Text } from '../../components/Text';
import { 
  PostContainer, 
  CardContainer, 
  FlexSpacebetween,
  FlexRow,
  CommentContainer,
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
  comments: number;
  comments_url: string;
  html_url: string;
  user: {
    login: string;
  }
}
interface Comment {
  body: string;
}
export function Post() {
  const { number } = useParams();
  
  const [issue, setIssue] = useState<Issue>();
  const [comment, setComment] = useState<Comment>();

  console.log({
    number,
    uri: api.getUri(),
    issue,
  });

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    // api.get(`repos/danieldkm/react-github-blog/issues/${number}`, {
      api.get(`/repos/rocketseat-education/bootcamp-gostack-desafios/issues/71`, {

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

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    console.log('get comments', issue?.comments_url, issue?.comments_url.replace(api.getUri(), ''));
    api.get(issue?.comments_url.replace(api.getUri(), '') ?? '', {
      cancelToken: cancelToken.token,
    }).then(result => {
      setComment(result.data);
    }).catch((err) => {
      if(axios.isCancel(err)) {
        console.log('Request canceled!');
      }
    })
    return () => {
      cancelToken.cancel();
    }
  }, [issue?.comments_url])

  const diffDays = issue ? differenceInDays(new Date(), new Date(issue?.created_at)) : 0;
  const qtComment = issue ? issue.comments : 0;
  return (
    <PostContainer>
      <CardContainer>
        <FlexSpacebetween>
          <NavLink to="/" title="home"><FontAwesomeIcon icon={faChevronLeft} /> VOLTAR</NavLink>
          <a href={issue?.html_url} target="_blank" rel="noopener noreferrer">VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
        </FlexSpacebetween>
        <Title>Post</Title>
        <FlexRow>
          <Text><FontAwesomeIcon icon={faGithub} /> {issue?.user.login}</Text>
          <Text><FontAwesomeIcon icon={faCalendar} /> Há {diffDays} dia</Text>
          <Text><FontAwesomeIcon icon={faComment} /> {qtComment} comentários</Text>
        </FlexRow>
      </CardContainer>
      <CommentContainer>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {issue?.body ?? ''}
        </ReactMarkdown>
      </CommentContainer>
    </PostContainer>
  )
}