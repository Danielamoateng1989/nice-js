import {
  Box,
  Flex,
  Image,
  Button,
  Skeleton,
  Stack,
  HStack,
  Text,
    useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import products  from "../data"
import {useLocation} from 'react-router-dom'
import { Rating } from '../components/Products/Rating'


const Servicespage = () => {
 
const location = useLocation()
const path = location.pathname.split("/")[2]
const product = products.find(p => p.id.toString() === path)




 return (
    <Box
    maxW="7xl"
    mx="auto"
    px={{
      base: '0',
      lg: '12',
    }}
    py={{
      base: '0',
      lg: '12',
    }}
  >
    <Stack
      direction={{
        base: 'column-reverse',
        lg: 'row',
      }}
      spacing={{
        base: '0',
        lg: '20',
      }}
    >
      <Box
        width={{
          lg: 'sm',
        }}
        transform={{
          base: 'translateY(-50%)',
          lg: 'none',
        }}
        bg={{
          base: useColorModeValue('gray.50', 'gray.700'),
          lg: 'transparent',
        }}
        mx={{
          base: '6',
          md: '8',
          lg: '0',
        }}
        px={{
          base: '6',
          md: '8',
          lg: '0',
        }}
        py={{
          base: '6',
          md: '8',
          lg: '12',
        }}
      >
        <Stack
          spacing={{
            base: '8',
            lg: '10',
          }}
        >
          <Stack
            spacing={{
              base: '2',
              lg: '4',
            }}
          >
            <h1 size="xl" color={"black"} className="hero-heading">
              {product.name}
            </h1>
            <p size="xl" fontWeight="normal" className="hero-paragraph">
              ${product.price}
            </p>
          <HStack>
          <Rating defaultValue={product.rating} size="sm" />
          <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400') }>
            ({product.numberOfReviews} reviews)
          </Text> 
          </HStack>
        <HStack />
        </Stack>  
       </Stack>
      <Button>Book Now</Button>
      </Box>
      <Flex flex="1" overflow="hidden">
        <Image
          src={product.image}
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="450px"
          minW="300px"
          objectFit="cover"
          flex="1"
          borderRadius="1"
          />
         </Flex>
    </Stack>
 
  </Box>
)};
  
  
export default Servicespage
