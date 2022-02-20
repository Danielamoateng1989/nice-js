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
} from '@chakra-ui/react'
import { Rating } from './Rating'
import  FavoriteButton  from './FavoriteButton'
import {Link} from 'react-router-dom'



export const ProductCard = (props) => {
  const {rootProps } = props


  


return (
    <div className="content">
    <Stack
      spacing={useBreakpointValue({
        base: '2',
        md: '3',
      })}
      {...rootProps}
    >
      <Box position="relative">
        
        <Link to={`/services/${props.product._id}`}>
        <AspectRatio ratio={4 / 3}>
         
          <Image
            src={props.product.image}
            alt={props.product.name}
            cursor="pointer"
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({
              base: 'md',
              md: 'xl',
            })}
            objectFit="cover"
          />
          
        </AspectRatio>
        </Link>
       <FavoriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${props.product.name} to your favourites`}
        />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text fontWeight="md" fontSize="md" color={"gray"}>
            {props.product.name}
          </Text>
          {props.product.price}
        </Stack>
        <HStack>
          <Text fontSize="xl" color={"black"} fontWeight="bold">
            ${props.product.price} 
          </Text>
        </HStack>
         <HStack>
          <Rating defaultValue={props.product.rating} size="sm" />
          <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400') }>
            ({props.product.numberOfReviews} reviews)
          </Text>
        </HStack>
      </Stack>
    </Stack>
    
    </div>
          
  )
}
