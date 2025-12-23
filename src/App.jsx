import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import CallIcon from '@mui/icons-material/Call'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import HorseIcon from '@mui/icons-material/Pets'
import './App.css'
import PhotoGallery from './PhotoGallery'
import Info from './Info'

const services = [
  {
    title: 'Hotelowanie koni',
    description:
      'Bezpieczne boksy, codzienny ruch i indywidualna opieka dopasowana do potrzeb każdego konia.',
  },
  {
    title: 'Nauka jazdy i skoków',
    description:
      'Lekcje dla początkujących i zaawansowanych, treningi sportowe, przygotowanie do startów i egzaminów.',
  },
  {
    title: 'Ujeżdżenie koni',
    description:
      'Profesjonalne treningi młodych i doświadczonych koni, budowanie równowagi i pewności pod siodłem.',
  },
]

function App() {
  return (
    <Box >
      <Box
        component="header"
        sx={{
          background:
            'radial-gradient(circle at 15% 30%, rgba(58, 125, 96, 0.2), transparent 35%), radial-gradient(circle at 80% 10%, rgba(227, 160, 107, 0.22), transparent 35%), linear-gradient(120deg, #0f1d1a 0%, #123327 60%, #1d3d2f 100%)',
          color: '#f3f5f0',
          borderBottomLeftRadius: { xs: '32px', md: '56px' },
          borderBottomRightRadius: { xs: '32px', md: '56px' },
          pb: { xs: 8, md: 12 },
          pt: { xs: 6, md: 10 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <Typography variant="h2" component="h1" sx={{ maxWidth: 780, lineHeight: 1.1 }}>
              Stadnina koni Marsyl
            </Typography>

            <Typography variant="body1" sx={{ maxWidth: 640, opacity: 0.9 }}>
              Rodzinna stajnia w Grębaninie, prowadzona z sercem. Tworzymy bezpieczną przestrzeń do
              treningu, rekreacji i rozwoju sportowego, łącząc profesjonalną opiekę ze spokojem
              okolicznych łąk.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowOutwardIcon />}
                href="#services"
              >
                Poznaj ofertę
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                startIcon={<CallIcon />}
                href="#contact"
                sx={{ borderColor: 'rgba(255,255,255,0.5)' }}
              >
                Kontakt
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }} id="services">
        <Stack
          spacing={3}
          alignItems={{ xs: 'flex-start', md: 'center' }}
          textAlign={{ md: 'center' }}
        >
          <Typography variant="h3" component="h2">
            Wszystko, czego potrzebujesz dla siebie i konia
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
            Kameralna przestrzeń, pełne bezpieczeństwo i indywidualne podejście. Stawiamy na spokojny
            rozwój i partnerską relację z końmi.
          </Typography>
        </Stack>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {services.map((service) => (
            <Grid key={service.title} size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  border: '1px solid rgba(15, 23, 42, 0.06)',
                  transition: 'transform 200ms ease, box-shadow 200ms ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: 8,
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Stack spacing={1.5}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          backgroundColor: 'primary.light',
                          display: 'grid',
                          placeItems: 'center',
                          color: '#0f1d1a',
                        }}
                      >
                        <HorseIcon />
                      </Box>
                      <Typography variant="h6">{service.title}</Typography>
                    </Stack>
                    <Typography color="text.secondary">{service.description}</Typography>
                    <Button size="small" endIcon={<ArrowOutwardIcon />} sx={{ alignSelf: 'flex-start' }}>
                      Dowiedz się więcej
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Info />

      <PhotoGallery />
    </Box>
  )
}

export default App
