import { PAGE_TYPE } from '@constants/app/pageType';
import { AdminNavBar } from './AdminNavBar';
import { StudentNavBar } from './StudentNavBar';
import { TeacherNavBar } from './TeacherNavBar';

interface NavigationBarProps {
  pageType: string;
  visible: boolean;
}

export const NavigationBar = ({ pageType, visible }: NavigationBarProps) => {
  switch (pageType) {
    case PAGE_TYPE.STUDENT:
      return <StudentNavBar visible={visible} />;
    case PAGE_TYPE.TEACHER:
      return <TeacherNavBar visible={visible} />;
    case PAGE_TYPE.ADMIN:
      return <AdminNavBar visible={visible} />;
    default:
      return <></>;
  }
};
