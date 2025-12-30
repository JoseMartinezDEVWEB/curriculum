const heroImageUrl = new URL(
  '../../img/nueva01.png',
  import.meta.url
).href

const galleryUrls = [
  new URL('../../img/Imagen de WhatsApp 2025-11-26 a las 19.55.39_7cb3ce7a.jpg', import.meta.url).href,
  new URL('../../img/Imagen de WhatsApp 2025-11-26 a las 19.55.40_e5770bfd.jpg', import.meta.url).href,
  new URL('../../img/Imagen de WhatsApp 2025-11-26 a las 19.55.40_f7e19219.jpg', import.meta.url).href,
  new URL('../../img/Imagen de WhatsApp 2025-11-26 a las 19.55.41_aa332a79.jpg', import.meta.url).href,
  new URL('../../img/Imagen de WhatsApp 2025-11-26 a las 19.55.41_d76e7eb9.jpg', import.meta.url).href,
  new URL('../../img/Imagen de WhatsApp 2025-11-26 a las 19.55.42_cae1abff.jpg', import.meta.url).href
]

const cvPdfUrl = new URL('../../Santa Isabel Adon Vallejo02.pdf', import.meta.url).href

export const personal = {
  name: 'Santa Isabel Adon Vallejo',
  title: 'Enfermera Técnica',
  address: 'C/ Maria Verón, Villa La Fe, Punta Cana, R.D',
  phone: '849-857-6594',
  nationality: 'Dominicana',
  idCard: '402-2106547-3',
  birthDate: '25/03/1991',
  birthPlace: 'Santo Domingo, R.D',
  maritalStatus: 'Casada',
  objective:
    'Laborar en una empresa donde pueda brindar todos mis conocimientos para beneficio de la institución, laborando con entusiasmo y esmero para apoyar su crecimiento y cumplir con los objetivos establecidos.',
  heroImage: heroImageUrl,
  gallery: galleryUrls,
  cvPdf: cvPdfUrl
}
