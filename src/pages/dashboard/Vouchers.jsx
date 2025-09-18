import { useState, useEffect } from "react";
import { FaTicketAlt, FaPlus } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import vouchersService from "../../services/vouchersService";
import toast from "react-hot-toast";
import { AllVouchers, CreateVoucher } from "../../components";

export default function Vouchers() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("list");
  const [searchQuery, setSearchQuery] = useState("");
  const [vouchers, setVouchers] = useState([]);
  const [formData, setFormData] = useState({
    selectedWallet: "",
    amount: 0,
  });
  const [loadingStates, setLoadingStates] = useState({
    isVoucherLoading: false,
  });

  const handleFromDataChange = (name, value) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const handleLoadingState = (name, value) =>
    setLoadingStates((prev) => ({ ...prev, [name]: value }));

  useEffect(() => {
    fetchVouchers();
  }, []);

  const fetchVouchers = async () => {
    try {
      const res = await vouchersService.getAllVouchers(user);
      if (res.status === 200) {
        setVouchers(res?.data?.data || []);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  const handleVoucherSubmit = async () => {
    try {
      handleLoadingState("isVoucherLoading", true);
      const res = await vouchersService.createVoucher(user, {
        userId: user?.user?.userId,
        wallet: formData.selectedWallet?.value,
        amount: formData.amount,
        email: user?.user?.email,
      });
      if (res.status === 201) {
        handleLoadingState("isVoucherLoading", false);
        toast.success("Voucher created successfully");
        setActiveTab("list");
        fetchVouchers();
        setFormData({ selectedWallet: "", amount: 0 });
      }
    } catch (error) {
      handleLoadingState("isVoucherLoading", false);
      toast.error("Error creating voucher");
    }
  };

  const filteredVouchers = vouchers.filter((voucher) =>
    voucher.voucher_id?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Background design elements */}
       <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 bottom-0 w-[400px] h-[400px] bg-[#FFCC66]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFCC66]/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Voucher</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your vouchers</p>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-[#1E293B] rounded-t-lg">
        <div className="flex">
          <button
            onClick={() => setActiveTab("create")}
            className={`py-3 px-4 flex items-center transition duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-md ${
              activeTab === "create"
                ? "border-b-2 border-amber-400 text-gray-900 dark:text-white"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            <FaPlus className="mr-2" /> Create Voucher
          </button>

          <button
            onClick={() => setActiveTab("list")}
            className={`py-3 px-4 flex items-center transition duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-md ${
              activeTab === "list"
                ? "border-b-2 border-amber-400 text-gray-900 dark:text-white"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            <FaTicketAlt className="mr-2" /> Vouchers List
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-gray-700/20 border border-gray-200 dark:border-gray-700 shadow backdrop-blur-sm p-6">
        {activeTab === "list" ? (
          <AllVouchers
            vouchers={filteredVouchers}
            fetchVouchers={fetchVouchers}
          />
        ) : (
          <CreateVoucher
            formData={formData}
            onFormChange={handleFromDataChange}
            onSubmit={handleVoucherSubmit}
            loading={loadingStates.isVoucherLoading}
          />
        )}
      </div>
    </div>
  );
}
