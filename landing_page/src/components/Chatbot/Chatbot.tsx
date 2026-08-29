import { useEffect } from 'react';
import Saleszium from '@saleszium/botsdk';

export default function Chatbot() {
  useEffect(() => {
    Saleszium({
      app_id: 'IJC4DN'
    });
  }, []);

  return null;
}