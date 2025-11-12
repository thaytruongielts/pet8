
export interface ReadingTest {
  id: string;
  title: string;
  subtitle: string;
  instructions: string;
  text: string[];
  options: { id: string; text: string }[];
  correctAnswers: { [key: number]: string };
}
