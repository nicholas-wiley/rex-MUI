'use client';

import { Box, Container, Typography, Button, Stepper, Step, StepLabel } from '@mui/material';
import Link from 'next/link';

const steps = [
  'Article Metadata',
  'Authors & Affiliations',
  'Funders',
  'Review',
  'Submit'
];

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Research Exchange (ReX) Prototype
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 4 }}>
          Multi-step submission workflow for scholarly articles using Material-UI components.
        </Typography>

        <Stepper activeStep={0} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Link href="/step-1" passHref>
          <Button variant="contained" size="large">
            Start Submission
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
