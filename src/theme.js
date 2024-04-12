import { extendTheme } from '@chakra-ui/react';

//const theme = extendTheme({
  //styles: {
    //global: {
      //'@keyframes rotateBackground': {
        //'0%': { backgroundImage: 'url("/Users/rianstewart/Documents/SHU - SPRING 24/intelliparkamplify/src/images/shu image 1.jpeg")' },
        //'33%': { backgroundImage: 'url("/Users/rianstewart/Documents/SHU - SPRING 24/intelliparkamplify/src/images/shu image 2.jpeg")' },
        //'67%': { backgroundImage: 'url("/Users/rianstewart/Documents/SHU - SPRING 24/intelliparkamplify/src/images/shu image 3.jpeg")' },
        //'100%': { backgroundImage: 'url("/Users/rianstewart/Documents/SHU - SPRING 24/intelliparkamplify/src/images/shu image 1.jpeg")' },
      //},
      //body: {
        //animation: 'rotateBackground 15s infinite linear',
        //backgroundSize: 'cover',
        //backgroundPosition: 'center',
        //opacity: 1, // Adjust transparency
        //color: 'white',
      //},
    //},
  //},
//});

//export default theme;



const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgGradient: 'linear(to-r, red.500, red.900)',
        color: 'white', // Change text color as needed
      },
    },
  },
});

export default theme;
