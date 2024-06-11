import styled from 'styled-components';
import {
  space,
  layout,
  color,
  flexbox,
  typography,
  background,
  border,
  position,
} from 'styled-system';

const Container = styled.div`
  ${space}
  padding-top: var(--wp--preset--spacing--70);
  padding-bottom: var(--wp--preset--spacing--70);
`;

const Columns = styled.div`
  display: flex;
  align-items: center;
  ${space}
`;

const Column = styled.div`
  flex-basis: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${space}
  ${color}
`;

const Image = styled.img`
  border-radius: 32px;
  aspect-ratio: 4/3;
  object-fit: cover;
  ${layout}
`;

const Heading = styled.h2`
  margin: 0;
  ${space}
`;

const SubHeading = styled.h3`
  ${space}
`;

const Paragraph = styled.p`
  margin: 0;
  line-height: 1.75;
  ${space}
`;

const List = styled.ul`
  line-height: 1.75;
  ${space}
`;

const ListItem = styled.li`
  list-style-type: none;
  ${space}
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: var(--wp--preset--spacing--30);
  justify-content: center;
  ${space}
`;

const Button = styled.a`
  border-radius: 100px;
  ${space}
  ${typography}
  text-decoration: none;
  ${color}
  ${border}
`;

export {
  Container,
  Columns,
  Column,
  Image,
  Heading,
  SubHeading,
  Paragraph,
  List,
  ListItem,
  ButtonContainer,
  Button,
};
