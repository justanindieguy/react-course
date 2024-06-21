export interface NavigationContextModel {
  currentPath: string;
  navigate: (to: string) => void;
}
