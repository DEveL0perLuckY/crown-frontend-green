import { useEffect, useState } from "react";
import { GitBranch, Users, UserPlus } from "lucide-react";
import { BinaryTree, Referral } from "../../components";
import { useAuth } from "../../hooks/useAuth";
import genealogyService from "../../services/genealogyService";

export default function Genealogy() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("Referral");
  const [allData, setAllData] = useState({
    allBinaryData: [],
    allReferralData: [],
  });

  const handleAllDataChange = (name, value) =>
    setAllData((prev) => ({ ...prev, [name]: value }));

  useEffect(() => {
    if (!user) return;
    (async () => {
      try {
        const [binaryTreeResponse, referralResponse] = await Promise.all([
          genealogyService.getBinaryTreeData(user),
          genealogyService.getReferralData(user),
        ]);

        if (binaryTreeResponse?.data?.success)
          handleAllDataChange("allBinaryData", binaryTreeResponse.data.data);

        if (referralResponse?.data?.success)
          handleAllDataChange("allReferralData", referralResponse.data.data);
      } catch (error) {
        console.error("Genealogy Fetch Error:", error);
      }
    })();
  }, [user]);

  const totalNetwork = allData.allReferralData?.length || 0;
  const directReferrals = allData.allReferralData?.filter(
    (ref) => ref?.referral?.level === 1
  ).length || 0;
  const networkDepth = allData.allReferralData?.reduce(
    (max, ref) => Math.max(max, ref?.referral?.level || 0),
    0
  );

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex border-b border-gray-300 dark:border-gray-700">
        {["Referral", "Binary Tree"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-medium text-sm transition-colors duration-200 ${
              activeTab === tab
                ? "border-b-2 border-amber-500 text-amber-600 dark:text-amber-400"
                : "text-gray-700 dark:text-gray-400 hover:text-amber-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Referral Tab */}
      {activeTab === "Referral" && (
        <div className="bg-white dark:bg-gray-700/20 border border-gray-200 dark:border-gray-700 shadow p-6 backdrop-blur-sm">
          {/* Background design elements */}
       <div className="absolute inset-0">
        <div className="absolute top-0 right-0 bottom-0 w-[400px] h-[400px] bg-[#FFCC66]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFCC66]/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>
          <h3 className="text-lg font-semibold tracking-wide text-gray-800 dark:text-white mb-4">
            Referral Network
          </h3>
          <Referral data={allData.allReferralData} />
        </div>
      )}

      {/* Binary Tree Tab */}
      {activeTab === "Binary Tree" && (
        <>
        

          {/* Binary Tree */}
          <div className="bg-white dark:bg-[#121212]  shadow  backdrop-blur-sm mt-6">
            {/* Background design elements */}
       <div className="absolute inset-0">
        <div className="absolute top-0 right-0 bottom-0 w-[400px] h-[400px] bg-[#FFCC66]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFCC66]/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold tracking-wide text-gray-800 dark:text-white">
                Network Structure
              </h3>
            </div>
            <div className="p-6">
              <BinaryTree data={allData.allBinaryData} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Theme-aware stat card
function StatCard({ icon, label, value, growth }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mr-3">
          {icon}
        </div>
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
          {label}
        </h3>
      </div>
      <div className="text-2xl font-bold text-gray-900 dark:text-white">
        {value}
      </div>
      <div className="flex items-center mt-1">
        <span className="text-amber-600 dark:text-amber-400 text-sm font-medium">
          {growth}
        </span>
        <span className="text-gray-600 dark:text-gray-400 text-sm ml-1">
          from last month
        </span>
      </div>
    </div>
  );
}
