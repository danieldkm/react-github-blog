import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { api } from '../../../../services/api';

import { Title } from '../../../../components/Title';
import { Text } from '../../../../components/Text';

import {
  ProfileContainer,
  ProfileDescriptionContainer,
  ProfileDescription,
  ProfileTitleContainer,
  ProfileDescriptionBottomContainer
} from './styles'

import { useEffect, useState } from 'react';

interface IUser {
  name?: string;
  bio?: string;
  avatar_url?: string;
  login?: string;
  company?: string;
  followers?: number;
}
interface ProfileProps {
  userName?: string
}
export function Profile({ userName }: ProfileProps) {
  const [user, setUser] = useState<IUser>({});
  const query = new URLSearchParams(useLocation().search)

  const userNameParam = query.get('username');
  const defaultUser = userNameParam ?? userName ?? 'danieldkm';
  
  useEffect(() => {
    const requestApi = async () => {
      const { data } = await api.get<IUser>(`users/${defaultUser}`);
      setUser(data);
    }
    requestApi();
  }, [])
  

  const url = `https://github.com/${defaultUser}`;
  return (
    <ProfileContainer>
      <img src={user.avatar_url} />
      <ProfileDescriptionContainer>
        <ProfileDescription>
          <ProfileTitleContainer>
            <Title>{user.name}</Title>
            <a href={url} target="_blank" rel="noopener noreferrer">GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
          </ProfileTitleContainer>
          <Text>{user.bio}</Text>
        </ProfileDescription>
        <ProfileDescriptionBottomContainer>
          <Text><FontAwesomeIcon icon={faGithub} /> {user.login}</Text>
          <Text><FontAwesomeIcon icon={faBuilding} /> {user.company}</Text>
          <Text><FontAwesomeIcon icon={faUserGroup} /> {user.followers} seguidores</Text>
        </ProfileDescriptionBottomContainer>
      </ProfileDescriptionContainer>
    </ProfileContainer>
  )
}
