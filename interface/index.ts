// interface/index.ts

// From pages/index.tsx
export interface PageRouteProps {
    pageRoute: string;
  }
  
  // interface/index.ts

export interface ButtonProps {
    buttonLabel: string;
    buttonSize?: string;
    buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
    action?: () => void;
  }
  
  
  // From components/layouts/Layout.tsx
  export interface LayoutProps {
    children: React.ReactNode;
  }
  