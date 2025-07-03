export interface DropdownItem {
  href: string;
  label: string;
  onClick?: () => void;
}

export interface DropdownSection {
  title: string;
  items: DropdownItem[];
}

export interface DropdownButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
  route?: string;
}

export interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface NavigationItem {
  id: string;
  label: string;
  component: React.ComponentType<{ isOpen: boolean; onClose: () => void }>;
}

export interface MobileMenuProps {
  isOpen: boolean;
  activeDropdown: string | null;
  onDropdownToggle: (dropdownName: string) => void;
  onClose: () => void;
  isScrolled: boolean;
}
