import * as React from 'react'
import products  from "../data"
import {useLocation} from 'react-router-dom'
import {
  AspectRatio,
  Box,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import { Rating } from '../components/Products/Rating'
import  FavoriteButton  from '../components/Products/FavoriteButton'
import { Link } from 'react-router-dom'

const Servicespage = () => {

  //Getting location of the product that was clicked
  const location = useLocation()

  //Let's declare a variable named path and set it to location.pathname.split("/")[1]
  //We will put it into an array and the get the id which wwill be the 3 item with and index of [2]
  const path = location.pathname.split("/")[2]


  const product = products.find(p => p.id.toString() === path)
  return (
    <div className="content">
   <Stack
      spacing={useBreakpointValue({
        base: '2',
        md: '3',
      })}
      
    > 
     <Box position="relative">
        <AspectRatio ratio={4 / 3}>
       
          <Image
            src={product.image}
            alt={product.name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({
              base: 'md',
              md: 'xl',
            })}
            objectFit="cover"
          />
        </AspectRatio>
       <FavoriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${product.name} to your favourites`}
        />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text fontWeight="md" fontSize="md" color={"gray"}>
            {product.name}
          </Text>
          {product.price}
        </Stack>
        <HStack>
          <Text fontSize="xl" color={"black"} fontWeight="bold">
            ${product.price} 
          </Text>
        </HStack>
         <HStack>
          <Rating defaultValue={product.rating} size="sm" />
          <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400') }>
            ({product.numberOfReviews} reviews)
          </Text>
          
        </HStack>
         <Button>Book Now</Button>
        </Stack>
      </Stack>
     </div>
     

    
  )
}

export default Servicespage