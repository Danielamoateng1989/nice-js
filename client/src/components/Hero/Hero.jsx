import {
  Box,
  Flex,
  Image,
  Skeleton,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'


export const Hero = () => (
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
              Appointments, Delivered!
            </h1>
            <p size="xl" fontWeight="normal" className="hero-paragraph">
              Book an appointment with a professional from <span>nice.com</span> and receive a hair, nails, makeup services at the comfort of your home
            </p>
          </Stack>
        </Stack>
      </Box>
      <Flex flex="1" overflow="hidden">
        <Image
          src="https://images.unsplash.com/photo-1629397685944-7073f5589754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="450px"
          minW="300px"
          objectFit="cover"
          flex="1"
          borderRadius="15"
          />
         </Flex>
    </Stack>
  </Box>
);