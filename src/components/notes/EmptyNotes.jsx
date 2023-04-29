import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Light = styled(LightbulbOutlinedIcon)`
    font-size: 120px;
    color: #F5F5F5;
`

const Text = styled(Typography)`
    color: #80868b;
    font-size: 22px;
`

const Container = styled(Box)`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 25vh;
    margin-left: 50%;
    flex-direction: column;
`

const EmptyNotes = () => {
    return (
        <Container>
            <Light />
            <Text>Notes you add appear here</Text>
        </Container>
    )
}

export default EmptyNotes;