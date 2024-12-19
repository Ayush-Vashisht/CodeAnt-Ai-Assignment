interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface RepositoryCardProps {
  name: string;
  isPublic: boolean;
  language: string;
  languageColor: string;
  size: number;
  updatedAt: string;
}
