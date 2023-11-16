import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ProfilPic from "./tp-profil.svg";
import KnowledgeContainer from './Knowledge';

const AboutMeSection = () => {
    return (
        <Box sx={{flex: 1, maxWidth: 800, margin: '1.25rem auto', padding: '1.25rem', backgroundColor: '#fff', boxShadow: '0 0 0.625rem rgba(0, 0, 0, 0.1)',}}>
            <Typography variant="h3" sx={{mb: 2}}>Über mich</Typography>
            <Typography variant="h5" sx={{mb: 2}}>Ich bin Timo Petzold, 20 Jahre alt</Typography>

            <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Avatar alt="Profilbild" src={ProfilPic} sx={{ width: 450, height: 450, mb: 2 }} />
                <Typography variant="h5" sx={{ textAlign: 'center', mb: 2 }}>
                    Aktuelle Tätigkeit: Student für Medieninformatik und Interaktives Entertainment an der Hochschule Mittweida
                </Typography>
            </Container>

            <Typography variant="subtitle1" sx={{mb: 2}}>Ein leidenschaftlicher Programmierer mit Erfahrung in...</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <KnowledgeContainer />
            </Box>
        </Box>
    );
};

export default AboutMeSection;