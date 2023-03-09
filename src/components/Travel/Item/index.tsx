import {
  Card,
  Image,
  Stack,
  Heading,
  Text,
  Box,
  CardBody,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';

import { TravelItemModal } from './Modal';

export const TravelItem = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { idx, name, mainImage, price, spaceCategory } = props;

  return (
    <>
      <Card maxW='sm'>
        <CardBody onClick={onOpen} cursor='pointer' p='3'>
          <Image src={mainImage} alt={name} borderRadius='md' />
          <Text pt='2' color='gray.500' fontSize='xs' borderRadius='base'>
            No. {idx}
          </Text>
          <Stack mt='2' spacing='2'>
            <Heading size='sm' fontWeight='bold' mb='3'>
              {name}
            </Heading>
          </Stack>
          <Flex justifyContent='space-between' alignItems='center'>
            <Text color='blue.600' fontSize='lg' fontWeight='bold'>
              ₩{price}
            </Text>
            <Box p='1.5' bg='gray.200' borderRadius='xl'>
              {spaceCategory}
            </Box>
          </Flex>
        </CardBody>
      </Card>
      <TravelItemModal open={isOpen} close={onClose} itemData={props} />
    </>
  );
};
