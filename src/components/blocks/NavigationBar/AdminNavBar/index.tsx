import NavBar from '../NavBar';

interface AdminNavBarProps {
  visible: boolean;
}

export const AdminNavBar = ({ visible }: AdminNavBarProps) => {
  return <NavBar visible={visible}></NavBar>;
};
