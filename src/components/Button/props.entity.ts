import React from 'react';
export interface Props {
  children: React.ReactNode;
  variand: 'content' | 'outline' | 'default';
  color: 'red' | 'teal';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
