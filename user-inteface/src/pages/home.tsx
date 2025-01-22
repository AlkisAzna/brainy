import { Helmet } from 'react-helmet-async';
import { useState } from 'react'
import {
  TextField,
  Button,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
} from '@mui/material'
import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  return (
    <>
      <Helmet>
        <title>{`Dashboard - ${CONFIG.appName}`}</title>
        <meta
          name="description"
          content="Knowledge repository ecosystem that optimizes retrieval of common information"
        />
        <meta 
          name="keywords" 
          content="knowledge,repository,search,dashboard,information" 
        />
      </Helmet>

      <div className="dashboard-root">
        <AppBar position="static" color="default" elevation={1}>
          <Toolbar>
            <Typography
              variant="h6"
              component="h1"
              sx={{ flexGrow: 1, fontWeight: 600 }}
            >
              Search Knowledge
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="md" sx={{ mt: 8 }}>
          <Paper
            elevation={2}
            sx={{
              p: 4,
              backgroundColor: 'background.paper',
            }}
          >
            <form onSubmit={handleSearch}>
              <TextField
                fullWidth
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search knowledge repository..."
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
              >
                Search
              </Button>
            </form>
          </Paper>
        </Container>
      </div>
    </>
  )
}

export default Home
