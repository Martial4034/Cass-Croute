import DashboardSidebar from "@/components/DashboardSidebar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SettingsTabNavigation from "@/components/SettingsTabNavigation";

const Integrations = () => {
    return (
        <MaxWidthWrapper>
            <DashboardSidebar />
                <div className="flex">
            <div className="flex-grow">
                <div className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">Integrations</h1>
                    </div>
                    <SettingsTabNavigation />
                </div>
                {/* Insert the rest of your page content here */}
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* Replace this with your actual content */}
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                            {/* Content goes here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </MaxWidthWrapper>
    );
};

export default Integrations;