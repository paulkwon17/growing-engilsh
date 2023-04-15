import NavBar from '../NavBar';

interface AdminNavBarProps {
  visible: boolean;
}

export const AdminNavBar = ({ visible }: AdminNavBarProps) => {
  return <NavBar link="/admin" visible={visible}></NavBar>;
};
