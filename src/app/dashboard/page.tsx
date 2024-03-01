import Sidebar from '@/components/Sidebar';
import { getServerSideUser } from '@/lib/payload-utils';
import { cookies } from "next/headers";

const DashboardPage: React.FC = async () => {
    
    const nextCookies = cookies()
    const { user } = await getServerSideUser(nextCookies);
    console.log(user);

    return (
        <div className="flex">
            {user && <Sidebar user={user} />}
            {/* Le reste de votre page ici */}
        </div>
    );
};

export default DashboardPage;
