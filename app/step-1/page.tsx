'use client';

import { Box, Container, Typography, TextField, Button, Paper } from '@mui/material';
import Link from 'next/link';

export default function Step1() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Step 1: Article Metadata
        </Typography>

        <Paper sx={{ p: 3, mt: 3 }}>
          <TextField
            fullWidth
            label="Article Title"
            variant="outlined"
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="Abstract"
            variant="outlined"
            multiline
            rows={4}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="Keywords"
            variant="outlined"
            helperText="Separate with commas"
            sx={{ mb: 3 }}
          />

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}>
            <Link href="/" passHref>
              <Button variant="outlined">Back</Button>
            </Link>
            <Link href="/step-2" passHref>
              <Button variant="contained">Next: Authors</Button>
            </Link>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
