import { SubmitTicket, AllTicket, Tab } from "../../components";

export default function Tickets() {
  const data = [
    {
      name: "Submit Ticket",
      route: "/dashboard/tickets/submit-ticket",
      children: <SubmitTicket />,
    },
    {
      name: "All Tickets",
      route: "/dashboard/tickets/all",
      children: <AllTicket />,
    },
  ];

  return (
    <div className="w-full mt-4 text-gray-900 dark:text-gray-100">
      <div className="w-full bg-white dark:bg-[#121212] rounded-lg shadow-md p-4">
        {/* Background design elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 bottom-0 w-[400px] h-[400px] bg-[#FFCC66]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFCC66]/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        </div>
        <Tab data={data} />
      </div>
    </div>
  );
}
