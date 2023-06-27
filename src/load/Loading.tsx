import {Box} from '@mantine/core'
import { RotatingLines } from  'react-loader-spinner'

const Loading = () => {
  return (
    <Box component='h1' sx={{position : 'fixed',left : 0,right : 0,bottom : 0, top : 0,zIndex : 100,width : '100%',display : 'flex',alignItems : 'center',justifyContent : 'center',backgroundColor : '#00000021'}}>
      <RotatingLines
  strokeColor="gray"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
    </Box>
  )
}

export default Loading