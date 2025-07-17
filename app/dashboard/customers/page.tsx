import { Metadata } from 'next'; 
import  CustomersTable  from '@/app/ui/customers/table';
import { fetchAllCustomers } from '@/app/lib/data';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Customers',
    description: 'Manage your customers in the dashboard',
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default async function Page(){
    const customers = await fetchAllCustomers();
    return (
      <>
        <Suspense fallback={<p>Loading customers...</p>}>
          <CustomersTable customers={customers} />
        </Suspense>
      </>
    )
}