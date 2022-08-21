import { Box } from 'components/Box';

export default function Section({ children }) {
  return (
    <Box as="section" py={5}>
      {children}
    </Box>
  );
}
