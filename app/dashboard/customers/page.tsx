import { Metadata } from 'next'; 

export const metadata: Metadata = {
    title: 'Customers',
    description: 'Manage your customers in the dashboard',
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function Page(){
    return <p>Customers Page</p>
}