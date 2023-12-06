import {Federated} from '@callstack/repack/client';
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Placeholder from '../components/Placeholder';

const FastBooking = React.lazy(() =>
  Federated.importModule('booking', './FastBookingScreen'),
);

const FastBookingScreen = () => {
  return (
    <ErrorBoundary name="UpcomingScreen">
      <React.Suspense
        fallback={<Placeholder label="Booking" icon="calendar" />}>
        <FastBooking />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default FastBookingScreen;
