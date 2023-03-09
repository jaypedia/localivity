import { Box } from '@chakra-ui/react';

import { getLocalStorageItem } from '@/utils';

import { OrderSummary } from '@/components/OrderSummary';
import { ReservationBox } from '@/components/Reservation/Box';
import { RESERVATIONS_KEY } from '@/constants/storage';

export const Reservations = () => {
  const reservations = getLocalStorageItem(RESERVATIONS_KEY) || [];

  if (!reservations.length) {
    return (
      <Box fontSize='lg' textAlign='center' fontWeight='bold'>
        장바구니가 비어있어요. 💨
      </Box>
    );
  }

  return (
    <>
      <OrderSummary />
      <ReservationBox reservationData={reservations} />
    </>
  );
};
