import {
  Box,
  Flex,
  Image,
  Skeleton,
  Stack,
  HStack,
  Text,
    useColorModeValue,
} from '@chakra-ui/react'
import  React, {useState, useEffect} from 'react'
import { Rating } from '../components/Products/Rating'
import styled from 'styled-components'
import axios from 'axios'
import {useParams, Link} from 'react-router-dom'

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  color: white;
  border-radius: 2px;
  background-color: #000;
  font-weight: bolder;
  height: 40px;
  width: 160px;
  &:hover {
    background-color: #E41E53;
  }
  
    
`
const Servicespage = () => {

const [service, setService] = useState({})

//Gives us the id in the params
const {id} = useParams()

  const fetchServices = async () => {
   
    //Fetching a single service from the database
    const {data} = await axios.get(`http://127.0.0.1:5000/api/services/${id}`)
     
    setService(data)
    
  }
  
  useEffect(() => {
   
    fetchServices()  
  
  }, [id])
  

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
    <Link to="/">
    <button type="button"
     className="back-btn"
    >Go back</button>
    </Link>
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
              {service.name}
            </h1>
            <p size="xl" fontWeight="normal" className="hero-paragraph">
              ${service.price}
            </p>
          <HStack>
          <Rating defaultValue={service.rating} size="sm" />
           {service.rating} 
          <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400') }>
            ({service.numberOfReviews} reviews)
          </Text> 
          </HStack>
        <HStack />
        <Button onClick={() => console.log('I was clicked')}>Book Now</Button>
        </Stack>  
         
       </Stack>
     
      </Box>
      <Flex flex="1" overflow="hidden">
        <Image
          src={service.image}
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
