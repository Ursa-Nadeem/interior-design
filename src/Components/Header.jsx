import React from 'react'
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#525081',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "white"
}));

const Header = () => {
    return (
        <>
            <div className='headerTop'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container >
                        <Grid item lg={0.5} xs={0.7}>

                        </Grid>
                        <Grid item lg={1.5}>
                            <Item >                    <PhoneIcon />
                                0305-2833311</Item>
                        </Grid>
                        <Grid item lg={2.4}>
                            <Item> <MailOutlineIcon />
                                viewerscollection@yahoo.com</Item>
                        </Grid>
                        <Grid item lg={6} xs={4.5} sm={2} md={5}>

                        </Grid>
                        <Grid item lg={1}>
                            <Item><FacebookIcon /><InstagramIcon /></Item>
                        </Grid>
                    </Grid>
                </Box>


            </div>
        </>
    )
}

export default Header