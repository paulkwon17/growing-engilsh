import NavBar from '../NavBar';

interface AdminNavBarProps {
  visible: boolean;
}

export default function AdminNavBar({ visible }: AdminNavBarProps) {
  return <NavBar link="/admin" visible={visible} />;
}
