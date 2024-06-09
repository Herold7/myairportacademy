import React from 'react';
import { useAgent } from './TrainingContext';
import { Container, Columns, Column, Image, Heading, SubHeading, Paragraph, List, ListItem, ButtonContainer, Button } from './styledComponents';

const TrainingStructure = ({ data }) => {
    const agent = useAgent();
    return (
        <Container>
            <Columns>
                <Column>
                    <figure>
                        <Image src={agent.img} alt={agent.imgAlt} />
                    </figure>
                </Column>
                <Column>
                    <Heading>{agent.title}</Heading>
                    <Paragraph>{agent.description}</Paragraph>
                </Column>
            </Columns>
            {agent.sections.map((section, index) => (
                <Column key={index} bgColor={section.bgColor} color={section.color}>
                    <SubHeading>
                        {section.heading}
                        <img src={section.icon} alt={section.iconAlt} />
                    </SubHeading>
                    <Paragraph>{section.description}</Paragraph>
                    <List>
                        {section.items.map((item, idx) => (
                            <ListItem key={idx}>{item}</ListItem>
                        ))}
                    </List>
                </Column>
            ))}
            <ButtonContainer>
                <Button href={agent.moreInfoLink} target="_blank" rel="noopener noreferrer">
                    En savoir plus
                </Button>
                <Button href={agent.signupLink} outline>
                    Je m'inscris
                </Button>
            </ButtonContainer>
        </Container>
    );
};

export default TrainingStructure;
