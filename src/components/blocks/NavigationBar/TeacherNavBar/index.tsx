import { Nav } from '../Nav';
import NavBar from '../NavBar';

interface TeacherNavBarProps {
  visible: boolean;
}

export const TeacherNavBar = ({ visible }: TeacherNavBarProps) => {
  return (
    <NavBar link="/teacher" visible={visible}>
      <Nav link="/teacher/student">Student</Nav>
      <Nav link="/teacher/test">Test</Nav>
      <Nav link="/teacher/quiz">Quiz</Nav>
      <Nav link="/teacher/competition">Competition</Nav>
      <Nav link="/teacher/board">Board</Nav>
      <Nav link="/teacher/schedule">Schedule</Nav>
      <Nav link="/teacher/tools">Tools</Nav>
    </NavBar>
  );
};
