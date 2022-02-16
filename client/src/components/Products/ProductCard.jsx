import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { Rating } from './Rating'
import  FavouriteButton  from './FavoriteButton'
import {Link} from 'react-router-dom'

export const ProductCard = (props) => {
  const { product, rootProps } = props
  const { name, image, price, rating, numberOfReviews  } = product
  
  return (
    <div className="content">
    <Link to="/products">
    <Stack
      spacing={useBreakpointValue({
        base: '2',
        md: '3',
      })}
      {...rootProps}
    >
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
       
          <Image
            src={image}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({
              base: 'md',
              md: 'xl',
            })}
            objectFit="cover"
          />
        </AspectRatio>
       <FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${name} to your favourites`}
        />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text fontWeight="md" fontSize="md" color={"gray"}>
            {name}
          </Text>
          {price}
        </Stack>
        <HStack>
          <Text fontSize="xl" color={"black"} fontWeight="bold">
            ${price} 
          </Text>
        </HStack>
         <HStack>
          <Rating defaultValue={rating} size="sm" />
          <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400') }>
            ({numberOfReviews} reviews)
          </Text>
        </HStack>
      </Stack>
    </Stack>
    </Link>
    </div>
  )
}
