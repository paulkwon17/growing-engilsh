import { Nav } from '../Nav';
import NavBar from '../NavBar';

interface StudentNavBarProps {
  visible: boolean;
}

export const StudentNavBar = ({ visible }: StudentNavBarProps) => {
  return (
    <NavBar link="/student" visible={visible}>
      <Nav link="/student/quiz">Quiz</Nav>
      <Nav link="/student/word">Word</Nav>
      <Nav link="/student/passage">Passage</Nav>
      <Nav link="/student/notice">Notice</Nav>
    </NavBar>
  );
};
