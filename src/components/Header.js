import React from 'react'
import {AppBar, Toolbar,styled} from '@mui/material';

const Container=styled(AppBar)`
    background: #060606;
    height:9vh;
`
const Header = () => {

  const logo='https://seeklogo.com/images/C/codepen-logo-1B85489666-seeklogo.com.png';

  return (
    <Container position='static'>
        <Toolbar>
              <img src={logo} alt="logo" style={{width:40, paddingRight:20}}/>
              <h3>CodePlay</h3> 
        </Toolbar>
    </Container>
  )
}

export default Header