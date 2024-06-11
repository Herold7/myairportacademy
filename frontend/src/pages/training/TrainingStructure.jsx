import React from 'react';
import { useAgent } from './TrainingContext';
import { Container, Columns, Column, Image, Heading, SubHeading, Paragraph, List, ListItem, ButtonContainer, Button } from './styledComponents';

const TrainingStructure = ({ data }) => {
    const agent = useAgent();
    return (
        <Container pt={[3, 4, 5]} pb={[3, 4, 5]} mt={[0, 2, 3]} mb={[0, 2, 3]}>
            <Columns pr={[3, 4, 5]} pl={[3, 4, 5]}>
                <Column p={[2, 3, 4]} pl={[4, 5, 6]} pr={[4, 5, 6]}>
                    <figure>
                        <Image src={agent.img} alt={agent.imgAlt} width={[1, 1/2, 1/4]} />
                    </figure>
                </Column>
                <Column p={[2, 3, 4]} pl={[4, 5, 6]} pr={[4, 5, 6]}>
                    <Heading mt={[2, 3, 4]}>{agent.title}</Heading>
                    <Paragraph mt={[2, 3, 4]}>{agent.description}</Paragraph>
                </Column>
            </Columns>
            {agent.sections.map((section, index) => (
                <Column key={index} bgColor={section.bgColor} color={section.color} p={[2, 3, 4]} pl={[4, 5, 6]} pr={[4, 5, 6]}>
                    <SubHeading mt={[-1, -2, -3]} mb={[-4, -5, -6]}>
                        {section.heading}
                        <img src={section.icon} alt={section.iconAlt} />
                    </SubHeading>
                    <Paragraph mt={[2, 3, 4]}>{section.description}</Paragraph>
                    <List mt={[2, 3, 4]}>
                        {section.items.map((item, idx) => (
                            <ListItem key={idx} mt={[1, 2, 3]}>{item}</ListItem>
                        ))}
                    </List>
                </Column>
            ))}
            <ButtonContainer mt={[2, 3, 4]}>
                <Button href={agent.moreInfoLink} target="_blank" rel="noopener noreferrer" p={[2, 3, 4]} m={[1, 2, 3]}>
                    En savoir plus
                </Button>
                <Button href={agent.signupLink} outline p={[2, 3, 4]} m={[1, 2, 3]}>
                    Je m'inscris
                </Button>
            </ButtonContainer>
        </Container>
    );
};

export default TrainingStructure;
