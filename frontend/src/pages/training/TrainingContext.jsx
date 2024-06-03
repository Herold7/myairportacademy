import React, { createContext, useContext } from 'react';
import styled from 'styled-components';

// Contexte pour les données de l'agent
const AgentContext = createContext();

const AgentProvider = ({ children, agentData }) => {
  return (
    <AgentContext.Provider value={agentData}>
      {children}
    </AgentContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
const useAgent = () => {
  return useContext(AgentContext);
};
