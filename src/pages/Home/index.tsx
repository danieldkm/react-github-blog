import { useEffect, useState } from 'react';

import axios from 'axios';

import { api } from '../../services/api';

import { Profile } from './components/Profile'
import { Search } from './components/Search';
import { Card } from './components/Card';

import { HomeContainer, CardsContainer } from "./styles"

export function Home() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    api.get(`search/issues?q=repo:danieldkm/react-github-blog`, {
      cancelToken: cancelToken.token,
    }).then(result => {
      setIssues(result.data.items);
    }).catch((err) => {
      if(axios.isCancel(err)) {
        console.log('Request canceled!');
      }
    })
    return () => {
      cancelToken.cancel();
    }
  }, [])

  return (
    <HomeContainer>
      <Profile />
      <Search quantidadePublicacoes={issues.length} />
      <CardsContainer>
        {
          issues.map(issue => <Card issue={issue}/>)
        }
      </CardsContainer>
    </HomeContainer>
  )
}
