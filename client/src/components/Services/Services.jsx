import { Box } from '@chakra-ui/react'
import * as React from 'react'
import { ServicesCard } from './ServiceCard'
import  services  from '../../data'
import { ServiceGrid } from './ServiceGrid'

const Services = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{
      base: '4',
      md: '8',
      lg: '12',
    }}
    py={{
      base: '6',
      md: '8',
      lg: '12',
    }}
  >
    <ServiceGrid>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </ServiceGrid>
  </Box>
)

export default Services