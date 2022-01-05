import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Caaaarlos</h1>
        <h2>@CaarlosBelchior</h2>

        <p>
          Developer at{' '}
          <a href="https://instagram.com/digital_softwaresolutions?utm_medium=copy_link">
            @DigitalSoftwareSolutions
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Santa Fé do Sul, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 29 de novembro de 2001
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>1M </strong> seguidores{' '}
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
