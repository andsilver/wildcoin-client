const target = 150000;
const raised = 60000;
const softCap = 30000;
const crowdsale = 80000;
const hardcap = 120000;

export default function TokenSaleProgress() {
  const currentProgress = Math.round((raised / target) * 100);

  return (
    <div className="max-w-2xl w-full mx-auto">
      <div className="flex justify-between mb-3">
        <div>
          <span className="text-gray-400">Raised - </span>
          <span className="font-semibold">{raised.toLocaleString()}</span>
        </div>
        <div>
          <span className="text-gray-400">Target - </span>
          <span className="font-semibold">{target.toLocaleString()}</span>
        </div>
      </div>
      <div className="w-full rounded h-2 mb-4 bg-gray-700 relative">
        <div
          className="h-2 rounded bg-primary"
          style={{ width: `${currentProgress}%` }}
        ></div>
        <div
          className="flex flex-col items-center justify-center absolute top-[-4px]"
          style={{ left: Math.round((softCap / target) * 100) + "%" }}
        >
          <div className="h-[36px] w-[1px] bg-primary"></div>
          <div className="text-primary font-medium mt-2">Soft Cap</div>
        </div>
        <div
          className="flex flex-col items-center justify-center absolute top-[-4px]"
          style={{ left: Math.round((crowdsale / target) * 100) + "%" }}
        >
          <div className="h-[36px] w-[1px] bg-primary"></div>
          <div className="text-primary font-medium mt-2">Crowdsale</div>
        </div>
        <div
          className="flex flex-col items-center justify-center absolute top-[-4px]"
          style={{ left: Math.round((hardcap / target) * 100) + "%" }}
        >
          <div className="h-[36px] w-[1px] bg-primary"></div>
          <div className="text-primary font-medium mt-2 text-center">Hard Cap</div>
        </div>
      </div>
    </div>
  );
}
