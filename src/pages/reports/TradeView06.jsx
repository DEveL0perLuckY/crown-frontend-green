import React, { useEffect, useState } from "react";
import {
  ForexCrossRates,
  CryptoCurrencyMarket,
  SymbolOverview,
  MarketOverview,
  TechnicalAnalysis,
  AdvancedRealTimeChart,
  StockMarket,
  TickerTape,
  EconomicCalendar,
  SingleTicker,
  MiniChart,
  Timeline,
  Screener,
} from "react-ts-tradingview-widgets";

// Import icons from react-icons
import {
  FaChartLine,
  FaExchangeAlt,
  FaBitcoin,
  FaChartBar,
  FaSearch,
  FaChartPie,
  FaCalendarAlt,
  FaFilter,
  FaChartArea,
  FaNewspaper,
} from "react-icons/fa";

// Enhanced Header Component
const Header = ({ title, content, icon }) => {
  return (
    <div className="w-full flex flex-col gap-3 md:flex-row p-6 items-start md:items-center justify-between mb-6 border-b-2 border-gray-200">
      <div className="w-full md:w-[50%] flex items-center gap-4">
        {icon && <div className="text-4xl text-gray-700">{icon}</div>}
        <div>
          <h3 className="text-4xl font-bold text-gray-800">{title}</h3>
        </div>
      </div>
      <div className="w-full md:w-[50%]">
        <p className="text-base text-gray-600">{content}</p>
      </div>
    </div>
  );
};

// Enhanced BelowHeader Component
const BelowHeader = ({ title, content, icon }) => {
  return (
    <div className="w-full flex flex-col gap-3 p-4 items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        {icon && <div className="text-2xl text-gray-700">{icon}</div>}
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </div>
      <div>
        <p className="text-base text-gray-600 text-center">{content}</p>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ title, description, icon, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        {icon && <div className="text-2xl text-blue-600">{icon}</div>}
        <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
      </div>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      {children}
    </div>
  );
};

const TradeView = () => {
  //   const [showScrollTop, setShowScrollTop] = useState(false);

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       setShowScrollTop(window.scrollY > 300);
  //     };
  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, []);

  //   const scrollToTop = () => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   };

  return (
    <div className="relative overflow-x-hidden pt-16 mb-20 flex flex-col justify-center mx-auto md:mx-20 lg:mx-32">
      <div className="p-3">
        {/* Ticker Tape at the top */}
        {/* <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-screen-xl px-4">
          <TickerTape colorTheme="light" displayMode="adaptive" />
        </div> */}

        {/* Hero Section */}
        <div className="text-center my-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Professional{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
              Trading Dashboard
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access real-time market data, advanced charts, and comprehensive
            analysis tools all in one place.
          </p>
        </div>

        {/* Advanced Real-Time Charts */}
        <div className="flex flex-col">
          <Header
            title="Advanced Real-Time Charts"
            icon={<FaChartLine />}
            content="Advanced Real-Time Charts in trading are like a trader's crystal ball. They're dynamic tools displaying live price movements, patterns, and indicators, helping traders navigate the market's ever-changing seas with confidence."
          />
          <div className="bg-white rounded-lg shadow-lg p-4">
            <AdvancedRealTimeChart
              theme="light"
              height={600}
              width="100%"
              interval="D"
              timezone="Etc/UTC"
              style="1"
              locale="en"
              toolbar_bg="#f1f3f6"
              enable_publishing={false}
              allow_symbol_change={true}
              container_id="tradingview_advanced"
            />
          </div>
          <hr className="my-[60px] border-0 border-b-[1px] border-solid border-gray-300" />
        </div>

        {/* Forex Cross Rates */}
        <div className="flex flex-col">
          <Header
            title="Forex Cross Rates"
            icon={<FaExchangeAlt />}
            content="Forex Cross Rates are currency exchange rates that don't involve the U.S. dollar. They show the value of one currency in terms of another, excluding the USD, aiding in global currency comparisons."
          />
          <div className="bg-white rounded-lg shadow-lg p-4">
            <ForexCrossRates
              colorTheme="light"
              height={400}
              width="100%"
              currencies={[
                "EUR",
                "USD",
                "JPY",
                "GBP",
                "CHF",
                "AUD",
                "CAD",
                "NZD",
              ]}
              isTransparent={false}
              locale="en"
            />
          </div>
          <hr className="my-[60px] border-0 border-b-[1px] border-solid border-gray-300" />
        </div>

        {/* Cryptocurrency Market */}
        <div className="flex flex-col">
          <Header
            title="Cryptocurrency Market"
            icon={<FaBitcoin />}
            content="Stay updated with the latest cryptocurrency prices, market caps, and trading volumes. Track Bitcoin, Ethereum, and other major digital assets in real-time."
          />
          <div className="bg-white rounded-lg shadow-lg p-4">
            <CryptoCurrencyMarket
              colorTheme="light"
              height={500}
              width="100%"
              defaultColumn="overview"
              screener_type="crypto_mkt"
              displayCurrency="USD"
              locale="en"
            />
          </div>
          <hr className="my-[60px] border-0 border-b-[1px] border-solid border-gray-300" />
        </div>

        {/* Market Analysis Grid */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Comprehensive Market Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Market Overview"
              icon={<FaChartBar />}
              description="A Market Overview provides a snapshot of financial markets, summarizing key data such as indices, commodities, and currencies."
            >
              <MarketOverview
                colorTheme="light"
                height={400}
                width="100%"
                showFloatingTooltip
                plotLineColorGrowing="rgba(33, 150, 243, 1)"
                plotLineColorFalling="rgba(255, 82, 82, 1)"
                gridLineColor="rgba(240, 243, 250, 1)"
                scaleFontColor="rgba(120, 123, 134, 1)"
                belowLineFillColorGrowing="rgba(33, 150, 243, 0.12)"
                belowLineFillColorFalling="rgba(255, 82, 82, 0.12)"
                symbolActiveColor="rgba(33, 150, 243, 0.12)"
              />
            </FeatureCard>

            <FeatureCard
              title="Technical Analysis"
              icon={<FaSearch />}
              description="Technical Analysis is the study of historical price charts and trading volumes to forecast future price movements."
            >
              <TechnicalAnalysis
                colorTheme="light"
                height={400}
                width="100%"
                isTransparent={false}
                showIntervalTabs={true}
                locale="en"
                interval="1m"
              />
            </FeatureCard>

            <FeatureCard
              title="Stock Market"
              icon={<FaChartPie />}
              description="The Stock Market is a marketplace where investors buy and sell shares in publicly traded companies."
            >
              <StockMarket
                colorTheme="light"
                height={400}
                width="100%"
                isTransparent={false}
                showSymbolLogo={true}
                locale="en"
              />
            </FeatureCard>
          </div>
        </div>

        {/* Economic Calendar */}
        <div className="flex flex-col mb-16">
          <Header
            title="Economic Calendar"
            icon={<FaCalendarAlt />}
            content="Stay informed about important economic events, announcements, and data releases that can impact financial markets worldwide."
          />
          <div className="bg-white rounded-lg shadow-lg p-4">
            <EconomicCalendar
              colorTheme="light"
              height={500}
              width="100%"
              isTransparent={false}
              locale="en"
              importanceFilter="0,1,2"
            />
          </div>
        </div>

        {/* Market Screener */}
        <div className="flex flex-col mb-16">
          <Header
            title="Market Screener"
            icon={<FaFilter />}
            content="Filter and find trading opportunities across multiple markets using advanced screening criteria and real-time data."
          />
          <div className="bg-white rounded-lg shadow-lg p-4">
            <Screener
              colorTheme="light"
              height={500}
              width="100%"
              defaultColumn="overview"
              defaultScreen="general"
              market="forex"
              showToolbar={true}
              locale="en"
            />
          </div>
        </div>

        {/* Symbol Overview */}
        <div className="flex flex-col mb-16">
          <Header
            title="Symbol Overview"
            icon={<FaChartArea />}
            content="A Symbol Overview provides essential information about a financial instrument, including current price, trading volume, and other relevant data for quick reference and analysis."
          />
          <div className="bg-white rounded-lg shadow-lg p-4">
            <SymbolOverview
              colorTheme="light"
              height={400}
              width="100%"
              chartType="candlesticks"
              toolbar_bg="#f1f3f6"
              symbols={[
                ["Apple", "AAPL|1D"],
                ["Google", "GOOGL|1D"],
                ["Microsoft", "MSFT|1D"],
              ]}
              chartOnly={false}
              locale="en"
            />
          </div>
        </div>

        {/* Market News Timeline */}
        <div className="flex flex-col mb-16">
          <Header
            title="Market News & Updates"
            icon={<FaNewspaper />}
            content="Stay updated with the latest market news, analysis, and insights from around the financial world."
          />
          <div className="bg-white rounded-lg shadow-lg p-4">
            <Timeline
              colorTheme="light"
              height={400}
              width="100%"
              isTransparent={false}
              displayMode="regular"
              locale="en"
            />
          </div>
        </div>

        {/* Mini Charts Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Quick Market Snapshots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { symbol: "FX:EURUSD", title: "EUR/USD" },
              { symbol: "BITSTAMP:BTCUSD", title: "Bitcoin" },
              { symbol: "TVC:GOLD", title: "Gold" },
              { symbol: "TVC:DXY", title: "US Dollar Index" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-lg font-semibold mb-2 text-gray-800">
                  {item.title}
                </h4>
                <MiniChart
                  colorTheme="light"
                  height={200}
                  width="100%"
                  symbol={item.symbol}
                  dateRange="12M"
                  trendLineColor="rgba(41, 98, 255, 1)"
                  underLineColor="rgba(41, 98, 255, 0.3)"
                  isTransparent={false}
                  autosize={true}
                  locale="en"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-12 border-t border-gray-300">
          <p className="text-gray-600">
            Powered by TradingView Widgets • Real-time Market Data •
            Professional Trading Tools
          </p>
          <div className="mt-6 flex justify-center gap-6">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>

      <style>
        {`
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        /* Animation classes */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        /* Widget container styling */
        .tradingview-widget-container {
          border-radius: 8px;
          overflow: hidden;
        }

        /* Hover effects for cards */
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        /* Loading skeleton */
        .skeleton {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
        }

        @keyframes loading {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .tradingview-widget-container {
            margin: 0 -1rem;
          }
        }

        /* Custom tooltip styling */
        .tooltip {
          position: relative;
          display: inline-block;
        }

        .tooltip .tooltiptext {
          visibility: hidden;
          width: 200px;
          background-color: #333;
          color: #fff;
          text-align: center;
          border-radius: 6px;
          padding: 8px;
          position: absolute;
          z-index: 1;
          bottom: 125%;
          left: 50%;
          margin-left: -100px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .tooltip:hover .tooltiptext {
          visibility: visible;
          opacity: 1;
        }

        /* Print styles */
        @media print {
          .no-print {
            display: none !important;
          }
          
          .tradingview-widget-container {
            break-inside: avoid;
          }
        }
        `}
      </style>
    </div>
  );
};

export default TradeView;
