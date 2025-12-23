import { Box, Container, ImageList, ImageListItem, Typography } from '@mui/material'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    src: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    src: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
]

export default function PhotoGallery() {
  return (
    <Box sx={{
      background: 'radial-gradient(circle at 15% 30%, rgba(58, 125, 96, 0.2), transparent 35%), radial-gradient(circle at 80% 10%, rgba(227, 160, 107, 0.22), transparent 35%), linear-gradient(120deg, #0f1d1a 0%, #123327 60%, #1d3d2f 100%)',
      color: '#f8fafc',
      mt: { xs: 6, md: 8 },
      py: 6,
      borderTopLeftRadius: { xs: '32px', md: '56px' },
      borderTopRightRadius: { xs: '32px', md: '56px' },
    }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="secondary.light" fontWeight={700} letterSpacing={1}>
          Galeria
        </Typography>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Z życia stadniny
        </Typography>
        <ImageList
          variant="quilted"
          cols={{ xs: 1, sm: 2, md: 3 }}
          gap={12}
          sx={{ m: 0, pb: 2 }}
        >
          {images.map((item) => (
            <ImageListItem
              key={item.src}
              sx={{ overflow: 'hidden', borderRadius: 2 }}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                style={{ width: '100%', display: 'block' }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Box>
  )
}
