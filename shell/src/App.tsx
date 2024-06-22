import React from 'react';
import './index.css';
import { Router } from './routing/Router';
import Example from './components/Example';

export const App = () => (
  <>
    <Router />
    <Example />
  </>
);
