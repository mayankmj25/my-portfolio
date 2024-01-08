import MenuIcon from '@mui/icons-material/Menu';
import TerminalIcon from '@mui/icons-material/Terminal';
import DownloadIcon from '@mui/icons-material/Download'
import { AppBar, Box, Container, IconButton, Toolbar, Menu, MenuItem, Typography, Button } from '@mui/material'
import Resume from '../../assets/mayank_jaiswal_resume.pdf'
import React from 'react'

const Navbar = () => {
  const pages = [
    {name  : "Home", link: '#home'},
    {name : "Experience", link: '#about'},
    {name: "Projects", link: '#projects'}
  ];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  return (
    <>
    <AppBar position='sticky' className='appbar'>
      <Container maxWidth='x1'>
        <Toolbar disableGutters>
          <TerminalIcon sx={{display: {xs: 'none', md: 'flex'}}}/>
          <Box sx={{flexGrow: 1, display: { xs: "flex", md: "none"} }}>
            <IconButton
            size='large'
            aria-label='menu'
            aria-controls='menu-apppbar' //wtf is this
            aria-haspopup = 'true'
            onClick={handleOpenNavMenu}
            color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu id='menu-appbar'
             anchorEl={anchorElNav}
             anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
             }}
             keepMounted
             transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
             }}
             open={Boolean(anchorElNav)}
             onClose={handleCloseNavMenu}
             sx={{
              display: {xs: "block", md: "none"}
             }}
             >
              {
                pages.map((page) => (
                  <MenuItem key={page.name}>
                    <Typography>
                      <a href={page.link}
                      style={{color: '#212125', textDecoration: "none"}}>
                        {page.name}
                      </a>
                    </Typography>
                  </MenuItem>
                ))
              }
            </Menu>
          </Box>
          <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}} className='navbar'>
            {
              pages.map((page) => (
                <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block"}}>
                  <a href={page.link} style={{color: "white", textDecoration: "none"}}>
                    {page.name}
                  </a>
                </Button>
              ))
            }
          </Box>
          <Box>
            <a href={Resume} download="Mayank Jaiswal Resume" target='_blank' rel='noreferrer' className='cv'>
              <Button variant='outlined' endIcon={<DownloadIcon />} className='btnDownload'>
                Download CV
              </Button>
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  )
}

export default Navbar