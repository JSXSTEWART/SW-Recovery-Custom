export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export type AppStatus = 'idle' | 'loading' | 'success' | 'error';
