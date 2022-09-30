import { Box } from "@mui/material";
import images from '../../image/brooke-cagle-cb4Dv50LN1Y-unsplash 1.png'

const Image_com = () => {
    return (
        <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          // backgroundImage:`url(${images})`
        }}
        alt="The house from the offer."
        src= {images}
      />
    )
}
export default Image_com;