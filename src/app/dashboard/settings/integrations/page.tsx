import DashboardSidebar from "@/components/DashboardSidebar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Integrations = () => {
    return (
    <MaxWidthWrapper>
        <div className="flex h-screen w-full bg-gray-100">
            <DashboardSidebar />
            {/* Le reste de votre page ici */}
            <h1>Integrations</h1>
        </div>
    </MaxWidthWrapper>
    );
};

export default Integrations;