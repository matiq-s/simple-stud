import {
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import CallIcon from '@mui/icons-material/Call'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import FacebookIcon from '@mui/icons-material/Facebook'

export default function Info() {
  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 6, xl: 6 } }}>
      <Grid container spacing={3}>
        <Grid container spacing={3} size={{ xs: 12, md: 7 }}>
          <Grid >
            <Card elevation={8} sx={{ height: '100%' }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Stack spacing={2}>
                  <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={1}>
                    O właścicielce
                  </Typography>
                  <Typography variant="h4" component="h2">
                    Aleksandra Skąpska
                  </Typography>
                  <Typography color="text.secondary">
                    Trenerka z doświadczeniem w pracy z końmi sportowymi i rekreacyjnymi. Wychowana
                    wśród koni, łączy rzetelną opiekę z indywidualnym podejściem do każdego jeźdźca.
                    Wierzy, że spokój, cierpliwość i konsekwencja budują zaufanie między koniem a
                    człowiekiem.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid>
            <Card sx={{ border: '1px solid rgba(15, 23, 42, 0.06)' }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Stack spacing={2}>
                  <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={1}>
                    Stajnia i okolica
                  </Typography>
                  <Typography variant="h4" component="h2">
                    Przestrzeń do pracy, odpoczynku i terenów
                  </Typography>
                  <Stack spacing={2}>
                    <Typography color="text.secondary">
                      Do dyspozycji mamy jasną halę do pracy w każdą pogodę, piaszczysty plac oraz
                      bezpieczne padoki z dostępem do wody i siana. Dbamy o regularny ruch, karmienie i
                      komfort koni przez cały rok.
                    </Typography>
                    <Typography color="text.secondary">
                      Stajnia położona jest w Grębaninie (gmina Baranów), wśród łąk i lasów sprzyjających
                      wyjazdom w teren. Szybki dojazd z Kępna, Wieruszowa i Ostrowa Wielkopolskiego
                      ułatwia regularne wizyty właścicieli.
                    </Typography>
                    <Divider />
                    <Stack spacing={1}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <LocationOnIcon color="primary" />
                        <Typography fontWeight={600}>Grębanin, okolice Kępna</Typography>
                      </Stack>
                      <Typography variant="body2" color="text.secondary">
                        Kameralna stajnia otoczona łąkami i lasami – idealna baza do spokojnej pracy i
                        terenów.
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>




        <Grid size={{ xs: 12, md: 5 }}>
          <Card
            sx={{
              height: '100%',
              background:
                'linear-gradient(160deg, rgba(58,125,96,0.08), rgba(227,160,107,0.12)), #fff',
              border: '1px solid rgba(15, 23, 42, 0.06)',
            }}
            id="contact"
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Stack spacing={2}>
                <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={1}>
                  Kontakt
                </Typography>
                <Typography variant="h5">Zadzwoń lub napisz</Typography>
                <Stack spacing={1.5}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <CallIcon color="primary" />
                    <Stack>
                      <Typography variant="body2" color="text.secondary">
                        Telefon
                      </Typography>
                      <Typography fontWeight={700}>
                        <a href="tel:+48535230220" style={{ color: 'inherit' }}>
                          +48 535230220
                        </a>
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <EmailIcon color="primary" />
                    <Stack>
                      <Typography variant="body2" color="text.secondary">
                        E-mail
                      </Typography>
                      <Typography fontWeight={700}>
                        <a href="mailto:dzik@stajenny.pl" style={{ color: 'inherit' }}>
                          dzik@stajenny.pl
                        </a>
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <LocationOnIcon color="primary" />
                    <Stack>
                      <Typography variant="body2" color="text.secondary">
                        Adres
                      </Typography>
                      <Typography fontWeight={700}>Grębanin 19g, <br /> 63-604, woj. wielkopolskie</Typography>
                    </Stack>
                  </Stack>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.9622850670935!2d17.977591076486096!3d51.23818947175334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471074b181d3ac7f%3A0x718fe8ddeb7b8bb8!2sStajnia%20Marsyl!5e0!3m2!1spl!2spl!4v1766511545630!5m2!1spl!2spl"
                    style={{ border: 0 }}
                    height={300}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Stack>

                <Stack direction="row" spacing={1}>
                  <Button variant="contained" href="tel:+4535230220" startIcon={<CallIcon />}>
                    Umów wizytę
                  </Button>
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      color="primary"
                      aria-label="Facebook"
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FacebookIcon />
                    </IconButton>
                  </Stack>

                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}