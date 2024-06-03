const Container = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  padding-top: var(--wp--preset--spacing--70);
  padding-bottom: var(--wp--preset--spacing--70);
`;

const Columns = styled.div`
  display: flex;
  align-items: center;
  padding-right: var(--wp--preset--spacing--70);
  padding-left: var(--wp--preset--spacing--70);
`;

const Column = styled.div`
  flex-basis: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: var(--wp--preset--spacing--50);
  padding-left: var(--wp--preset--spacing--80);
  padding-right: var(--wp--preset--spacing--80);
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  color: ${({ color }) => color || 'inherit'};
`;

const Image = styled.img`
  border-radius: 32px;
  aspect-ratio: 4/3;
  object-fit: cover;
`;

const Heading = styled.h2`
  margin: 0;
`;

const SubHeading = styled.h3`
  margin-top: -1rem;
  margin-bottom: -4rem;
`;

const Paragraph = styled.p`
  margin: 0;
  line-height: 1.75;
`;

const List = styled.ul`
  line-height: 1.75;
`;

const ListItem = styled.li`
  list-style-type: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: var(--wp--preset--spacing--30);
  justify-content: center;
  padding: var(--wp--preset--spacing--50);
`;

const Button = styled.a`
  border-radius: 100px;
  padding: var(--wp--preset--spacing--50) var(--wp--preset--spacing--60);
  font-size: var(--wp--preset--font-size--kenta-font-xsmall);
  text-decoration: none;
  background-color: ${({ outline }) => (outline ? 'transparent' : '#000')};
  color: ${({ outline }) => (outline ? '#000' : '#fff')};
  border: ${({ outline }) => (outline ? '1px solid #000' : 'none')};
`;
